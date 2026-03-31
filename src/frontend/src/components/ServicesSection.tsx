import {
  BarChart3,
  ChevronRight,
  Globe,
  Megaphone,
  Search,
  Share2,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: BarChart3,
    title: "Election Campaign Management",
    description:
      "Complete planning and execution of political campaigns including strategy, voter outreach, and campaign coordination.",
    accent: "saffron" as const,
  },
  {
    icon: Search,
    title: "Ground Survey & Voter Research",
    description:
      "Conducting detailed voter surveys, constituency analysis, and booth-level data collection to understand public sentiment.",
    accent: "navy" as const,
  },
  {
    icon: Share2,
    title: "Social Media Campaigns",
    description:
      "Managing digital campaigns on Facebook, Instagram, YouTube, and WhatsApp to build a strong online presence.",
    accent: "saffron" as const,
  },
  {
    icon: Users,
    title: "Ground Campaign Operations",
    description:
      "Organizing rallies, padyatras, booth management, volunteer coordination, and local outreach programs.",
    accent: "navy" as const,
  },
  {
    icon: Megaphone,
    title: "Political Branding & Communication",
    description:
      "Creating slogans, messaging strategies, political graphics, and branding that resonates with voters.",
    accent: "saffron" as const,
  },
  {
    icon: Globe,
    title: "Website & Digital Presence",
    description:
      "Developing professional political websites, candidate pages, and campaign landing pages.",
    accent: "navy" as const,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-saffron font-semibold uppercase tracking-widest text-sm">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-charcoal">
            OUR SERVICES
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto mt-4" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive political campaign management solutions combining
            technology, data, and ground-level expertise across India.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isNavy = service.accent === "navy";
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 group"
                data-ocid={`services.item.${index + 1}`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 ${
                    isNavy
                      ? "bg-navy/10 text-navy"
                      : "bg-saffron/10 text-saffron"
                  }`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                    isNavy
                      ? "text-navy hover:text-navy-dark"
                      : "text-saffron hover:text-saffron-dark"
                  }`}
                >
                  Learn More
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
