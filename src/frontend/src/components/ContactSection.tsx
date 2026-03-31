import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 78274 43618",
    sub: "Mon – Sat, 9 AM – 6 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "infoelitesconsulting890@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Rohini Sector 8, North West Delhi – 110084",
    sub: "India",
  },
];

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Campaign Management",
  "Digital Strategy",
  "Voter Research",
  "Event Management",
  "Partnership",
  "Other",
];

export default function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Service not ready. Please try again in a moment.");
      return;
    }
    setIsSubmitting(true);
    try {
      const fullSubject = enquiryType ? `[${enquiryType}] ${subject}` : subject;
      await actor.submitContact(name, phone, email, fullSubject, message);
      toast.success("Enquiry submitted successfully! We'll be in touch soon.");
      setName("");
      setPhone("");
      setEmail("");
      setEnquiryType("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-saffron font-semibold uppercase tracking-widest text-sm">
            Reach Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 text-charcoal">
            Customer Enquiry
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto mt-4" />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Ready to transform your political campaign? Submit your enquiry and
            our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <p className="text-gray-600 leading-relaxed mb-2">
              We work with political leaders, candidates, and organizations
              across India. Let's discuss how we can help you achieve victory.
            </p>
            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-saffron/30 hover:bg-saffron/5 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-navy/10 text-navy flex-shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">
                    {label}
                  </div>
                  <div className="font-semibold text-charcoal text-sm">
                    {value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="bg-cream/60 rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-saffron/10">
                  <MessageSquare size={22} className="text-saffron" />
                </div>
                <h3 className="font-bold text-charcoal text-xl">
                  Submit Enquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="con-name"
                      className="text-charcoal font-medium text-sm mb-1.5 block"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="con-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="con-phone"
                      className="text-charcoal font-medium text-sm mb-1.5 block"
                    >
                      Phone *
                    </Label>
                    <Input
                      id="con-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      data-ocid="contact.phone.input"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="con-email"
                    className="text-charcoal font-medium text-sm mb-1.5 block"
                  >
                    Email *
                  </Label>
                  <Input
                    id="con-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    data-ocid="contact.email.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="con-enquiry-type"
                    className="text-charcoal font-medium text-sm mb-1.5 block"
                  >
                    Enquiry Type *
                  </Label>
                  <Select value={enquiryType} onValueChange={setEnquiryType}>
                    <SelectTrigger
                      id="con-enquiry-type"
                      data-ocid="contact.enquiry_type.select"
                    >
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {ENQUIRY_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="con-subject"
                    className="text-charcoal font-medium text-sm mb-1.5 block"
                  >
                    Subject / Description *
                  </Label>
                  <Input
                    id="con-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief description of your requirement"
                    required
                    data-ocid="contact.subject.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="con-message"
                    className="text-charcoal font-medium text-sm mb-1.5 block"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="con-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your campaign needs..."
                    required
                    rows={4}
                    className="resize-none"
                    data-ocid="contact.message.textarea"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !actor}
                  className="w-full uppercase tracking-widest font-bold py-5"
                  data-ocid="contact.submit_button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
