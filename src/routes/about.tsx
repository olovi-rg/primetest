import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import craftImg from "@/assets/about-craft.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Brisbane's Premium Renovators | Prime Finish" },
      {
        name: "description",
        content:
          "Prime Finish Renovations is a licensed Brisbane renovator delivering premium residential and commercial renovations with uncompromising craftsmanship.",
      },
      { property: "og:title", content: "About Prime Finish Renovations" },
      { property: "og:description", content: "Licensed Brisbane renovators. Built on craftsmanship and trust." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Craftsmanship", desc: "Built by trades who care about the finish - not just the deadline." },
  { icon: ShieldCheck, title: "Integrity", desc: "Fixed-price contracts, transparent communication and zero surprises." },
  { icon: Handshake, title: "Partnership", desc: "We work alongside you from concept through to handover and beyond." },
  { icon: Sparkles, title: "Excellence", desc: "Every detail considered. Every finish refined. Every project delivered." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium builder, built around the client."
        description="Prime Finish Renovations was founded on a simple idea: build the kind of company every homeowner wishes existed. Licensed, accountable, and obsessed with the finish."
      />
      <section className="py-24">
        <div className="container-prime grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={craftImg}
            alt="Prime Finish team on site"
            loading="lazy"
            width={1600}
            height={1100}
            className="rounded-md w-full object-cover shadow-elegant"
          />
          <div>
            <h2 className="text-4xl font-semibold text-balance">Our story</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Prime Finish Renovations was founded by Brisbane renovators
                who'd worked on some of South-East Queensland's most demanding
                residential and commercial projects - and saw a gap in the
                market for a renovator who treated every project with the same
                care, regardless of size.
              </p>
              <p>
                Today, we're a tight team of licensed renovators, project
                managers and trusted trades delivering kitchens, bathrooms,
                full-home renovations and commercial fitouts across Brisbane.
                Our standard is simple: deliver the finish we'd want in our
                own homes.
              </p>
              <p>
                Every project gets a dedicated project manager, weekly photo
                updates and a fixed-price contract. Because premium isn't a
                price tag - it's a process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-secondary">
        <div className="container-prime">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Our values</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-balance">
              The standards we build by.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-8 rounded-md border border-border">
                <v.icon className="h-8 w-8 text-teal" />
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-charcoal text-white">
        <div className="container-prime text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance">Let's build something exceptional.</h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep"
          >
            Start your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
