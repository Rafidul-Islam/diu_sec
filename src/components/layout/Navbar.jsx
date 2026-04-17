import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/diusec.jpg";

const menuItems = [
  { label: "Home", href: "/", isSection: false },
  { label: "Magazine", href: "/magazine", isSection: false },
  { label: "Wings", href: "wings", isSection: true },
  { label: "Events", href: "activities", isSection: true },
  { label: "Team", href: "achievements", isSection: true },
  { label: "Gallery", href: "cta", isSection: true },
  { label: "Contact", href: "footer", isSection: true },
];

const scrollToSection = (sectionId, navigate) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    // If section not found, navigate to home first
    navigate("/");
    // Then scroll after a short delay to allow page to load
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (item) => {
    if (item.isSection) {
      scrollToSection(item.href, navigate);
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/15 bg-white/10 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/10">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-slate-950 dark:text-white"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-600 text-lg font-semibold text-white shadow-lg shadow-sky-500/30">
            <img src={logo} alt="SEC-Logo" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              Software Engineering Club
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">
              University Tech Society
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) =>
            item.isSection ? (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
          {/* <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300/50 bg-white/40 px-3 py-2 text-sm font-semibold text-slate-700 backdrop-blur-sm transition hover:bg-white/60 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button> */}
        </nav>

        {/* <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300/50 bg-white/40 p-2 text-slate-700 backdrop-blur-sm transition hover:bg-white/60 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-3xl border border-slate-300/50 bg-white/40 p-3 text-slate-700 backdrop-blur-sm transition hover:bg-white/60 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div> */}
      </div>

      {/* {open && (
        <div className="border-t border-slate-200/15 bg-white/15 px-6 py-5 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/20">
          <div className="space-y-4">
            {menuItems.map((item) =>
              item.isSection ? (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item)}
                  className="block w-full text-left rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white/40 dark:text-white dark:hover:bg-white/10"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white/40 dark:text-white dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ),
            )}
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="w-full rounded-2xl border border-slate-300/50 bg-white/40 px-4 py-3 font-semibold text-slate-700 backdrop-blur-sm transition hover:bg-white/60 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Toggle {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </div>
        </div>
      )} */}
    </header>
  );
}
