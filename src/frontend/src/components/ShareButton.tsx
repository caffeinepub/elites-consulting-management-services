import { Link2, Share2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [refCode] = useState(() => `ECM-${String(Date.now()).slice(-4)}`);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const profileUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsappText = encodeURIComponent(
    `Hi! I'd like to enquire about Elites Consulting & Management Services. Ref: ${refCode}\n\nProfile: ${profileUrl}\n\nContact: +91 78274 43618`,
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappText}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      toast.success("Link copied!");
      setOpen(false);
    } catch {
      toast.error("Failed to copy link.");
    }
  };

  return (
    <div
      className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3"
      ref={popupRef}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl shadow-2xl p-5 w-64 border border-yellow-700/30"
            style={{ backgroundColor: "oklch(var(--navy-dark))" }}
            data-ocid="share.popover"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-bold text-sm tracking-wide">
                Share Profile
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                data-ocid="share.close_button"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-white/50 text-xs mb-4">
              Auto Ref:{" "}
              <span className="text-yellow-400 font-mono font-semibold">
                {refCode}
              </span>
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
                data-ocid="share.whatsapp.button"
              >
                <SiWhatsapp size={18} />
                Share via WhatsApp
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors border"
                style={{
                  borderColor: "oklch(var(--saffron)/0.4)",
                  color: "oklch(var(--saffron))",
                }}
                data-ocid="share.copy.button"
              >
                <Link2 size={18} />
                Copy Profile Link
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-colors"
        style={{ backgroundColor: "oklch(var(--navy))" }}
        aria-label="Share profile"
        data-ocid="share.open_modal_button"
      >
        <Share2 size={22} />
      </motion.button>
    </div>
  );
}
