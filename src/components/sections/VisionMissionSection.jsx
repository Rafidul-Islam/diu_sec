const cards = [
  {
    icon: "🎯",
    title: "Vision",
    description:
      "Shape the next generation of student engineers with inclusive, design-forward academic products.",
  },
  {
    icon: "🚀",
    title: "Mission",
    description:
      "Deliver monthly magazine issues, wing-driven projects, and campus events that elevate engineering practice.",
  },
  {
    icon: "📈",
    title: "Goals",
    description:
      "Cultivate leadership, technical depth, and real-world collaboration across 10+ academic wings.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-10 lg:px-16 bg-white dark:bg-slate-950">
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
          Our Direction
        </p>
        <h2 className="text-4xl font-semibold text-slate-950 dark:text-white">
          Vision, mission, and our long-term goals.
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Every initiative is designed to connect engineering students with
          practical skills, peer mentorship, and measurable campus impact.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sky-200 dark:border-slate-700/80 dark:bg-slate-900 dark:hover:border-sky-600"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-50 text-3xl dark:bg-slate-800">
              {card.icon}
            </div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
              {card.title}
            </h3>
            <p className="mt-4 text-slate-600 leading-7 dark:text-slate-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
