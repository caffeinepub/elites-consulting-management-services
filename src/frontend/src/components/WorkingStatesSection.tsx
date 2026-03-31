import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const states = [
  { name: "Haryana", region: "North India", emoji: "🌾" },
  { name: "Jharkhand", region: "East India", emoji: "🏔️" },
  { name: "Assam", region: "Northeast India", emoji: "🌿" },
  { name: "Delhi", region: "Capital Region", emoji: "🏛️" },
  { name: "Uttar Pradesh", region: "North India", emoji: "🕌" },
  { name: "Punjab", region: "North India", emoji: "🌅" },
];

export default function WorkingStatesSection() {
  return (
    <section
      id="states"
      className="py-24 scroll-mt-20"
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
    >
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
            Our Footprint
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-white">
            WHERE WE WORK
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto mt-4" />
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            With deep ground presence across 6 states, we bring local expertise
            and national strategy to every campaign.
          </p>
        </motion.div>

        {/* States grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {states.map((state, index) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-5 rounded-xl border border-saffron/20 bg-white/5 hover:bg-saffron/10 hover:border-saffron/50 transition-all duration-300"
              data-ocid={`states.item.${index + 1}`}
            >
              <div className="text-3xl">{state.emoji}</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-saffron" />
                  <span className="text-white font-bold text-sm">
                    {state.name}
                  </span>
                </div>
                <div className="text-white/50 text-xs mt-0.5">
                  {state.region}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/60 text-sm mt-12"
        >
          Operational in{" "}
          <span className="text-saffron font-bold text-base">6 states</span>{" "}
          with over{" "}
          <span className="text-saffron font-bold text-base">500+</span>{" "}
          successful candidate engagements
        </motion.p>
      </div>
    </section>
  );
}
