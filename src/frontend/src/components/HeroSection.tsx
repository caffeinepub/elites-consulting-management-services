import { Button } from "@/components/ui/button";
import { Award, ChevronDown, MapPin, Users } from "lucide-react";
import { motion } from "motion/react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const stats = [
  { icon: Award, value: "6+", label: "Years Experience" },
  { icon: MapPin, value: "10+", label: "States Covered" },
  { icon: Users, value: "500+", label: "Leaders Supported" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-political-banner.dim_1920x900.jpg')",
        }}
      />
      {/* Dark maroon overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.16 0.09 22 / 0.97) 0%, oklch(0.16 0.09 22 / 0.88) 55%, oklch(0.26 0.10 22 / 0.60) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-saffron/40 bg-saffron/10"
          >
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">
              Strategizing Victory, Empowering Leadership
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tight text-white mb-6"
          >
            ELEVATING <span className="text-saffron">LEADERSHIP.</span>
            <br />
            WINNING <br className="hidden sm:block" />
            ELECTIONS.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            India's Premier Political Campaign Management Firm for Strategic
            Success. Combining data, technology, and ground-level expertise.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="uppercase tracking-wide font-bold px-8"
              data-ocid="hero.services.button"
            >
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-white/60 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white uppercase tracking-wide font-bold px-8"
              data-ocid="hero.team.button"
            >
              Meet the Team
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-saffron/20 border border-saffron/30">
                  <Icon size={20} className="text-saffron" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none">
                    {value}
                  </div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mt-0.5">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 right-10 text-white/40 hover:text-saffron transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
