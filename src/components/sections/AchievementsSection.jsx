import { motion } from "framer-motion";

const stats = [
  { label: "Members", value: "500+" },
  { label: "Magazine Issues", value: "12" },
  { label: "Events", value: "20+" },
  { label: "National Awards", value: "5" },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-16 bg-white dark:bg-slate-950"
    >
      <div className="rounded-[2rem] bg-slate-950 px-8 py-14 text-center text-white shadow-soft dark:bg-slate-900">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
          Achievements
        </p>
        <h2 className="mt-4 text-4xl font-semibold">
          A track record of student impact and recognition.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="rounded-[1.75rem] bg-slate-900/90 px-8 py-8 dark:bg-slate-800/60"
            >
              <p className="text-5xl font-semibold text-sky-400">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400 dark:text-slate-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
