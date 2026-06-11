import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import extensionImg from "@/assets/project-extension.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import badmintonImg from "@/assets/project-badminton.jpg";
import heroImg from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Premium Renovations Portfolio Brisbane | Prime Finish" },
      {
        name: "description",
        content:
          "Browse our portfolio of premium kitchens, bathrooms, full-home renovations and commercial fitouts across Brisbane.",
      },
      { property: "og:title", content: "Prime Finish - Renovation Portfolio" },
      { property: "og:description", content: "Featured renovations, extensions and fitouts." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ProjectsPage,
});

const items = [
  { img: badmintonImg, title: "Northside Badminton Centre", tag: "Featured · Commercial Fitout", loc: "Brisbane, QLD", featured: true },
  { img: heroImg, title: "Ascot Whole-Home Renovation", tag: "Full Renovation", loc: "Brisbane, QLD" },
  { img: kitchenImg, title: "Paddington Kitchen", tag: "Kitchen", loc: "Brisbane, QLD" },
  { img: bathroomImg, title: "New Farm Ensuite", tag: "Bathroom", loc: "Brisbane, QLD" },
  { img: extensionImg, title: "Wilston Renovation", tag: "Full Renovation", loc: "Brisbane, QLD" },
  { img: commercialImg, title: "Fortitude Valley Café Fitout", tag: "Commercial", loc: "Brisbane, QLD" },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Recent projects across Brisbane."
        description="A selection of our recently completed residential and commercial work. Every project delivered with the same uncompromising standard."
      />
      <section className="py-24">
        <div className="container-prime grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.title} className="group">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                    {p.tag} · {p.loc}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="py-24 bg-secondary">
        <div className="container-prime text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance">
            Your project could be next.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Tell us what you're planning. We'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep"
          >
            Start your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
