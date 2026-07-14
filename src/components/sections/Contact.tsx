import { useRef, useState } from "react";
import { Instagram, Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { TelegramIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons/BrandIcons";
import { company } from "@/content/site";
import { submitContactForm, type ContactValidationErrors } from "@/lib/contact-server";

const SERVICE_OPTIONS = [
  "Enterprise platform / software",
  "AI product / automation",
  "Branding / creative direction",
  "DHSKNG Studio music project",
  "Meeting request",
] as const;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactValidationErrors>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitContactForm({ data: payload });
      toast.success("Request received. KingdomConnect VIP will respond within 24 hours.");
      formRef.current?.reset();
    } catch (err: unknown) {
      console.error("[Contact] Submission error:", err);
      const message = err instanceof Error ? err.message : String(err);
      if (message.startsWith("VALIDATION_ERROR:")) {
        try {
          const fieldErrors: ContactValidationErrors = JSON.parse(
            message.slice("VALIDATION_ERROR:".length),
          );
          setErrors(fieldErrors);
          toast.error("Review the highlighted fields.");
        } catch {
          toast.error("Validation failed. Please check your inputs.");
        }
      } else {
        toast.error("Delivery failed. Please try again or contact us directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-band">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="section-kicker">
              <MessageCircle className="h-4 w-4" /> Contact Center
            </div>
            <h2 className="section-title">Request a premium consultation.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Reach the corporate intake channel for AI products, software systems, brand identity,
              studio work, and executive meeting requests.
            </p>
            <div className="mt-8 grid gap-3">
              <ContactLink
                href={`mailto:${company.email}`}
                icon={Mail}
                label="Business Email"
                value={company.email}
              />
              <ContactLink
                href={company.whatsapp}
                icon={WhatsAppIcon}
                label="WhatsApp"
                value={company.phoneDisplay}
                external
              />
              <ContactLink
                href={company.telegram}
                icon={TelegramIcon}
                label="Telegram"
                value={company.phoneDisplay}
                external
              />
              <ContactLink
                href={company.instagram}
                icon={Instagram}
                label="Instagram"
                value="@kingdomconnect_vip"
                external
              />
              <ContactLink
                href={company.tiktok}
                icon={TikTokIcon}
                label="TikTok"
                value="@dhskngstudioios"
                external
              />
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-md border border-white/10 bg-card/70 p-5 shadow-2xl backdrop-blur sm:p-8"
          >
            <input type="hidden" name="entity" value="KingdomConnect VIP Holding Company" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input name="name" required maxLength={100} className="form-field" />
              </Field>
              <Field label="Corporate Email" error={errors.email}>
                <input name="email" type="email" required maxLength={255} className="form-field" />
              </Field>
              <Field label="Service" className="sm:col-span-2">
                <select
                  name="service"
                  defaultValue={SERVICE_OPTIONS[0]}
                  className="form-field"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </Field>
              <Field label="Project Brief" error={errors.message} className="sm:col-span-2">
                <textarea
                  name="message"
                  required
                  rows={6}
                  maxLength={1500}
                  className="form-field resize-none"
                />
              </Field>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="inline-flex items-center gap-2 text-xs leading-5 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
                Corporate intake. Data is routed for executive review.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-primary-foreground shadow-gold transition hover:translate-y-[-1px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-md border border-white/10 bg-black/30 p-4 transition hover:border-gold/60"
    >
      <Icon className="h-5 w-5 shrink-0 text-gold" />
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block truncate text-sm font-semibold text-foreground">{value}</span>
      </span>
    </a>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={className}>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <span className="mt-2 block">{children}</span>
      {error && <span className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
