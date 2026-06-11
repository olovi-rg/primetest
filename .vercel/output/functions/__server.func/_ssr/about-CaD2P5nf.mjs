import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DXQr_p7c.mjs";
import { t as about_craft_default } from "./about-craft-DTnXmrEp.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Award, d as Handshake, n as Sparkles, r as ShieldCheck, v as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CaD2P5nf.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		icon: Award,
		title: "Craftsmanship",
		desc: "Built by trades who care about the finish - not just the deadline."
	},
	{
		icon: ShieldCheck,
		title: "Integrity",
		desc: "Fixed-price contracts, transparent communication and zero surprises."
	},
	{
		icon: Handshake,
		title: "Partnership",
		desc: "We work alongside you from concept through to handover and beyond."
	},
	{
		icon: Sparkles,
		title: "Excellence",
		desc: "Every detail considered. Every finish refined. Every project delivered."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: "A premium builder, built around the client.",
			description: "Prime Finish Renovations was founded on a simple idea: build the kind of company every homeowner wishes existed. Licensed, accountable, and obsessed with the finish."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_craft_default,
					alt: "Prime Finish team on site",
					loading: "lazy",
					width: 1600,
					height: 1100,
					className: "rounded-md w-full object-cover shadow-elegant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-semibold text-balance",
					children: "Our story"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-5 text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prime Finish Renovations was founded by Brisbane renovators who'd worked on some of South-East Queensland's most demanding residential and commercial projects - and saw a gap in the market for a renovator who treated every project with the same care, regardless of size." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today, we're a tight team of licensed renovators, project managers and trusted trades delivering kitchens, bathrooms, full-home renovations and commercial fitouts across Brisbane. Our standard is simple: deliver the finish we'd want in our own homes." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every project gets a dedicated project manager, weekly photo updates and a fixed-price contract. Because premium isn't a price tag - it's a process." })
					]
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-teal",
						children: "Our values"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl font-semibold text-balance",
						children: "The standards we build by."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card p-8 rounded-md border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-8 w-8 text-teal" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: v.desc
							})
						]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-charcoal text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl md:text-5xl font-semibold text-balance",
					children: "Let's build something exceptional."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-10 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep",
					children: ["Start your project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
