import { motion } from "framer-motion";

export default function MagazineViewer() {
  return (
    <div className="relative mx-auto w-full max-w-[28rem] px-4 py-6 sm:px-6">
      <div className="absolute inset-0 rounded-[2rem] bg-sky-500/10 blur-2xl" />
      <div className="relative flex justify-center">
        <motion.div
          initial={{ rotateY: -20, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 h-[420px] w-[240px] rounded-[2rem] border border-slate-200/80 bg-white shadow-soft shadow-slate-900/10"
        >
          <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-100 via-white to-slate-50">
            <div className="flex-1 p-6">
              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-600">
                Latest Issue
              </div>
              <h3 className="text-3xl font-semibold text-slate-950">
                April 2026
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Explore research-led stories, student portfolios, and software
                design case studies from our latest issue.
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200/80 p-6">
              <div className="rounded-3xl bg-slate-950/95 px-4 py-3 text-white shadow-xl shadow-slate-950/10">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
                  Feature
                </p>
                <p className="mt-2 text-base font-medium">Campus AI Labs</p>
              </div>
              <div className="rounded-3xl bg-sky-50 px-4 py-3 text-slate-700">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-500">
                  Design Focus
                </p>
                <p className="mt-2 text-sm">Next-gen academic interfaces.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -28, y: -12, rotate: -8, opacity: 0 }}
          animate={{ x: -12, y: -6, rotate: -4, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="pointer-events-none absolute left-1/2 top-[16%] h-[400px] w-[220px] -translate-x-1/2 rounded-[2rem] border border-slate-200/60 bg-slate-100 shadow-soft"
        />
        <motion.div
          initial={{ x: 20, y: 20, rotate: 6, opacity: 0 }}
          animate={{ x: 12, y: 12, rotate: 4, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="pointer-events-none absolute right-0 top-[18%] h-[388px] w-[200px] rounded-[2rem] border border-slate-200/60 bg-slate-100 shadow-soft"
        />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50/90 px-4 py-5 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Pages
          </p>
          <p className="mt-3 text-xl font-semibold text-slate-950">18</p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50/90 px-4 py-5 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Topics
          </p>
          <p className="mt-3 text-xl font-semibold text-slate-950">
            R&D, Tech, Design
          </p>
        </div>
      </div>
    </div>
  );
}
