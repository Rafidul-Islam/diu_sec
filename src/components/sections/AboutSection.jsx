import Carousel from "../ui/Carousal.jsx";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-16 bg-white dark:bg-slate-950">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
            About the Club
          </p>
          <h2 className="text-4xl font-semibold text-slate-950 dark:text-white">
            A student-led engine for engineering innovation.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            The Software Engineering Club empowers students to design, build,
            and publish technology for campus communities. We blend hands-on
            engineering, editorial excellence, and interdisciplinary
            collaboration.
          </p>
          <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Our monthly E-Magazine is the flagship publication that amplifies
            student projects, research, and design thinking across the
            university.
          </p>
          <button className="rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
            Read More
          </button>
        </div>

        <div
          style={{ height: "600px", position: "relative" }}
          className="flex justify-end items-center"
        >
          <Carousel
            baseWidth={400}
            autoplay
            autoplayDelay={3000}
            pauseOnHover
            loop
            round={true}
          />
        </div>
      </div>
    </section>
  );
}
