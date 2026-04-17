import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { wings, wingDetails } from "../data/clubData";

export default function WingPage() {
  const { wingId } = useParams();
  const wing = useMemo(
    () => wings.find((item) => item.id === wingId),
    [wingId],
  );
  const details = wingDetails[wingId];

  if (!wing || !details) {
    return (
      <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">
          Wing not found
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Please return to the wings page to select a different department.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-500"
        >
          Back Home
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-16">
      <div className="rounded-[2rem] bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-400 px-8 py-14 text-white shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-100">
              Wing Overview
            </p>
            <h1 className="mt-4 text-5xl font-semibold">{wing.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-sky-100/90">
              {details.banner}
            </p>
          </div>
          <span className="inline-flex rounded-full bg-white/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            {wing.icon}
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-8 xl:grid-cols-[0.9fr_0.7fr]">
        <div className="space-y-10">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900">
            <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">
              About this Wing
            </h2>
            <p className="mt-4 text-slate-600 leading-8 dark:text-slate-400">
              {details.about}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Technologies Used
              </h3>
              <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
                {wing.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Projects
              </h3>
              <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
                {details.projects.map((project) => (
                  <li
                    key={project}
                    className="rounded-3xl bg-slate-50 px-4 py-3 dark:bg-slate-800"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
              Team Members
            </h3>
            <div className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
              {details.members.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl bg-slate-50 px-4 py-3 dark:bg-slate-800"
                >
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {member.name}
                  </p>
                  {member.position && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {member.position}
                    </p>
                  )}
                  {member.batch && (
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      {member.batch}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
              Wing Gallery
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="h-36 rounded-[1.5rem] bg-slate-900/5 dark:bg-slate-800" />
              <div className="h-36 rounded-[1.5rem] bg-slate-900/5 dark:bg-slate-800" />
              <div className="h-36 rounded-[1.5rem] bg-slate-900/5 dark:bg-slate-800" />
              <div className="h-36 rounded-[1.5rem] bg-slate-900/5 dark:bg-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
