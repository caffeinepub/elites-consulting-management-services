import {
  Download,
  FileText,
  Link2,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

const SERVICES = [
  "Campaign Strategy & Planning",
  "Voter Research & Analysis",
  "Digital Campaign Management",
  "Social Media Campaigns",
  "Ground-Level Operations",
  "Political Branding & Communication",
  "Media Management",
  "Volunteer Management",
];

const STATES = [
  "Haryana",
  "Jharkhand",
  "Assam",
  "Delhi",
  "Uttar Pradesh",
  "Punjab",
];

export default function ProposalSection() {
  const profileUrl = typeof window !== "undefined" ? window.location.href : "";
  const proposalUrl = `${profileUrl}#proposal`;
  const whatsappText = encodeURIComponent(
    `Hi! Please find the company proposal for Elites Consulting & Management Services:\n\n${proposalUrl}\n\nContact: +91 78274 43618`,
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappText}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(proposalUrl);
      toast.success("Proposal link copied!");
    } catch {
      toast.error("Failed to copy link.");
    }
  };

  return (
    <section
      id="proposal"
      className="py-24 scroll-mt-20 print:py-8"
      style={{ background: "oklch(var(--cream))" }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 print:hidden"
        >
          <span className="text-saffron font-semibold uppercase tracking-widest text-sm">
            Official Document
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-charcoal">
            Company Proposal
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shadow transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(var(--navy))" }}
            data-ocid="proposal.download_button"
          >
            <Download size={16} />
            Download as PDF
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-green-600 hover:bg-green-500 shadow transition-colors"
            data-ocid="proposal.whatsapp.button"
          >
            <SiWhatsapp size={16} />
            Share via WhatsApp
          </a>
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm shadow border transition-opacity hover:opacity-90"
            style={{
              borderColor: "oklch(var(--saffron)/0.5)",
              color: "oklch(var(--saffron))",
            }}
            data-ocid="proposal.copy.button"
          >
            <Link2 size={16} />
            Copy Proposal Link
          </button>
        </div>

        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border print:rounded-none print:shadow-none print:border-0"
          data-ocid="proposal.card"
        >
          <div
            className="px-10 py-8 print:py-6"
            style={{ backgroundColor: "oklch(var(--navy-dark))" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(var(--saffron))" }}
              >
                <FileText size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">
                  Company Proposal
                </p>
                <h1 className="text-white font-black text-xl md:text-2xl leading-tight">
                  Elites Consulting &amp; Management Services
                </h1>
              </div>
            </div>
            <p className="text-yellow-400 italic font-medium text-sm mt-2 pl-16">
              “Strategizing Victory, Empowering Leadership”
            </p>
          </div>

          <div className="px-10 py-8 print:px-6">
            <div className="mb-8">
              <h2
                className="text-xs font-black uppercase tracking-widest mb-3 pb-2 border-b"
                style={{
                  color: "oklch(var(--navy))",
                  borderColor: "oklch(var(--saffron))",
                }}
              >
                About Us
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Elites Consulting &amp; Management Services is India's premier
                political campaign management and strategic communication firm,
                established in 2015. With over 6 years of proven experience, we
                specialize in delivering data-driven election strategies,
                digital outreach, and ground-level operations for political
                leaders, candidates, and organizations across multiple Indian
                states.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm mt-2">
                Our multidisciplinary team combines political science, digital
                marketing, field operations, and public relations expertise to
                craft winning campaign strategies tailored to every
                constituency's unique demographic and socio-political landscape.
              </p>
            </div>

            <div className="mb-8">
              <h2
                className="text-xs font-black uppercase tracking-widest mb-3 pb-2 border-b"
                style={{
                  color: "oklch(var(--navy))",
                  borderColor: "oklch(var(--saffron))",
                }}
              >
                Our Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES.map((service, i) => (
                  <div
                    key={service}
                    className="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: "oklch(var(--saffron))" }}
                    >
                      {i + 1}
                    </span>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2
                className="text-xs font-black uppercase tracking-widest mb-3 pb-2 border-b"
                style={{
                  color: "oklch(var(--navy))",
                  borderColor: "oklch(var(--saffron))",
                }}
              >
                Working States
              </h2>
              <div className="flex flex-wrap gap-2">
                {STATES.map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "oklch(var(--navy))" }}
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2
                className="text-xs font-black uppercase tracking-widest mb-3 pb-2 border-b"
                style={{
                  color: "oklch(var(--navy))",
                  borderColor: "oklch(var(--saffron))",
                }}
              >
                Leadership
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ borderColor: "oklch(var(--saffron)/0.3)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: "oklch(var(--navy))" }}
                  >
                    <User size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-sm">
                      Rajneesh Tiwari
                    </div>
                    <div
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: "oklch(var(--saffron))" }}
                    >
                      Managing Director
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Elites Consulting &amp; Management Services
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ borderColor: "oklch(var(--saffron)/0.3)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: "oklch(var(--navy))" }}
                  >
                    <User size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-sm">
                      Sandeep Vishwash
                    </div>
                    <div
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: "oklch(var(--saffron))" }}
                    >
                      Co-Founder
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Mo. +91 80764 13435
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 print:rounded-none"
              style={{ backgroundColor: "oklch(var(--navy-dark))" }}
            >
              <h2 className="text-xs font-black uppercase tracking-widest mb-4 text-white/60">
                Contact Us
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">
                      Phone
                    </div>
                    <div className="text-white text-sm font-semibold">
                      +91 78274 43618
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">
                      Email
                    </div>
                    <div className="text-white text-sm font-semibold break-all">
                      infoelitesconsulting890@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">
                      Address
                    </div>
                    <div className="text-white text-sm font-semibold">
                      Rohini Sector 8, North West Delhi – 110084
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-400 text-xs mt-6">
              Established 2015 · Elites Consulting &amp; Management Services ·
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
