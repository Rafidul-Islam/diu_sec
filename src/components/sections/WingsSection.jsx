import WingCard from "../ui/WingCard";
import { wings } from "../../data/clubData";

export default function WingsSection() {
  return (
    <section
      id="wings"
      className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-10 lg:px-16"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
            Club Wings
          </p>
          <h2 className="text-4xl font-semibold text-slate-950 dark:text-white">
            13 wings empowering every software discipline.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          Each wing delivers specialized learning pathways, projects, and
          publications for student members.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {wings.map((wing) => (
          <WingCard wing={wing} key={wing.id} />
        ))}
      </div>
    </section>
  );
}
