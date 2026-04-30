  import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "/diusec.jpg";

const menuItems = [
  { label: "Home", href: "/", type: "route" },
  { label: "Magazine", href: "/magazine", type: "route" },
  { label: "Wings", href: "wings", type: "section" },
  { label: "Events", href: "activities", type: "section" },
  { label: "Team", href: "team", type: "section" },
  // { label: "Gallery", href: "cta", type: "section" },
  { label: "Contact", href: "footer", type: "section" },
];

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    setOpen(false);
    if (item.type === "route") {
      navigate(item.href);
      return;
    }

    const hash = `#${item.href}`;
    if (location.pathname === "/" && location.hash === hash) {
      scrollToSection(item.href);
      return;
    }

    navigate({ pathname: "/", hash });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-sky-600 shadow-md shadow-sky-500/30">
            <img
              src={logo}
              alt="SEC Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            DIUSEC
          </p>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className="cursor-pointer border-none bg-transparent p-0 text-sm font-medium text-slate-100 transition hover:text-sky-400"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 lg:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-100 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-100 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-100 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col border-t border-slate-800 bg-slate-900 px-6 py-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className="cursor-pointer border-b border-slate-800 bg-transparent py-3 text-left text-sm font-medium text-slate-100 hover:text-sky-400 last:border-none"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
