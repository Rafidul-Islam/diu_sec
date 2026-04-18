import Carousel from "../ui/Carousal.jsx";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-20 lg:px-16 bg-white dark:bg-slate-950">
      <div className="grid gap-8 sm:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-[0.9fr_0.85fr] lg:items-center">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-600">
            About the Club
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-950 dark:text-white leading-tight">
            A student-led engine for engineering innovation.
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-slate-600 dark:text-slate-400">
              The Software Engineering Club empowers students to design, build,
              and publish technology for campus communities. We blend hands-on
              engineering, editorial excellence, and interdisciplinary
              collaboration.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-slate-600 dark:text-slate-400">
              Our monthly E-Magazine is the flagship publication that amplifies
              student projects, research, and design thinking across the
              university.
            </p>
          </div>
          {/* <button className="rounded-full bg-slate-950 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
            Read More
          </button> */}
        </div>

        {/* Right Content - Carousel */}
        <div className="flex justify-center lg:justify-end items-center w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
          <Carousel
            baseWidth={370}
            autoplay
            autoplayDelay={3000}
            pauseOnHover
            loop
            round={false}
          />
        </div>
      </div>
    </section>
  );
}
