export const CONSENT_KEY = "sobrypal-analytics-consent";
export const CONSENT_EVENT = "sobrypal-analytics-consent";
export const CONSENT_OPEN_EVENT = "sobrypal-analytics-consent-open";

export type ConsentChoice = "accepted" | "rejected";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Private mode can block storage. The choice still applies on this page.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export function openConsentBanner() {
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}

export function clearAnalyticsCookies() {
  if (typeof document === "undefined") return;
  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  if (names.length === 0) return;

  const host = window.location.hostname;
  const domains = [host, host.startsWith("www.") ? host.slice(4) : `.${host}`];
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
    }
  }
}
