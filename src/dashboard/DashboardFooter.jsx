const DashboardFooter = () => {
  // Define legal texts and links as arrays
  const legalTexts = [
    "Exness (SC) LTD is a Securities Dealer registered in Seychelles with registration number 8423606-1 and authorised by the Financial Services Authority (FSA) with licence number SD025. The registered office of Exness (SC) LTD is at 9A CT House, 2nd floor, Providence, Mahe, Seychelles.",
    "The information on this website may only be copied with the express written permission of Exness. General Risk Warning: CFDs are leveraged products. Trading in CFDs carries a high level of risk thus may not be appropriate for all investors. The investment value can both increase and decrease and the investors may lose all their invested capital. Under no circumstances shall the Company have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any transactions related to CFDs.",
    "Exness complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model.",
  ];

  const legalLinks = [
    { label: "Privacy Agreement", href: "" },
    { label: "Risk Disclosure", href: "" },
    { label: "Preventing Money Laundering", href: "" },
    { label: "Security Instructions", href: "" },
    { label: "Legal Documents", href: "" },
    { label: "Complaints Handling Policy", href: "" },
  ];

  return (
    <footer className="my-16">
      <div className="grid gap-8 my-16 lg:grid-cols-[7fr_1fr_3fr]">
        {/* Left Column: Legal Texts */}
        <div>
          {legalTexts.map((text, index) => (
            <p key={index} className="text-gray-500 text-xs mb-2 leading-4">
              {text}
            </p>
          ))}
        </div>

        {/* Middle Column: Empty for spacing */}
        <div />

        {/* Right Column: Legal Links */}
        <div className="flex flex-col items-start">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-blue-500 text-xs mb-2 underline cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="text-gray-500 text-xs tracking-wide mt-4 leading-4">
            © 2008-2025 Exness
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
