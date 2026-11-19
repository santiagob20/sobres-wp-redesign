import { readConsent } from "@/lib/consent";

export const GOOGLE_TAG_ID = "GTM-N665X28V";
export const GOOGLE_ADS_ID = "AW-18456033671";
export const PURCHASE_CONVERSION_SEND_TO = "AW-18456033671/mje-CIGFzLsdEIfzwuBE";

const TRANSACTION_KEY = "sobrypal-ads-purchase-id";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __sobrypalGoogleTagReady?: boolean;
  }
}

const queue: Array<() => void> = [];
let adsReady = false;

function transactionId() {
  try {
    const existing = sessionStorage.getItem(TRANSACTION_KEY);
    if (existing) return existing;
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    sessionStorage.setItem(TRANSACTION_KEY, id);
    return id;
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

function sendConversion(eventCallback?: () => void) {
  if (readConsent() === "rejected") {
    eventCallback?.();
    return;
  }

  const gtag = window.gtag;
  if (!gtag) {
    eventCallback?.();
    return;
  }

  const payload: Record<string, unknown> = {
    send_to: PURCHASE_CONVERSION_SEND_TO,
    transaction_id: transactionId(),
  };
  if (eventCallback) {
    payload.event_callback = eventCallback;
    payload.event_timeout = 1500;
  }
  gtag("event", "conversion", payload);
}

export function markGoogleAdsReady() {
  if (adsReady || !window.__sobrypalGoogleTagReady || typeof window.gtag !== "function") return;
  adsReady = true;
  const jobs = queue.splice(0);
  for (const job of jobs) job();
}

export function trackPurchaseConversion(eventCallback?: () => void) {
  markGoogleAdsReady();
  if (!adsReady) {
    queue.push(() => sendConversion(eventCallback));
    return;
  }
  sendConversion(eventCallback);
}

export function isWhatsappUrl(href: string) {
  try {
    const url = new URL(href, window.location.href);
    return url.hostname === "wa.me" || url.hostname === "api.whatsapp.com";
  } catch {
    return false;
  }
}
