import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

const updates = [
  {
    title: "Successful Campaign in Haryana Assembly Elections",
    date: "March 2026",
    tag: "Ground Operations",
    description:
      "How we managed ground operations for a key constituency, achieving remarkable results through strategic booth management and voter outreach.",
    gradientFrom: "oklch(0.20 0.058 238)",
    gradientTo: "oklch(0.72 0.158 58 / 0.55)",
  },
  {
    title: "Digital Outreach Campaign Reaches 1 Million Voters",
    date: "February 2026",
    tag: "Digital Strategy",
    description:
      "Social media strategy that amplified a candidate's message statewide, reaching over 1 million voters across multiple digital platforms.",
    gradientFrom: "oklch(0.65 0.148 58 / 0.8)",
    gradientTo: "oklch(0.20 0.058 238)",
  },
  {
    title: "Booth Management Excellence in UP Elections",
    date: "January 2026",
    tag: "Booth Management",
    description:
      "Booth-level strategy that made a significant difference in closely contested seats, demonstrating our micro-level operational capability.",
    gradientFrom: "oklch(0.22 0.058 238)",
    gradientTo: "oklch(0.33 0.080 238)",
  },
];

export default function CampaignUpdatesSection() {
  return (
    <section id="campaigns" className="py-24 bg-white scroll-mt-20">
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
            Latest News
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-charcoal">
            CAMPAIGN UPDATES
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.article
              key={update.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
              data-ocid={`campaigns.item.${index + 1}`}
            >
              {/* Thumbnail */}
              <div
                className="h-48 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${update.gradientFrom}, ${update.gradientTo})`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/15 text-8xl font-black select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-saffron text-white text-xs font-bold uppercase tracking-wide">
                    {update.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar size={13} />
                  <span>{update.date}</span>
                </div>
                <h3 className="font-bold text-charcoal text-lg leading-snug mb-3 group-hover:text-navy transition-colors">
                  {update.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {update.description}
                </p>
                <button
                  type="button"
                  className="flex items-center gap-2 text-saffron font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
