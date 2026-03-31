import { Camera } from "lucide-react";
import { motion } from "motion/react";

const galleryItems = [
  { label: "Rally — Delhi", year: "2025" },
  { label: "Padyatra — Haryana", year: "2025" },
  { label: "Public Meeting — UP", year: "2024" },
  { label: "Booth Management — Punjab", year: "2024" },
  { label: "Voter Outreach — Jharkhand", year: "2024" },
  { label: "Social Activity — Assam", year: "2023" },
];

const gradients = [
  "linear-gradient(135deg, oklch(0.20 0.058 238), oklch(0.72 0.158 58 / 0.6))",
  "linear-gradient(135deg, oklch(0.65 0.148 58 / 0.75), oklch(0.20 0.058 238 / 0.9))",
  "linear-gradient(135deg, oklch(0.22 0.058 238), oklch(0.36 0.085 238))",
  "linear-gradient(135deg, oklch(0.27 0.068 238), oklch(0.72 0.158 58 / 0.45))",
  "linear-gradient(135deg, oklch(0.60 0.148 58 / 0.8), oklch(0.22 0.058 238))",
  "linear-gradient(135deg, oklch(0.18 0.058 238 / 0.9), oklch(0.72 0.158 58 / 0.4))",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-cream scroll-mt-20">
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
            Our Work in Action
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-charcoal">
            CAMPAIGN GALLERY
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto mt-4" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden relative group cursor-pointer border-2 border-saffron/20 hover:border-saffron/60 transition-all duration-300"
              style={{ background: gradients[index] }}
              data-ocid={`gallery.item.${index + 1}`}
            >
              <div className="h-48 md:h-56 flex flex-col items-center justify-center p-6">
                <Camera size={32} className="text-white/30 mb-3" />
                <h4 className="text-white font-bold text-center text-sm leading-snug">
                  {item.label}
                </h4>
                <span className="text-white/50 text-xs mt-1">{item.year}</span>
              </div>
              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
