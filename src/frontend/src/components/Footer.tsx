import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";
import LogoMark from "./LogoMark";

const quickLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Campaigns", id: "campaigns" },
  { label: "Volunteer", id: "volunteer" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const servicesList = [
  "Campaign Management",
  "Voter Research",
  "Social Media Campaigns",
  "Ground Operations",
  "Political Branding",
  "Digital Presence",
];

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "#" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiYoutube, label: "YouTube", href: "#" },
  { icon: SiWhatsapp, label: "WhatsApp", href: "#" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
      className="text-white"
    >
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Top columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <LogoMark className="mb-5" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India's premier political campaign management firm. Strategizing
              victory and empowering leadership since 2015.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-saffron text-sm transition-colors cursor-pointer"
                    data-ocid={`footer.${link.id}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-5">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {servicesList.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="text-white/60 hover:text-saffron text-sm transition-colors cursor-pointer text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Social */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-5">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <div className="text-saffron text-xs uppercase tracking-wider mb-0.5">
                  Address
                </div>
                <div className="text-white/60 leading-relaxed">
                  Rohini Sector 8, North West Delhi – 110084, India
                </div>
              </div>
              <div>
                <div className="text-saffron text-xs uppercase tracking-wider mb-0.5">
                  Phone
                </div>
                <div className="text-white/60">+91 78274 43618</div>
              </div>
              <div>
                <div className="text-saffron text-xs uppercase tracking-wider mb-0.5">
                  Email
                </div>
                <div className="text-white/60">
                  infoelitesconsulting890@gmail.com
                </div>
              </div>

              {/* Social icons */}
              <div>
                <div className="text-saffron text-xs uppercase tracking-wider mb-3">
                  Follow Us
                </div>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-saffron flex items-center justify-center transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {year} Elites Consulting &amp; Management Services. All Rights
            Reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
