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
import { Loader2, UserPlus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const stateOptions = [
  "Haryana",
  "Jharkhand",
  "Assam",
  "Delhi",
  "Uttar Pradesh",
  "Punjab",
  "Other",
];

const interestOptions = [
  "Volunteer Worker",
  "Digital Media",
  "Ground Operations",
  "Data Entry",
  "Event Management",
];

export default function VolunteerSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [interestArea, setInterestArea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!location || !interestArea) {
      toast.error("Please select a state and area of interest.");
      return;
    }
    if (!actor) {
      toast.error("Service not ready. Please try again in a moment.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.submitVolunteer(name, phone, email, location, interestArea);
      toast.success("Registration successful! We'll reach out to you soon.");
      setName("");
      setPhone("");
      setEmail("");
      setLocation("");
      setInterestArea("");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="volunteer"
      className="py-24 scroll-mt-20"
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-saffron font-semibold uppercase tracking-widest text-sm">
              Get Involved
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 mb-4 text-white">
              JOIN OUR
              <br />
              CAMPAIGN
            </h2>
            <div className="w-12 h-1 bg-saffron mb-6" />
            <p className="text-white/70 leading-relaxed mb-8">
              Be part of India's next political success story. Join our team of
              dedicated professionals working at the intersection of democracy
              and technology.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Work on real electoral campaigns across India",
                "Build lasting political networks and connections",
                "Learn modern campaign management strategies",
                "Contribute to India's democratic excellence",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-saffron flex-shrink-0 mt-1.5" />
                  <span className="text-white/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-saffron/10">
                  <UserPlus size={22} className="text-saffron" />
                </div>
                <h3 className="font-bold text-charcoal text-xl">
                  Volunteer Registration
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <Label
                    htmlFor="vol-name"
                    className="text-charcoal font-medium text-sm mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="vol-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    data-ocid="volunteer.name.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="vol-phone"
                    className="text-charcoal font-medium text-sm mb-1.5 block"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="vol-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    data-ocid="volunteer.phone.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="vol-email"
                    className="text-charcoal font-medium text-sm mb-1.5 block"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="vol-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    data-ocid="volunteer.email.input"
                  />
                </div>

                <div>
                  <Label className="text-charcoal font-medium text-sm mb-1.5 block">
                    State *
                  </Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger data-ocid="volunteer.state.select">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {stateOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-charcoal font-medium text-sm mb-1.5 block">
                    Area of Interest *
                  </Label>
                  <Select value={interestArea} onValueChange={setInterestArea}>
                    <SelectTrigger data-ocid="volunteer.interest.select">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {interestOptions.map((o) => (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !actor}
                  className="w-full uppercase tracking-widest font-bold mt-2 py-5"
                  data-ocid="volunteer.submit_button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Register Now"
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
