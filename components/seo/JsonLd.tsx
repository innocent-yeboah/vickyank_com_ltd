import { site } from "@/lib/site";

/**
 * LocalBusiness JSON-LD for search engines.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: [site.phoneInternational, site.phoneAltInternational],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    areaServed: "GH",
    slogan: site.tagline,
    sameAs: [site.whatsappUrl],
    knowsAbout: [
      "Mining",
      "Gold Trading",
      "Heavy Equipment",
      "Excavator Spare Parts",
      "Luxury Car Rental",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
