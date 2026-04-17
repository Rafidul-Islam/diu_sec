import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[900px] flex-col items-center justify-center px-6 text-center sm:px-10">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
        Page not found
      </p>
      <h1 className="mt-4 text-5xl font-semibold text-slate-950 dark:text-white">
        404 — This page does not exist.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
        Return to the club landing page or explore the latest magazine and
        wings.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-500"
      >
        Back to Home
      </Link>
    </section>
  );
}
