"use client";

import { useLayoutEffect, useState } from "react";
import { COUNT_UP_DURATION_MS } from "@/lib/motion";
import { useOnceInView } from "@/lib/use-once-in-view";

type ParsedStat = {
  prefix: string;
  suffix: string;
  group: string;
  target: number;
};

function parseStat(value: string): ParsedStat | null {
  const match = value.match(/^(\D*?)(\d[\d.,]*)(\D*)$/);
  if (!match) return null;
  const [, prefix, raw, suffix] = match;
  const group = raw.includes(",") ? "," : raw.includes(".") ? "." : "";
  const target = Number(raw.replace(/[.,]/g, ""));
  if (!Number.isFinite(target)) return null;
  return { prefix, suffix, group, target };
}

function formatStat(stat: ParsedStat, amount: number) {
  const rounded = Math.round(amount);
  const digits = stat.group
    ? String(rounded).replace(/\B(?=(\d{3})+(?!\d))/g, stat.group)
    : String(rounded);
  return `${stat.prefix}${digits}${stat.suffix}`;
}

export function CountUp({ value }: { value: string }) {
  const parsed = parseStat(value);
  const { ref, phase } = useOnceInView<HTMLSpanElement>();
  const [text, setText] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (phase !== "play" && phase !== "static") return;
    const stat = parseStat(value);
    if (!stat) return;
    if (phase === "static") {
      setText(value);
      return;
    }

    let frame = 0;
    let cancelled = false;
    const start = performance.now();
    setText(formatStat(stat, 0));

    const tick = (now: number) => {
      if (cancelled) return;
      const progress = Math.min(1, (now - start) / COUNT_UP_DURATION_MS);
      const eased = 1 - (1 - progress) ** 3;
      setText(formatStat(stat, stat.target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [phase, value]);

  const waiting = phase === "hidden" && parsed;
  const display = text ?? (waiting ? formatStat(parsed, 0) : value);

  return (
    <span ref={ref} className="tabular-nums" aria-label={value}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
