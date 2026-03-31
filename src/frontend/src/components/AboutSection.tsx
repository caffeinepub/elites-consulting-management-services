import { Eye, Target } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-saffron font-semibold uppercase tracking-widest text-sm">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-charcoal">
            WHO WE ARE
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto mt-4" />
        </motion.div>

        {/* Company overview + Vision/Mission */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Professional Political Campaign Management
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a professional political campaign management and strategic
              communication company specializing in election campaigns, digital
              outreach, and ground-level political operations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team works closely with political leaders, candidates, and
              organizations to design impactful campaigns that connect with
              voters and build strong public support. With years of experience
              in multiple states across India, we provide modern political
              consulting solutions combining data, technology, and grassroots
              engagement.
            </p>
            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-black text-saffron">2015</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                  Established
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-saffron">6+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-saffron">6</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                  Active States
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Vision */}
            <div className="p-6 rounded-xl border border-saffron/20 bg-saffron/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-saffron/15">
                  <Eye size={20} className="text-saffron" />
                </div>
                <h4 className="font-bold text-charcoal uppercase tracking-wide text-sm">
                  Our Vision
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                To be India's most trusted political consulting firm, empowering
                leaders at every level of governance with integrity and
                strategic excellence.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-xl border border-navy/20 bg-navy/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-navy/10">
                  <Target size={20} className="text-navy" />
                </div>
                <h4 className="font-bold text-charcoal uppercase tracking-wide text-sm">
                  Our Mission
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                To combine data-driven insights, digital reach, and ground-level
                operations to deliver decisive electoral victories for our
                clients across India.
              </p>
            </div>

            {/* Company details */}
            <div className="p-6 rounded-xl bg-cream/60 border border-border">
              <h4 className="font-bold text-charcoal uppercase tracking-wide text-sm mb-3">
                Company Details
              </h4>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400">Established</span>
                  <span className="font-semibold text-charcoal">2015</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="font-semibold text-charcoal">6+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Headquarters</span>
                  <span className="font-semibold text-charcoal">
                    Delhi, India
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Working States</span>
                  <span className="font-semibold text-charcoal">6 States</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MD section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: "oklch(var(--navy))" }}
        >
          <div className="grid md:grid-cols-5 items-stretch">
            {/* Photo */}
            <div className="md:col-span-2 relative min-h-72 md:min-h-full">
              <img
                src="/assets/generated/md-rajneesh-tiwari.dim_400x500.png"
                alt="Rajneesh Tiwari – Managing Director"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 50%, oklch(var(--navy)))",
                }}
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-3 p-8 md:p-12 text-white">
              <span className="text-saffron text-xs font-bold uppercase tracking-widest">
                Meet Our Managing Director
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase mt-2 mb-4">
                Rajneesh Tiwari
              </h3>
              <div className="w-12 h-1 bg-saffron mb-6" />
              <p className="text-white/80 leading-relaxed mb-4">
                With over 6 years of experience in political campaign management
                across multiple states in India, Rajneesh Tiwari has built a
                reputation for delivering results that matter. His deep
                understanding of voter psychology, data-driven approaches, and
                on-ground leadership have helped hundreds of candidates and
                political organizations achieve their goals.
              </p>
              <p className="text-white/70 leading-relaxed">
                A visionary strategist committed to transforming the landscape
                of political consulting in India — combining modern digital
                tools with traditional grassroots engagement to deliver decisive
                electoral victories.
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-white font-bold text-lg">
                  Rajneesh Tiwari
                </div>
                <div className="text-saffron text-sm mt-0.5">
                  Managing Director, Elites Consulting &amp; Management Services
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
