import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10 lg:px-16 bg-white dark:bg-slate-950"
    >
      <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-400 px-8 py-16 text-center text-white shadow-soft">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-100">
            Join the movement
          </p>
          <h2 className="text-4xl font-semibold leading-tight">
            Join Our Club and Build Your Future
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-sky-100/90">
            Become part of a collaborative community where you can publish
            research, design products, and deploy real technical solutions.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/registration-form"
              className="inline-flex items-center justify-center rounded-full bg-white !text-black px-8 py-3 text-base font-semibold transition hover:bg-slate-200"
            >
              Apply Now
            </Link>
            <a
              href="mailto:diusec.edu.bd"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
