import { recentActivities } from "../../data/clubData";

export default function RecentActivitiesSection() {
  return (
    <section
      id="activities"
      className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-10 lg:px-16 bg-white dark:bg-slate-950"
    >
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
          Recent Activities
        </p>
        <h2 className="text-4xl font-semibold text-slate-950 dark:text-white">
          What the club delivered this semester.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {recentActivities.map((activity, index) => (
          <article
            key={activity.title}
            className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-soft transition hover:-translate-y-1 dark:border-slate-700/80 dark:bg-slate-900"
          >
            <div
              className={`h-52 rounded-t-[2rem] ${
                index % 3 === 0
                  ? "bg-gradient-to-br from-sky-500 to-blue-500"
                  : index % 3 === 1
                    ? "bg-gradient-to-br from-cyan-500 to-slate-800"
                    : "bg-gradient-to-br from-indigo-500 to-slate-700"
              }`}
            />
            <div className="space-y-4 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
                {activity.date}
              </p>
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                {activity.title}
              </h3>
              <p className="text-slate-600 leading-7 dark:text-slate-400">
                {activity.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
