import { magazineIssues } from "../data/clubData";
import MagazineViewer from "../components/ui/MagazineViewer";
import MyBook from "../components/ui/MyBook";

export default function Magazine() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-16">
      <div id="viewer" className=" flex justify-center items-center w-full">
        <MyBook></MyBook>
      </div>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
            Magazine Archive
          </p>
          <h1 className="text-5xl font-semibold text-slate-950 dark:text-white">
            Explore the latest issue and past editions.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Our monthly E-Magazine shares student research, engineering
            leadership stories, and product design showcases from the University
            Software Engineering Club.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#viewer"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-500"
            >
              Open Latest Issue
            </a>
            <a
              href="#archive"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600"
            >
              See Archive
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] bg-slate-950/95 p-6 text-white shadow-soft dark:bg-slate-900">
          <h2 className="text-3xl font-semibold">Latest Issue Preview</h2>
          <p className="mt-4 text-slate-300 leading-7">
            Live flip-book experience design with realistic page surfaces,
            editorial hierarchy, and magazine navigation for academic readers.
          </p>
          <div className="mt-8 space-y-3 rounded-3xl bg-slate-900/80 p-6 dark:bg-slate-800">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
              Highlights
            </p>
            <ul className="space-y-3 text-slate-300">
              <li>• Student innovation spotlights</li>
              <li>• Research summaries and case studies</li>
              <li>• Campus tooling and product guides</li>
            </ul>
          </div>
        </div>
      </div>

      <section
        id="archive"
        className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
              Archive
            </p>
            <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">
              Past magazine editions
            </h2>
          </div>
          <a
            href="#"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
          >
            Download Archive
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {magazineIssues.map((issue) => (
            <article
              key={issue.issue}
              className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-700/80 dark:bg-slate-800"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                {issue.issue}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">
                {issue.title}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
