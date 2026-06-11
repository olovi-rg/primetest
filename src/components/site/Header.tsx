import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className={cn(
        "container-prime flex items-center justify-between transition-all duration-300",
        scrolled ? "h-20 md:h-20" : "h-24 md:h-28",
      )}>
        <Link
          to="/"
          className="relative flex items-center"
          onClick={() => setOpen(false)}
        >
          <Logo
            className={cn(
              "w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.03] origin-left",
              scrolled
                ? "h-14 md:h-16"
                : "h-24 md:h-32 lg:h-40 -mb-12 mt-2",
            )}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-white transition-colors"
              activeProps={{ className: "text-teal" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
              <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+61450010250"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <Phone className="h-4 w-4" /> 0450 010 250
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-teal px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-teal-deep transition-colors shadow-teal"
          >
            Get a Free Quote
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/5">
          <div className="container-prime py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+61450010250" className="mt-3 inline-flex items-center gap-2 text-white/80">
              <Phone className="h-4 w-4" /> 0450 010 250
            </a>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-teal px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
