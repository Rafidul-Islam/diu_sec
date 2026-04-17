import { Link } from "react-router-dom";
import MagazineViewer from "../ui/MagazineViewer";
import CardSwap, { Card } from "../ui/CardSwap";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 px-6 pb-20 pt-16 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_35%)]" />
      <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-sky-100 ring-1 ring-white/10 backdrop-blur">
            <span className="text-base">✨</span>
            New issue live: Empowering software leadership in academia.
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                University Software Engineering Club
              </p>
              <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight sm:text-6xl">
                Discover the latest E-Magazine in a realistic book experience.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-200">
              We connect students with modern development, research, and design
              through monthly issues, high-impact wings, and collaborative
              campus programs.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/magazine"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400 sm:w-auto"
            >
              Read Latest Magazine
            </Link>
            <a
              href="/public/magazine.pdf"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/15 sm:w-auto"
              download={"/public/magazine.pdf"}
            >
              Download PDF
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 px-5 py-4 text-slate-100 shadow-soft shadow-slate-900/20 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                Community
              </p>
              <p className="mt-3 text-lg font-semibold">
                500+ active student members supporting growth.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 px-5 py-4 text-slate-100 shadow-soft shadow-slate-900/20 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                Impact
              </p>
              <p className="mt-3 text-lg font-semibold">
                10 vibrant wings collaborating on inclusive campus tech.
              </p>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div
            style={{
              height: "600px",
              position: "relative",
            }}
            className="absolute -top-30"
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 2</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
