import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DXQr_p7c.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Bath, h as Building2, m as ChefHat, p as CircleCheck, u as House, v as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B9WtZls1.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		icon: House,
		title: "Full Home Renovations",
		desc: "Whole-home transformations managed end-to-end. Structural changes, full fitout, finishes, landscaping and handover.",
		bullets: [
			"Design coordination",
			"Structural & layout changes",
			"Premium finishes throughout"
		]
	},
	{
		icon: ChefHat,
		title: "Kitchen Renovations",
		desc: "The heart of the home, reimagined. Bespoke joinery, stone benchtops, integrated appliances and premium tapware.",
		bullets: [
			"Custom cabinetry",
			"Stone & timber benchtops",
			"Integrated appliance specification"
		]
	},
	{
		icon: Bath,
		title: "Bathroom Renovations",
		desc: "Spa-quality ensuites and family bathrooms built for the long haul. Waterproofing, tiling and plumbing done right.",
		bullets: [
			"Certified waterproofing",
			"Large-format tiling",
			"Underfloor heating options"
		]
	},
	{
		icon: Building2,
		title: "Commercial Fitouts",
		desc: "Hospitality, retail, sport and office spaces delivered on time and on brand - minimal disruption to your operation.",
		bullets: [
			"After-hours scheduling",
			"Brand-aligned finishes",
			"Fast-track delivery"
		]
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Services",
			title: "Every renovation and build, delivered to a premium standard.",
			description: "From single-room refreshes through to multi-storey extensions and full commercial fitouts - one team, one standard, one point of accountability."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-gradient-to-b from-background via-secondary/40 to-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prime grid md:grid-cols-2 gap-8",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-xl bg-card border border-border/60 p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-teal/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 h-48 w-48 rounded-full bg-teal/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-14 w-14 items-center justify-center rounded-lg bg-teal/10 ring-1 ring-teal/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 text-teal" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 text-2xl font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground leading-relaxed",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2.5",
								children: s.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-teal mt-0.5 shrink-0" }),
										" ",
										b
									]
								}, b))
							})
						]
					})]
				}, s.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-charcoal text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-semibold text-balance",
						children: "Not sure where to start?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/75",
						children: "Book a free on-site consultation. We'll walk through your space, your vision and your budget - and give you honest, expert advice."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-10 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep",
						children: ["Book a Free Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
