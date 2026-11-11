import type { ArtKind } from "@/lib/site";

function Sheet({
  children,
  tint = "#f1f1f1",
}: {
  children: React.ReactNode;
  tint?: string;
}) {
  return (
    <svg viewBox="0 0 368 285" className="h-full w-full" role="img" aria-hidden="true">
      <rect width="368" height="285" fill={tint} />
      {children}
    </svg>
  );
}

function Envelope({
  x,
  y,
  w,
  h,
  paper,
  flap,
  rotate = 0,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  paper: string;
  flap: string;
  rotate?: number;
}) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g transform={`rotate(${rotate} ${cx} ${cy})`}>
      <rect x={x} y={y + 18} width={w} height={h - 18} rx="3" fill={paper} stroke="#0163a7" strokeWidth="3" />
      <path
        d={`M${x} ${y + 18} L${x + w / 2} ${y + h * 0.48} L${x + w} ${y + 18} L${x + w - 8} ${y} L${x + 8} ${y} Z`}
        fill={flap}
        stroke="#0163a7"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </g>
  );
}

export function ProductArt({ kind }: { kind: ArtKind }) {
  if (kind === "colores") {
    return (
      <Sheet>
        <Envelope x={78} y={78} w={168} h={118} paper="#f4d35e" flap="#e6c44e" rotate={-8} />
        <Envelope x={118} y={92} w={168} h={118} paper="#f25f5c" flap="#e14b48" rotate={4} />
        <Envelope x={98} y={70} w={168} h={118} paper="#ffffff" flap="#e7eef5" />
      </Sheet>
    );
  }

  if (kind === "eventos") {
    return (
      <Sheet>
        <Envelope x={84} y={62} w={200} h={140} paper="#fffdf8" flap="#f3efe6" />
        <circle cx="184" cy="156" r="16" fill="none" stroke="#0163a7" strokeWidth="3" />
        <circle cx="184" cy="156" r="6" fill="#0163a7" />
      </Sheet>
    );
  }

  if (kind === "correspondencia" || kind === "ventanilla") {
    return (
      <Sheet>
        <Envelope x={74} y={68} w={220} h={140} paper="#ffffff" flap="#eef3f8" />
        <rect x="118" y="156" width="78" height="36" rx="2" fill="#d9e3e9" stroke="#0163a7" strokeWidth="2.5" />
      </Sheet>
    );
  }

  if (kind === "ecommerce") {
    return (
      <Sheet>
        <Envelope x={74} y={64} w={220} h={146} paper="#c4a574" flap="#b89564" />
        <rect x="108" y="150" width="92" height="28" rx="2" fill="#fffdf8" stroke="#5c4630" strokeWidth="2" />
        <path d="M118 164h72" stroke="#5c4630" strokeWidth="2" />
      </Sheet>
    );
  }

  if (kind === "medico") {
    return (
      <Sheet tint="#e7eef3">
        <Envelope x={78} y={64} w={212} h={144} paper="#f7fbfe" flap="#d5e6f2" />
        <path d="M176 148h16v28h16v16h-16v16h-16v-16h-16v-16h16z" fill="#0163a7" />
      </Sheet>
    );
  }

  if (kind === "manila") {
    return (
      <Sheet>
        <Envelope x={74} y={66} w={220} h={146} paper="#e6c48a" flap="#d7b274" />
      </Sheet>
    );
  }

  if (kind === "eco") {
    return (
      <Sheet tint="#e7f0e4">
        <Envelope x={78} y={66} w={210} h={142} paper="#f4f7f1" flap="#d7e4cf" />
        <path
          d="M196 168c18-22 18-40 6-48-16 2-28 18-30 36 14 2 20 8 24 12z"
          fill="#3d7a45"
        />
      </Sheet>
    );
  }

  if (kind === "radio") {
    return (
      <Sheet>
        <rect x="118" y="48" width="132" height="168" rx="4" fill="#d5dde3" stroke="#0163a7" strokeWidth="3" />
        <rect x="132" y="64" width="104" height="104" fill="#eef2f5" stroke="#0163a7" strokeWidth="2" />
        <path d="M148 188h72M148 198h48" stroke="#0163a7" strokeWidth="2" />
      </Sheet>
    );
  }

  if (kind === "cuadrado") {
    return (
      <Sheet>
        <Envelope x={96} y={48} w={176} h={176} paper="#fffdf8" flap="#f3efe6" />
      </Sheet>
    );
  }

  if (kind === "burbuja") {
    return (
      <Sheet>
        <Envelope x={74} y={66} w={220} h={146} paper="#f7f4ee" flap="#ebe4d8" />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            cx={128 + (i % 5) * 26}
            cy={168}
            r="8"
            fill="none"
            stroke="#0163a7"
            strokeWidth="2"
          />
        ))}
      </Sheet>
    );
  }

  return (
    <Sheet>
      <Envelope x={74} y={64} w={220} h={146} paper="#fffaf0" flap="#f3e6c8" />
      <path d="M118 168h132" stroke="#0163a7" strokeWidth="2.4" />
      <path d="M118 182h84" stroke="#0163a7" strokeWidth="2.4" />
    </Sheet>
  );
}
