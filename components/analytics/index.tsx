"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GOOGLE_ADS_ID, GOOGLE_TAG_ID, isWhatsappUrl, markGoogleAdsReady, trackPurchaseConversion } from "@/lib/ads";
import { CONSENT_EVENT, readConsent } from "@/lib/consent";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-43N1P9VMTK";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const syncConsent = () => {
      if (typeof window === "undefined" || !("gtag" in window)) return;
      const choice = readConsent();
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;

      if (choice === "rejected") {
        gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      } else if (choice === "accepted") {
        gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        });
      }
    };

    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
      gtag("config", MEASUREMENT_ID, {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  useEffect(() => {
    markGoogleAdsReady();
    const started = Date.now();
    const id = window.setInterval(() => {
      markGoogleAdsReady();
      if (window.__sobrypalGoogleTagReady || Date.now() - started > 10000) {
        window.clearInterval(id);
      }
    }, 50);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link || !isWhatsappUrl(link.href)) return;
      trackPurchaseConversion();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive" onReady={markGoogleAdsReady}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
          });
          gtag('config', '${MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
          gtag('config', '${GOOGLE_TAG_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');
          window.__sobrypalGoogleTagReady = true;
        `}
      </Script>
    </>
  );
}
