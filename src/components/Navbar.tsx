import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-foreground/10">
      <div className="container-max flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground tracking-wider uppercase">
            M Lemus <span className="text-primary">Trucking</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-metallic-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:805-815-7604">
            <Button variant="default" size="sm" className="font-heading uppercase tracking-wider">
              <Phone className="w-4 h-4 mr-2" />
              805-815-7604
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-secondary border-t border-foreground/10">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`py-3 px-4 text-sm font-medium uppercase tracking-wider rounded transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-foreground/5"
                    : "text-metallic-light hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:805-815-7604" className="mt-2">
              <Button variant="default" className="w-full font-heading uppercase tracking-wider">
                <Phone className="w-4 h-4 mr-2" />
                805-815-7604
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
