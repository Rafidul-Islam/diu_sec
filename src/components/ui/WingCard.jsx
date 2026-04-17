import { Link } from "react-router-dom";

export default function WingCard({ wing }) {
  return (
    <article className="group rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sky-200 dark:border-slate-700/80 dark:bg-slate-900/90 dark:hover:border-sky-600">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-50 text-2xl shadow-inner shadow-sky-100 dark:bg-slate-800 dark:shadow-slate-900">
        <span>{wing.icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
        {wing.name}
      </h3>
      <p className="mt-3 text-slate-600 leading-7 dark:text-slate-400">
        {wing.description}
      </p>
      <Link
        to={`/wing/${wing.id}`}
        className="mt-6 inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        Explore Wing
      </Link>
    </article>
  );
}
