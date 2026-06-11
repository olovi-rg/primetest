import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-DXQr_p7c.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-24 bg-gradient-hero text-white overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 [background:radial-gradient(60%_50%_at_70%_30%,oklch(0.66_0.12_210/0.45),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prime relative",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-teal",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-5xl md:text-6xl font-semibold text-balance max-w-4xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-white/75 leading-relaxed",
					children: description
				}),
				children
			]
		})]
	});
}
//#endregion
export { PageHero as t };
