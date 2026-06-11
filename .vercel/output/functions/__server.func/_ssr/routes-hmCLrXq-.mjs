import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as about_craft_default } from "./about-craft-DTnXmrEp.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, g as Bath, h as Building2, i as Quote, m as ChefHat, n as Sparkles, p as CircleCheck, r as ShieldCheck, s as MapPin, u as House, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as QuoteForm } from "./QuoteForm-Ez7BluJE.mjs";
import { a as project_kitchen_default, i as project_extension_default, n as project_bathroom_default, r as project_commercial_default, t as project_badminton_default } from "./project-badminton-CewJs3va.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-hmCLrXq-.js
var import_jsx_runtime = require_jsx_runtime();
var hero_portrait_grounded_default = "/assets/hero-portrait-grounded-5p2skLlB.png";
var services = [
	{
		icon: House,
		title: "Full Home Renovations",
		desc: "End-to-end transformations from concept to handover."
	},
	{
		icon: ChefHat,
		title: "Kitchen Renovations",
		desc: "Bespoke joinery, stone benchtops, premium appliances."
	},
	{
		icon: Bath,
		title: "Bathroom Renovations",
		desc: "Spa-quality ensuites built to last decades."
	},
	{
		icon: Building2,
		title: "Commercial Fitouts",
		desc: "Hospitality, retail, sport and office spaces delivered on time."
	}
];
var featuredProject = {
	img: project_badminton_default,
	title: "Northside Badminton Centre",
	tag: "Featured Client · Commercial Fitout",
	location: "Brisbane, QLD",
	blurb: "A full commercial fitout for one of Brisbane's premier badminton facilities - tournament-grade flooring, custom joinery and a clean, high-impact finish."
};
var projects = [
	{
		img: project_kitchen_default,
		title: "Paddington Kitchen",
		tag: "Kitchen Renovation",
		location: "Brisbane, QLD"
	},
	{
		img: project_bathroom_default,
		title: "New Farm Ensuite",
		tag: "Bathroom Renovation",
		location: "Brisbane, QLD"
	},
	{
		img: project_extension_default,
		title: "Wilston Renovation",
		tag: "Full Home Renovation",
		location: "Brisbane, QLD"
	},
	{
		img: project_commercial_default,
		title: "Fortitude Valley Café",
		tag: "Commercial Fitout",
		location: "Brisbane, QLD"
	}
];
var testimonials = [
	{
		name: "Sarah & James M.",
		project: "Full home renovation, Ascot",
		quote: "Prime Finish handled every detail with care. The finish quality is unmatched and they delivered on time and on budget."
	},
	{
		name: "Daniel R.",
		project: "Kitchen & living, Paddington",
		quote: "Professional from day one. Communication was constant and the craftsmanship blew us away."
	},
	{
		name: "Northside Badminton Centre",
		project: "Commercial fitout, Brisbane",
		quote: "Tight commercial timeline - they smashed it. Trades, finishes, project management: all top-tier."
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[100svh] flex items-center text-white overflow-hidden bg-charcoal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-[oklch(0.1_0.02_230)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-70 [background:radial-gradient(40%_45%_at_10%_25%,oklch(0.66_0.12_210/0.4),transparent_70%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-60 [background:radial-gradient(35%_40%_at_95%_75%,oklch(0.66_0.12_210/0.35),transparent_70%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.04]",
					style: {
						backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
						backgroundSize: "72px 72px"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none select-none hidden lg:block absolute z-10 top-20 right-[40%] xl:right-[42%] h-[calc(100svh-5.5rem)] max-h-[700px] w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 bottom-0 h-10 w-60 -translate-x-1/2 rounded-full bg-black/75 blur-2xl opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_portrait_grounded_default,
						alt: "Prime Finish Renovations - your Brisbane renovation specialist",
						className: "relative h-full w-auto object-contain object-bottom drop-shadow-[0_34px_48px_rgba(0,0,0,0.68)]",
						width: 578,
						height: 1320,
						fetchPriority: "high"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-prime relative pt-36 pb-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20 lg:col-span-7 max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 backdrop-blur px-4 py-1.5 text-[11px] font-semibold text-teal uppercase tracking-[0.22em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " Brisbane Renovation Experts"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-balance drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]",
								children: [
									"Transforming spaces.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gradient-to-r from-teal to-primary-glow bg-clip-text text-transparent",
										children: "Elevating lives."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-white/85 leading-relaxed",
								children: "Premium home renovations and commercial fitouts across Brisbane, delivered by a team obsessed with finish, function and follow-through."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3",
								children: [
									"Fully licensed & insured Brisbane renovators",
									"Fixed-price contracts · zero surprise variations",
									"Dedicated project manager on every job"
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-white/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-teal mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: p
									})]
								}, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap items-center gap-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+61450010250",
									className: "inline-flex items-center gap-3 text-white hover:text-teal transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-12 w-12 rounded-sm bg-white/10 backdrop-blur grid place-items-center ring-1 ring-white/15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.22em] text-white/60",
										children: "Call us"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold",
										children: "0450 010 250"
									})] })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative max-w-md lg:max-w-none lg:ml-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-teal/50 via-primary-glow/30 to-transparent blur-3xl opacity-80 animate-pulse [animation-duration:6s]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 rounded-2xl bg-gradient-to-br from-teal/30 to-transparent blur-xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-30 bg-card/95 backdrop-blur-xl text-foreground p-7 md:p-9 rounded-xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)] ring-1 ring-white/20 border border-white/10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Free Quote · 24-hour reply"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 text-2xl font-semibold",
											children: "Start your renovation"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm text-muted-foreground",
											children: "Tell us about your project. No obligation."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { compact: true })
										})
									]
								})
							]
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal text-white border-t border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prime py-8 grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					{
						icon: ShieldCheck,
						label: "Fully Licensed & Insured"
					},
					{
						icon: CircleCheck,
						label: "Fixed-Price Contracts"
					},
					{
						icon: MapPin,
						label: "Brisbane-based · Local Trades"
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-5 w-5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-white/80",
						children: t.label
					})]
				}, t.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-teal",
							children: "What we do"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl md:text-5xl font-semibold text-balance",
							children: "A complete renovation & construction partner."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-muted-foreground",
						children: "From single-room refreshes to full-scale builds, every Prime Finish project is delivered with the same uncompromising standard."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-md overflow-hidden",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group bg-card p-8 hover:bg-charcoal hover:text-white transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8 text-teal" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity",
								children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28 bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-teal",
							children: "Recent work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl md:text-5xl font-semibold text-balance max-w-xl",
							children: "Featured projects."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							className: "inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-teal",
							children: ["View full portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						className: "group relative block overflow-hidden rounded-md mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: featuredProject.img,
								alt: featuredProject.title,
								loading: "lazy",
								width: 1920,
								height: 1080,
								className: "w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-8 md:p-12 text-white max-w-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-teal",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
											" ",
											featuredProject.tag
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-3xl md:text-4xl font-semibold",
										children: featuredProject.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm uppercase tracking-widest text-white/65",
										children: featuredProject.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-xl text-base text-white/85 leading-relaxed",
										children: featuredProject.blurb
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							className: "group relative overflow-hidden rounded-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.title,
									loading: "lazy",
									width: 1600,
									height: 1200,
									className: "w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-5 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] uppercase tracking-widest text-teal",
										children: [
											p.tag,
											" · ",
											p.location
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1.5 text-lg font-semibold",
										children: p.title
									})]
								})
							]
						}, p.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_craft_default,
						alt: "Prime Finish craftsmanship",
						loading: "lazy",
						width: 1600,
						height: 1100,
						className: "rounded-md w-full object-cover shadow-elegant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block absolute -bottom-8 -right-8 bg-charcoal text-white p-8 rounded-md max-w-xs shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-5xl font-semibold text-teal",
							children: "98%"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/70",
							children: "Of clients refer us to family and friends within 12 months."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-teal",
						children: "Why Prime Finish"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl font-semibold text-balance",
						children: "Premium craftsmanship, without the chaos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground leading-relaxed",
						children: "We're a tight-knit team of licensed builders, project managers and trusted trades - built to deliver on the things every homeowner wishes their builder did: clean sites, clear communication, and the finish they were promised."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-4",
						children: [
							"Dedicated project manager on every job",
							"Fixed-price contracts with no surprise variations",
							"Weekly progress updates with photos",
							"All trades licensed, insured and police-checked",
							"Brisbane-based team · local trades · local accountability"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-teal mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-foreground",
								children: p
							})]
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-10 inline-flex items-center gap-2 rounded-sm bg-charcoal px-6 py-3.5 text-sm font-semibold text-white hover:bg-charcoal-soft",
						children: ["About our process ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28 bg-charcoal text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-teal",
						children: "Our process"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl font-semibold text-balance",
						children: "A clear path from concept to handover."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8",
					children: [
						{
							n: "01",
							t: "Consult",
							d: "On-site consultation to understand scope, vision and budget."
						},
						{
							n: "02",
							t: "Design & Quote",
							d: "Fixed-price proposal with detailed scope, timeline and materials."
						},
						{
							n: "03",
							t: "Build",
							d: "Dedicated PM, weekly updates, premium trades on a clean site."
						},
						{
							n: "04",
							t: "Handover",
							d: "Quality checks, full walkthrough and a finish you'll be proud of."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-white/15 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-teal",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-xl font-semibold",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-white/65 leading-relaxed",
								children: s.d
							})
						]
					}, s.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-teal",
						children: "Client stories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl font-semibold text-balance",
						children: "Built on referrals, finished to perfection."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border border-border rounded-md p-8 hover:shadow-elegant transition-shadow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-teal" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-base leading-relaxed text-foreground",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-6 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mt-1",
									children: t.project
								})]
							})
						]
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-24 bg-gradient-hero text-white relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_50%_50%,oklch(0.66_0.12_210/0.5),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prime relative text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-semibold text-balance",
						children: "Ready to transform your space?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-white/80",
						children: "Call us directly, or scroll back up to request a free quote - we reply within 24 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+61450010250",
							className: "inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep shadow-teal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call 0450 010 250"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10",
							children: ["Contact us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { HomePage as component };
