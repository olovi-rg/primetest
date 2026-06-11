import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DXQr_p7c.mjs";
import { a as Phone, c as Mail, f as Clock, s as MapPin } from "../_libs/lucide-react.mjs";
import { t as QuoteForm } from "./QuoteForm-Ez7BluJE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BnTl_5RQ.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Let's talk about your project.",
		description: "Tell us a little about what you're planning. One of our project managers will be in touch within 24 hours."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prime grid lg:grid-cols-5 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
						icon: Phone,
						label: "Phone",
						value: "0450 010 250",
						href: "tel:+61450010250"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
						icon: Mail,
						label: "Email",
						value: "info@primefinishrenovations.com",
						href: "mailto:info@primefinishrenovations.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
						icon: MapPin,
						label: "Service area",
						value: "Brisbane & surrounding suburbs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
						icon: Clock,
						label: "Hours",
						value: "Mon–Sat · 7am – 6pm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-charcoal text-white p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "What happens next?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-5 space-y-3 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-teal font-semibold",
									children: "1."
								}), " We review your enquiry within 24 hours."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-teal font-semibold",
									children: "2."
								}), " We book a free on-site consultation."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-teal font-semibold",
									children: "3."
								}), " We deliver a detailed fixed-price proposal."] })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-3 bg-card border border-border rounded-md p-8 md:p-10 shadow-elegant",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Request your free quote"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: ["Required fields marked with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-teal",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
					})
				]
			})]
		})
	})] });
}
function ContactItem({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-12 w-12 rounded-sm bg-teal/10 text-teal grid place-items-center shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-base font-medium text-foreground",
			children: value
		})] })]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "block hover:opacity-80 transition-opacity",
		children: content
	}) : content;
}
//#endregion
export { ContactPage as component };
