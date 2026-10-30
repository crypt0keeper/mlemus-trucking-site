import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Updates", path: "/updates" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-4 border-primary">
      <div className="container-max flex items-center justify-between h-24 lg:h-28 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="M Lemus Trucking Inc. home">
          <img
            src="/logo.jpg"
            alt="M Lemus Trucking Inc. — Port Hueneme, CA"
            width={376}
            height={240}
            className="h-20 lg:h-24 w-auto"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
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
          className="lg:hidden text-foreground p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`py-3 px-4 text-sm font-medium uppercase tracking-wider rounded transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary"
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
