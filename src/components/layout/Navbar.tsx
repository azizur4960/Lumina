import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Private Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled || isOpen
          ? "bg-brand-bg/95 backdrop-blur-md border-brand-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-serif font-bold tracking-tight text-brand-ink uppercase"
          >
            Lumina
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-accent",
                  location.pathname === link.href
                    ? "text-brand-accent"
                    : "text-brand-ink/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/order">Order Online</Link>
            </Button>
            <Button asChild>
              <Link to="/reservations">Reserve</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-ink"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1px)] bottom-0 bg-brand-bg md:hidden transition-all duration-300 ease-in-out border-t border-brand-border h-[calc(100vh-73px)] overflow-y-auto px-4 py-8 flex flex-col",
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-6 text-center text-xl font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "transition-colors hover:text-brand-accent py-2",
                location.pathname === link.href && "text-brand-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 flex flex-col gap-4">
          <Button variant="outline" size="lg" className="w-full text-base" asChild>
            <Link to="/order">Order Online</Link>
          </Button>
          <Button size="lg" className="w-full text-base" asChild>
            <Link to="/reservations">Reserve a Table</Link>
          </Button>
        </div>

        <div className="mt-auto pt-10 flex flex-col items-center gap-6 text-brand-muted text-sm pb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>123 Culinary Way, San Francisco</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>(555) 123-4567</span>
          </div>
        </div>
      </div>
    </header>
  );
}
