import { company } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-[calc(1rem+var(--cookie-banner-offset,0px))] z-50 grid size-14 place-items-center rounded-full bg-[#1f8f3e] text-white shadow-lg hover:bg-[#187433] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f8f3e] md:right-6"
      aria-label={`Escribir por WhatsApp al ${company.phoneDisplay}`}
    >
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="currentColor">
        <path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.5 20.5l4.3-1.1A8.7 8.7 0 1 0 12.1 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.3-1.3-.5-2.2-1-3.6-3.2-3.7-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.5-.1.1-.2.3-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
      </svg>
    </a>
  );
}
