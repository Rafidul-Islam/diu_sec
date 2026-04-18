import { Link } from "react-router-dom";
import MagazineViewer from "../ui/MagazineViewer";
import CardSwap, { Card } from "../ui/CardSwap";
import TiltedCa2d from "../ui/TitledCard";
import page1 from "../../assets/DIU_SEC_Magazine/Typing Titan-Meraj.jpg";
import page2 from "../../assets/DIU_SEC_Magazine/Iftar-Meraj.jpg";
import page3 from "../../assets/DIU_SEC_Magazine/get together-Meraj.jpg";
import page4 from "../../assets/DIU_SEC_Magazine/Beyond The Frame-Meraj.jpg";
import page5 from "../../assets/DIU_SEC_Magazine/5.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 px-4 pb-16 pt-12 text-white sm:px-6 sm:pb-20 sm:pt-16 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_35%)]" />
      <div className="relative mx-auto grid max-w-[1200px] gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Content */}

        <div className="lg:hidden block">
          <div className=" lg:-top-70 lg:-left-0  lg:h-[600px] h-[400px] -left-50 -top-70 relative">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={3000}
              pauseOnHover={false}
            >
              <Card>
                <img src={page1} alt="" />
              </Card>
              <Card>
                <img src={page2} alt="" />
              </Card>
              <Card>
                <img src={page3} alt="" />
              </Card>
              <Card>
                <img src={page4} alt="" />
              </Card>
              <Card>
                <img src={page5} alt="" />
              </Card>
            </CardSwap>
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-sky-100 ring-1 ring-white/10 backdrop-blur">
            <span className="text-sm sm:text-base">✨</span>
            <span className="hidden sm:inline">
              New issue live: Empowering software leadership in academia.
            </span>
            <span className="sm:hidden">New issue live</span>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-200">
                DIU Software Engineering Club
              </p>
              <h1 className="mt-3 sm:mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                Discover the latest E-Magazine in a realistic book experience.
              </h1>
            </div>
            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 text-slate-200">
              We connect students with modern development, research, and design
              through monthly issues, high-impact wings, and collaborative
              campus programs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
            <Link
              to="/magazine"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-sky-400 sm:w-auto"
            >
              Read Latest Magazine
            </Link>
            <a
              href="/public/magazine.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-white/15 sm:w-auto"
              download={"/public/magazine.pdf"}
            >
              Download PDF
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            <div className="rounded-2xl sm:rounded-3xl bg-white/10 px-4 sm:px-5 py-3 sm:py-4 text-slate-100 shadow-soft shadow-slate-900/20 backdrop-blur">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-200">
                Community
              </p>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">
                500+ active members
              </p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-white/10 px-4 sm:px-5 py-3 sm:py-4 text-slate-100 shadow-soft shadow-slate-900/20 backdrop-blur">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-200">
                Impact
              </p>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">
                13 vibrant wings
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className=" lg:-top-70 lg:-left-0  lg:h-[600px] h-[400px] -left-50 -top-40 relative">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={3000}
              pauseOnHover={false}
            >
              <Card>
                <img src={page1} alt="" />
              </Card>
              <Card>
                <img src={page2} alt="" />
              </Card>
              <Card>
                <img src={page3} alt="" />
              </Card>
              <Card>
                <img src={page4} alt="" />
              </Card>
              <Card>
                <img src={page5} alt="" />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
