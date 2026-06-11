import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bath, Building2, ChefHat, CheckCircle2, Home } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Premium Renovations & Fitouts Brisbane | Prime Finish" },
      {
        name: "description",
        content:
          "Premium home renovations, kitchen and bathroom remodels and commercial fitouts across Brisbane.",
      },
      { property: "og:title", content: "Prime Finish - Renovation Services Brisbane" },
      {
        property: "og:description",
        content: "Brisbane's premium renovation specialists - residential and commercial.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    title: "Full Home Renovations",
    desc: "Whole-home transformations managed end-to-end. Structural changes, full fitout, finishes, landscaping and handover.",
    bullets: ["Design coordination", "Structural & layout changes", "Premium finishes throughout"],
  },
  {
    icon: ChefHat,
    title: "Kitchen Renovations",
    desc: "The heart of the home, reimagined. Bespoke joinery, stone benchtops, integrated appliances and premium tapware.",
    bullets: ["Custom cabinetry", "Stone & timber benchtops", "Integrated appliance specification"],
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    desc: "Spa-quality ensuites and family bathrooms built for the long haul. Waterproofing, tiling and plumbing done right.",
    bullets: ["Certified waterproofing", "Large-format tiling", "Underfloor heating options"],
  },
  {
    icon: Building2,
    title: "Commercial Fitouts",
    desc: "Hospitality, retail, sport and office spaces delivered on time and on brand - minimal disruption to your operation.",
    bullets: ["After-hours scheduling", "Brand-aligned finishes", "Fast-track delivery"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every renovation and build, delivered to a premium standard."
        description="From single-room refreshes through to multi-storey extensions and full commercial fitouts - one team, one standard, one point of accountability."
      />
      <section className="py-24 bg-gradient-to-b from-background via-secondary/40 to-background">
        <div className="container-prime grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/60 p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-teal/40"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-teal/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-teal/10 ring-1 ring-teal/20">
                  <s.icon className="h-7 w-7 text-teal" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-charcoal text-white">
        <div className="container-prime text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance">Not sure where to start?</h2>
          <p className="mt-6 text-white/75">
            Book a free on-site consultation. We'll walk through your space, your
            vision and your budget - and give you honest, expert advice.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep"
          >
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
