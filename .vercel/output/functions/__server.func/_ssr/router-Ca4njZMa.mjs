import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Mail, o as Menu, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { t as hero_living_default } from "./hero-living-B6M1vx8a.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ca4njZMa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C0-7AgSx.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var logo_prime_default = "/assets/logo-prime-D-Cino5s.png";
function Logo({ className = "h-10 w-auto", alt = "Prime Finish Renovations" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_prime_default,
		alt,
		className,
		loading: "eager"
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("container-prime flex items-center justify-between transition-all duration-300", scrolled ? "h-20 md:h-20" : "h-24 md:h-28"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "relative flex items-center",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: cn("w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.03] origin-left", scrolled ? "h-14 md:h-16" : "h-24 md:h-32 lg:h-40 -mb-12 mt-2") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-2",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: n.to,
						className: "group relative px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white transition-colors",
						activeProps: { className: "text-teal" },
						activeOptions: { exact: n.to === "/" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100" })]
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+61450010250",
						className: "inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " 0450 010 250"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center rounded-sm bg-teal px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-teal-deep transition-colors shadow-teal",
						children: "Get a Free Quote"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 text-white",
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden bg-charcoal border-t border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime py-6 flex flex-col gap-1",
				children: [
					nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85",
						onClick: () => setOpen(false),
						children: n.label
					}, n.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+61450010250",
						className: "mt-3 inline-flex items-center gap-2 text-white/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " 0450 010 250"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-4 inline-flex items-center justify-center rounded-sm bg-teal px-5 py-3 text-sm font-semibold text-white",
						onClick: () => setOpen(false),
						children: "Get a Free Quote"
					})
				]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative bg-charcoal text-white/80 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal via-[oklch(0.13_0.02_230)] to-[oklch(0.09_0.015_240)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(60%_55%_at_15%_10%,oklch(0.66_0.12_210/0.28),transparent_65%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(50%_50%_at_90%_30%,oklch(0.5_0.14_215/0.25),transparent_70%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.05]",
				style: {
					backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
					backgroundSize: "64px 64px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				"aria-hidden": true,
				viewBox: "0 0 1600 240",
				preserveAspectRatio: "xMidYEnd slice",
				className: "pointer-events-none absolute inset-x-0 bottom-0 w-full h-44 md:h-60 text-teal/25",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "bneFade",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "currentColor",
							stopOpacity: "0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "currentColor",
							stopOpacity: "1"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						stroke: "currentColor",
						strokeWidth: "1.2",
						fill: "none",
						opacity: "0.7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40,240 L40,150 L260,150 L260,240" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40,150 Q150,90 260,150" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40,150 L80,170 L120,180 L160,182 L200,180 L240,170 L260,150" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "80",
								y1: "170",
								x2: "80",
								y2: "240"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "120",
								y1: "180",
								x2: "120",
								y2: "240"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "160",
								y1: "182",
								x2: "160",
								y2: "240"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "200",
								y1: "180",
								x2: "200",
								y2: "240"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "240",
								y1: "170",
								x2: "240",
								y2: "240"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "url(#bneFade)",
						d: "M300,240 L300,180 L340,180 L340,150 L380,150 L380,200 L420,200 L420,120 L460,120 L460,90 L500,90 L500,140 L540,140 L540,170 L580,170 L580,100 L620,100 L620,60 L660,60 L660,110 L700,110 L700,80 L740,80 L740,40 L780,40 L780,90 L820,90 L820,130 L860,130 L860,70 L900,70 L900,110 L940,110 L940,160 L980,160 L980,100 L1020,100 L1020,140 L1060,140 L1060,180 L1100,180 L1100,120 L1140,120 L1140,160 L1180,160 L1180,200 L1220,200 L1220,150 L1260,150 L1260,190 L1300,190 L1300,170 L1340,170 L1340,210 L1380,210 L1380,180 L1420,180 L1420,220 L1600,220 L1600,240 Z"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						stroke: "currentColor",
						strokeWidth: "1",
						fill: "none",
						opacity: "0.6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "1480",
								cy: "180",
								r: "42"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "1480",
								y1: "138",
								x2: "1480",
								y2: "222"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "1438",
								y1: "180",
								x2: "1522",
								y2: "180"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "1450",
								y1: "150",
								x2: "1510",
								y2: "210"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "1510",
								y1: "150",
								x2: "1450",
								y2: "210"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "1480",
								y1: "222",
								x2: "1465",
								y2: "240"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "1480",
								y1: "222",
								x2: "1495",
								y2: "240"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime relative py-20 grid gap-12 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-28 md:h-32 w-auto -ml-2 mix-blend-lighten drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm leading-relaxed text-white/65",
								children: "Prime Finish Renovations delivers premium residential and commercial renovations across Brisbane. Licensed, insured, and obsessed with craftsmanship - from concept to handover."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3 text-xs text-white/55",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-sm border border-white/10 px-3 py-1.5",
										children: "Fully Licensed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-sm border border-white/10 px-3 py-1.5",
										children: "Fully Insured"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-sm border border-white/10 px-3 py-1.5",
										children: "Brisbane-based"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold text-white uppercase tracking-widest",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							{
								to: "/services",
								label: "Services"
							},
							{
								to: "/projects",
								label: "Projects"
							},
							{
								to: "/about",
								label: "About Us"
							},
							{
								to: "/contact",
								label: "Get a Quote"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "hover:text-teal transition-colors",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold text-white uppercase tracking-widest",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+61450010250",
									className: "hover:text-teal",
									children: "0450 010 250"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:info@primefinishrenovations.com",
									className: "hover:text-teal break-all",
									children: "info@primefinishrenovations.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Servicing Brisbane & surrounding suburbs" })]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-t border-white/5 bg-charcoal/80 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-prime py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Prime Finish Renovations. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Transforming Spaces. Elevating Lives." })]
				})
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-sm bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-deep",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-sm bg-teal px-5 py-2.5 text-sm font-semibold text-white",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-sm border border-input bg-background px-5 py-2.5 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Prime Finish Renovations — Premium Renovations Australia" },
			{
				name: "description",
				content: "Premium home renovations, extensions and commercial fitouts across Australia. Licensed, insured, on-time. Request your free quote today."
			},
			{
				name: "author",
				content: "Prime Finish Renovations"
			},
			{
				property: "og:title",
				content: "Prime Finish Renovations — Premium Renovations Australia"
			},
			{
				property: "og:description",
				content: "Transforming Spaces. Elevating Lives. Premium renovations and construction across Australia."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Prime Finish Renovations — Premium Renovations Australia"
			},
			{
				name: "description",
				content: "Premium residential and commercial renovations, construction, painting, flooring, and tiling services across Queensland."
			},
			{
				property: "og:description",
				content: "Premium residential and commercial renovations, construction, painting, flooring, and tiling services across Queensland."
			},
			{
				name: "twitter:description",
				content: "Premium residential and commercial renovations, construction, painting, flooring, and tiling services across Queensland."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1781125568544-Logo-Prime.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/TwFfdXtj9KPaUtTHoCvbqEoYX6D3/social-images/social-1781125568544-Logo-Prime.webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./services-B9WtZls1.mjs");
var Route$4 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services - Premium Renovations & Fitouts Brisbane | Prime Finish" },
		{
			name: "description",
			content: "Premium home renovations, kitchen and bathroom remodels and commercial fitouts across Brisbane."
		},
		{
			property: "og:title",
			content: "Prime Finish - Renovation Services Brisbane"
		},
		{
			property: "og:description",
			content: "Brisbane's premium renovation specialists - residential and commercial."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./projects-_vIdVNSp.mjs");
var Route$3 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects - Premium Renovations Portfolio Brisbane | Prime Finish" },
		{
			name: "description",
			content: "Browse our portfolio of premium kitchens, bathrooms, full-home renovations and commercial fitouts across Brisbane."
		},
		{
			property: "og:title",
			content: "Prime Finish - Renovation Portfolio"
		},
		{
			property: "og:description",
			content: "Featured renovations, extensions and fitouts."
		},
		{
			property: "og:image",
			content: hero_living_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BnTl_5RQ.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact - Free Quote | Prime Finish Renovations" },
		{
			name: "description",
			content: "Get a free, no-obligation quote for your renovation, extension or fitout. We reply within 24 hours."
		},
		{
			property: "og:title",
			content: "Contact Prime Finish Renovations"
		},
		{
			property: "og:description",
			content: "Free quote within 24 hours - no obligation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CaD2P5nf.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About - Brisbane's Premium Renovators | Prime Finish" },
		{
			name: "description",
			content: "Prime Finish Renovations is a licensed Brisbane renovator delivering premium residential and commercial renovations with uncompromising craftsmanship."
		},
		{
			property: "og:title",
			content: "About Prime Finish Renovations"
		},
		{
			property: "og:description",
			content: "Licensed Brisbane renovators. Built on craftsmanship and trust."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-hmCLrXq-.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Prime Finish Renovations - Premium Renovations Brisbane" },
		{
			name: "description",
			content: "Brisbane's premium renovation experts. Kitchens, bathrooms, full-home renovations and commercial fitouts. Fully licensed, insured and on-time. Free quote in 24 hours."
		},
		{
			property: "og:title",
			content: "Prime Finish Renovations - Brisbane's Renovation Experts"
		},
		{
			property: "og:description",
			content: "Transforming Spaces. Elevating Lives. Premium renovations done right."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var ProjectsRoute = Route$3.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	ContactRoute,
	ProjectsRoute,
	ServicesRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
