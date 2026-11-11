"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Analytics } from "firebase/analytics";
import { clearAnalyticsCookies, CONSENT_EVENT, readConsent } from "@/lib/consent";
import { firebaseWebConfig } from "@/lib/firebase";

let analytics: Analytics | null = null;
let starting: Promise<Analytics | null> | null = null;
let warned = false;

function warnMissingConfig() {
  if (warned || process.env.NODE_ENV !== "development") return;
  warned = true;
  console.warn(
    "Firebase Analytics is not configured. Add NEXT_PUBLIC_FIREBASE_* to .env.local and restart the dev server.",
  );
}

async function getAnalyticsInstance() {
  if (analytics) return analytics;
  if (!starting) starting = startAnalytics();
  analytics = await starting;
  return analytics;
}

async function startAnalytics() {
  const config = firebaseWebConfig();
  if (!config) {
    warnMissingConfig();
    return null;
  }

  const [{ initializeApp, getApps }, analyticsSdk] = await Promise.all([
    import("firebase/app"),
    import("firebase/analytics"),
  ]);

  if (!(await analyticsSdk.isSupported())) return null;

  // Consent must be set before the first analytics call, or gtag writes cookies immediately.
  analyticsSdk.setConsent({
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  const app = getApps()[0] ?? initializeApp(config);
  const instance = analyticsSdk.initializeAnalytics(app, {
    config: {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    },
  });
  analyticsSdk.setAnalyticsCollectionEnabled(instance, true);
  return instance;
}

async function trackPage(pathname: string) {
  const instance = await getAnalyticsInstance();
  if (!instance) return;
  const { logEvent, setAnalyticsCollectionEnabled, setConsent } = await import("firebase/analytics");
  setConsent({
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  setAnalyticsCollectionEnabled(instance, true);
  logEvent(instance, "page_view", {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}

async function stopTracking() {
  clearAnalyticsCookies();
  if (!analytics) return;
  const { setAnalyticsCollectionEnabled, setConsent } = await import("firebase/analytics");
  setConsent({
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  setAnalyticsCollectionEnabled(analytics, false);
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const sync = () => {
      const choice = readConsent();
      if (choice === "accepted") void trackPage(pathname);
      else if (choice === "rejected") void stopTracking();
    };

    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, [pathname]);

  return null;
}
