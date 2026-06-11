import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DXQr_p7c.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as hero_living_default } from "./hero-living-B6M1vx8a.mjs";
import { a as project_kitchen_default, i as project_extension_default, n as project_bathroom_default, r as project_commercial_default, t as project_badminton_default } from "./project-badminton-CewJs3va.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-_vIdVNSp.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		img: project_badminton_default,
		title: "Northside Badminton Centre",
		tag: "Featured · Commercial Fitout",
		loc: "Brisbane, QLD",
		featured: true
	},
	{
		img: hero_living_default,
		title: "Ascot Whole-Home Renovation",
		tag: "Full Renovation",
		loc: "Brisbane, QLD"
	},
	{
		img: project_kitchen_default,
		title: "Paddington Kitchen",
		tag: "Kitchen",
		loc: "Brisbane, QLD"
	},
	{
		img: project_bathroom_default,
		title: "New Farm Ensuite",
		tag: "Bathroom",
		loc: "Brisbane, QLD"
	},
	{
		img: project_extension_default,
		title: "Wilston Renovation",
		tag: "Full Renovation",
		loc: "Brisbane, QLD"
	},
	{
		img: project_commercial_default,
		title: "Fortitude Valley Café Fitout",
		tag: "Commercial",
		loc: "Brisbane, QLD"
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Portfolio",
			title: "Recent projects across Brisbane.",
			description: "A selection of our recently completed residential and commercial work. Every project delivered with the same uncompromising standard."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prime grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							width: 1600,
							height: 1200,
							className: "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex items-start justify-between gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-teal",
							children: [
								p.tag,
								" · ",
								p.loc
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl font-semibold",
							children: p.title
						})] })
					})]
				}, p.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-semibold text-balance",
						children: "Your project could be next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground",
						children: "Tell us what you're planning. We'll respond within 24 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-8 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep",
						children: ["Start your project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { ProjectsPage as component };
