"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ProductArt } from "@/components/product-art";
import type { ArtKind } from "@/lib/site";

const TAP_PX = 8;

export function ProductMedia({
  art,
  image,
  imageAlt,
  label,
  href,
  className,
  zoomOnHover = false,
}: {
  art: ArtKind;
  image?: string;
  imageAlt?: string;
  label: string;
  href: string;
  className: string;
  zoomOnHover?: boolean;
}) {
  if (!image) {
    return (
      <Link
        href={href}
        className={`group block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`}
      >
        <div className={zoomOnHover ? "h-full transition duration-300 group-hover:scale-[1.03]" : "h-full"}>
          <ProductArt kind={art} />
        </div>
      </Link>
    );
  }

  return (
    <ProductCarousel
      art={art}
      image={image}
      imageAlt={imageAlt ?? label}
      label={label}
      href={href}
      className={className}
    />
  );
}

function ProductCarousel({
  art,
  image,
  imageAlt,
  label,
  href,
  className,
}: {
  art: ArtKind;
  image: string;
  imageAlt: string;
  label: string;
  href: string;
  className: string;
}) {
  const slides = 2;
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const tracking = useRef(false);
  const axis = useRef<"x" | "y" | null>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const moved = useRef(0);
  const suppressClick = useRef(false);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    tracking.current = true;
    axis.current = null;
    moved.current = 0;
    startX.current = event.clientX;
    startY.current = event.clientY;
    setDragging(true);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!tracking.current) return;
    const dx = event.clientX - startX.current;
    const dy = event.clientY - startY.current;
    if (!axis.current) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axis.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (axis.current === "y") {
        tracking.current = false;
        setDragging(false);
        setOffset(0);
        return;
      }
      frame.current?.setPointerCapture(event.pointerId);
    }
    if (axis.current !== "x") return;
    moved.current = dx;
    const atStart = index === 0 && dx > 0;
    const atEnd = index === slides - 1 && dx < 0;
    setOffset(atStart || atEnd ? dx * 0.35 : dx);
  }

  function finish(event: ReactPointerEvent<HTMLDivElement>) {
    if (!tracking.current) return;
    const width = frame.current?.clientWidth ?? 1;
    const dx = moved.current;
    if (axis.current === "x" && Math.abs(dx) > Math.max(48, width * 0.18)) {
      const direction = dx < 0 ? 1 : -1;
      setIndex((current) => Math.min(slides - 1, Math.max(0, current + direction)));
    }
    if (Math.abs(dx) > TAP_PX) suppressClick.current = true;
    tracking.current = false;
    axis.current = null;
    moved.current = 0;
    setDragging(false);
    setOffset(0);
    if (frame.current?.hasPointerCapture(event.pointerId)) {
      frame.current.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div
      ref={frame}
      className={`relative touch-pan-y select-none ${className}`}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Fotos de ${label}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finish}
      onPointerCancel={finish}
      onClickCapture={(event) => {
        if (!suppressClick.current) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClick.current = false;
      }}
    >
      <Link
        href={href}
        className="absolute inset-0 block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <div
          className="flex h-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-reduce:transition-none"
          style={{
            transform: `translate3d(calc(${-index * 100}% + ${offset}px), 0, 0)`,
            ...(dragging ? { transition: "none" } : {}),
          }}
        >
          <div className="h-full w-full shrink-0" aria-hidden={index !== 0}>
            <ProductArt kind={art} />
          </div>
          <div className="flex h-full w-full shrink-0 items-center bg-white" aria-hidden={index !== 1}>
            <img src={image} alt={imageAlt} draggable={false} className="h-full w-full object-contain" />
          </div>
        </div>
      </Link>
      <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center">
        <div className="flex items-center rounded-full bg-white/85 px-1 py-0.5">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              type="button"
              aria-label={dot === 0 ? `Ver ilustración de ${label}` : `Ver foto de ${label}`}
              aria-current={index === dot ? "true" : undefined}
              className="grid h-6 w-6 place-items-center"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIndex(dot);
              }}
            >
              <span className={`block h-1.5 w-1.5 rounded-full ${index === dot ? "bg-brand" : "bg-brand/35"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
