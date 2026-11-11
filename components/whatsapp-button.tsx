import { cn } from "cn";
import { company } from "@/lib/site";

export function WhatsappButton({
  className,
  children = "Contactar por WhatsApp",
  message,
}: {
  className?: string;
  children?: React.ReactNode;
  message?: string;
}) {
  const href = message
    ? `${company.whatsapp}?text=${encodeURIComponent(message)}`
    : company.whatsapp;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex h-12 items-center gap-2.5 rounded-full bg-[#1f8f3e] px-6 font-semibold text-white hover:bg-[#187433]",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true" fill="currentColor">
        <path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.5 20.5l4.3-1.1A8.7 8.7 0 1 0 12.1 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.3-1.3-.5-2.2-1-3.6-3.2-3.7-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.5-.1.1-.2.3-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
      </svg>
      {children}
    </a>
  );
}
