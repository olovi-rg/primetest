import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Free Quote | Prime Finish Renovations" },
      {
        name: "description",
        content:
          "Get a free, no-obligation quote for your renovation, extension or fitout. We reply within 24 hours.",
      },
      { property: "og:title", content: "Contact Prime Finish Renovations" },
      { property: "og:description", content: "Free quote within 24 hours - no obligation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell us a little about what you're planning. One of our project managers will be in touch within 24 hours."
      />
      <section className="py-24">
        <div className="container-prime grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <ContactItem
              icon={Phone}
              label="Phone"
              value="0450 010 250"
              href="tel:+61450010250"
            />
            <ContactItem
              icon={Mail}
              label="Email"
              value="info@primefinishrenovations.com"
              href="mailto:info@primefinishrenovations.com"
            />
            <ContactItem
              icon={MapPin}
              label="Service area"
              value="Brisbane & surrounding suburbs"
            />
            <ContactItem
              icon={Clock}
              label="Hours"
              value="Mon–Sat · 7am – 6pm"
            />
            <div className="rounded-md bg-charcoal text-white p-8">
              <h3 className="text-lg font-semibold">What happens next?</h3>
              <ol className="mt-5 space-y-3 text-sm text-white/75">
                <li><span className="text-teal font-semibold">1.</span> We review your enquiry within 24 hours.</li>
                <li><span className="text-teal font-semibold">2.</span> We book a free on-site consultation.</li>
                <li><span className="text-teal font-semibold">3.</span> We deliver a detailed fixed-price proposal.</li>
              </ol>
            </div>
          </div>
          <div className="lg:col-span-3 bg-card border border-border rounded-md p-8 md:p-10 shadow-elegant">
            <h2 className="text-2xl font-semibold">Request your free quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Required fields marked with <span className="text-teal">*</span>
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-sm bg-teal/10 text-teal grid place-items-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 text-base font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
  ) : (
    content
  );
}
