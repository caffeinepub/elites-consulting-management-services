import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Campaigns", id: "campaigns" },
  { label: "Volunteer", id: "volunteer" },
  { label: "Gallery", id: "gallery" },
  { label: "Proposal", id: "proposal" },
  { label: "Contact", id: "contact" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex-shrink-0 cursor-pointer"
          data-ocid="nav.home.link"
        >
          <LogoMark />
        </button>

        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer tracking-wide"
              data-ocid={`nav.${link.id}.link`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:flex uppercase tracking-wide font-bold text-sm px-5"
            data-ocid="nav.consult.button"
          >
            Get Consulted
          </Button>
          <button
            type="button"
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="nav.menu.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
            style={{ backgroundColor: "oklch(var(--navy-dark))" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileOpen(false);
                  }}
                  className="text-white/80 hover:text-white text-base font-medium text-left py-3 px-2 hover:bg-white/5 rounded transition-colors"
                  data-ocid={`nav.${link.id}.link`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection("contact");
                  setMobileOpen(false);
                }}
                className="uppercase font-bold mt-2"
                data-ocid="nav.consult.button"
              >
                Get Consulted
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
