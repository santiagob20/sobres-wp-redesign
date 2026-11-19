"use client";

import { useEffect } from "react";
import { trackPurchaseConversion } from "@/lib/ads";

export function CotizaRedirect({ href }: { href: string }) {
  useEffect(() => {
    let left = false;
    const go = () => {
      if (left) return;
      left = true;
      window.location.assign(href);
    };

    trackPurchaseConversion(go);
    const timer = window.setTimeout(go, 2000);
    return () => {
      left = true;
      window.clearTimeout(timer);
    };
  }, [href]);

  return null;
}
