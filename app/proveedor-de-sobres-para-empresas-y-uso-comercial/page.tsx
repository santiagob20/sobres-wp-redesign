import { LegacyRedirect, legacyRedirectMetadata } from "@/components/legacy-redirect";

const to = "/productos/sobres-para-diezmo/";

export const metadata = legacyRedirectMetadata(to);

export default function Page() {
  return <LegacyRedirect to={to} />;
}
