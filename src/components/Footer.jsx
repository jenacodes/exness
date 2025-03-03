import LegalTexts from "./footer/LegalTexts";
import Logo from "./footer/Logo";
import Navigation from "./footer/Navigation";
import SocialLinks from "./footer/SocialLinks";

const Footer = () => {
  return (
    <footer className="px-6 mt-16 pb-16 lg:px-[84px] lg:pb-32 md:px-12 md:pt-12">
      <div className="container">
        <Logo />
        <Navigation />
        <SocialLinks />

        <hr className="border-gray-700" />
        <LegalTexts />
        <hr className="border-gray-700" />

        {/* Bottom Links */}
        <div className="flex flex-col items-center justify-between gap-4 mt-8 md:flex-row">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "Risk Disclosure",
              "Preventing Money laundering",
              "Privacy Policy",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-gray-400 transition-colors hover:text-white md:text-sm"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 md:text-sm">© 2025 Jena</p>
        </div>

        {/* PCI Badge */}
        <div className="mt-8 text-center">
          <img
            src="\PCI_DSS.svg"
            alt="PCI DSS Compliance"
            className="inline-block h-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
