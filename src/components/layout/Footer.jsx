import { wings } from "../../data/clubData";
import { Link } from "react-router-dom";
import logo from "../../assets/diusec.jpg";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-[1200px] space-y-10 px-6 py-16 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Club Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl text-lg font-semibold shadow-lg shadow-sky-500/25">
                <img src={logo} alt="SEC Logo" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                  Software Engineering Club
                </p>
                <p className="font-semibold">University Tech Society</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              Empowering future engineers through monthly magazines,
              collaborative wings, and research-driven events.
            </p>
            <div className="space-y-2 text-sm">
              <p>diusec@diu.edu.bd</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/magazine" className="hover:text-white transition">
                  Magazine
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-white transition cursor-pointer"
                >
                  Back to Top
                </button>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Wings */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Featured Wings
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {wings.slice(0, 4).map((wing) => (
                <li key={wing.id}>
                  <Link
                    to={`/wing/${wing.id}`}
                    className="hover:text-white transition"
                  >
                    {wing.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/80" />

        {/* Bottom Footer */}
        <div className="text-sm text-slate-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Software Engineering Club · University Tech Society
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span>
              <br className="sm:hidden" />
              Developed with <FaHeart className="inline text-red-500" /> by{" "}
              <a target="blank" href="https://rafidul-islam.netlify.app/">
                <u className="text-xl"> Rafid</u>
              </a>
            </p>

            <div className="flex flex-wrap gap-4 text-slate-400">
              <a href="#" className="transition hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-white">
                Instagram
              </a>
              <a href="#" className="transition hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
