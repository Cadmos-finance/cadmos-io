// app/SchemaOrg.tsx  (server component by default)
export default function SchemaOrg() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cadmos",
    legalName: "Cadmos Ltd.",
    url: "https://cadmos.io/",
    logo: "https://cadmos.io/CADMOS-logo-vertical.png",
    sameAs: [
      "https://cadmos.finance",
      "https://cadmospay.com",
      "https://twitter.com/CadmosIO",
      "https://www.linkedin.com/company/cadmosam",
      "https://github.com/Cadmos-finance",
      "https://www.youtube.com/@Cadmos_IO",
      "https://www.instagram.com/cadmos.io"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@cadmos.finance",
        url: "https://cadmos.finance/contact-us"
      }
    ],
    foundingDate: "2021-06-01",
    founders: [{ "@type": "Person", name: "Nassib Boueri" }],
    brand: [
      {
        "@type": "Brand",
        "@id": "https://cadmos.finance/#cadmosFinance",
        name: "Cadmos Finance",
        url: "https://cadmos.finance"
      },
      {
        "@type": "Brand",
        "@id": "https://cadmospay.com/#cadmosPay",
        name: "Cadmos Pay",
        url: "https://cadmospay.com"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}
