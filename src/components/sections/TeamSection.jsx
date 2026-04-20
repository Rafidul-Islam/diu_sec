const teamData = {
  advisors: [
    {
      name: "Prof. Dr. Imran Mahmud",
      role: "Advisor",
      image: "/public/teamImg/imran-mahmud.jpg",
    },
    {
      name: "Dr. Md. Fazla Elahe",
      role: "Advisor",
      image: "/public/teamImg/fazla-elahe.jpg",
    },
  ],
  leadership: [
    {
      name: "Md. Rajib Mia",
      role: "Convener",
      image: "/public/teamImg/rajib-mia.jpg",
    },
    {
      name: "Abdul Hye Zebon",
      role: "Co-Convener",
      image: "/public/teamImg/abdul-hye-zebon.jpg",
    },
    {
      name: "K. M. Shahriar Islam",
      role: "Mentor",
      image: "/public/teamImg/shahriar-islam.jpg",
    },
    {
      name: "Fazla Rabby Raihan",
      role: "Mentor",
      image: "/public/teamImg/fazla-rabby-raihan.jpg",
    },
    {
      name: "Md. Abdul Alim",
      role: "President",
      image: "/public/teamImg/abdul-alim.jpg",
    },
  ],
  vicePresidents: [
    {
      name: "Simanta Kumar Roy",
      role: "Vice President",
      dept: "Design & Development",
      image: "/public/teamImg/simanta-kumar-roy.jpg",
    },
    {
      name: "Piyash Basak",
      role: "Vice President",
      dept: "ACM",
      image: "/public/teamImg/piyash-basak.jpg",
    },
    {
      name: "Md Shahriar Rashid Rahi",
      role: "Vice President",
      dept: "General",
      image: "/public/teamImg/shahriar-rashid-rahi.jpg",
    },
    {
      name: "MD Walliul Islam Nohan",
      role: "Vice President",
      dept: "Industry & Career",
      image: "/public/teamImg/walliul-islam-nohan.jpg",
    },
    {
      name: "Md Mahfuzur Rahman Shanto",
      role: "Vice President",
      dept: "Research & Publications",
      image: "/public/teamImg/mahfuzur-rahman-shanto.jpg",
    },
  ],
  secretaries: [
    {
      name: "Sayed Roman",
      role: "General Secretary",
      image: "/public/teamImg/sayed-roman.jpg",
    },
    {
      name: "Md. Mahadi Hasan",
      role: "Joint Secretary",
      image: "/public/teamImg/mahadi-hasan.jpg",
    },
    {
      name: "Abdullah Al Maruf Supto",
      role: "Joint Secretary",
      image: "/public/teamImg/abdullah-al-maruf-supto.jpg",
    },
    {
      name: "Jahidul Hassan Reshad",
      role: "Development Secretary",
      image: "/public/teamImg/jahidul-hassan-reshad.jpg",
    },
    {
      name: "Md Imran Tarafdar",
      role: "Treasurer",
      image: "/public/teamImg/imran-tarafdar.jpg",
    },
    {
      name: "Md. Eusha Hasan",
      role: "ACM Secretary",
      image: "/public/teamImg/eusha-hasan.jpg",
    },
    {
      name: "Siyam Bhulyan",
      role: "ACM Secretary",
      image: "/public/teamImg/siyam-bhulyan.jpg",
    },
    {
      name: "Mehedi Hasan",
      role: "Student Welfare Secretary",
      image: "/public/teamImg/mehedi-hasan.jpg",
    },
    {
      name: "Jannatul Nayim Prithibi",
      role: "Women Welfare Secretary",
      image: "/public/teamImg/jannatul-nayim-prithibi.jpg",
    },
    {
      name: "Md Rakibul Hasan Shaon",
      role: "Research & Publications Secretary",
      image: "/public/teamImg/rakibul-hasan-shaon.jpg",
    },
    {
      name: "Ahsan Habib",
      role: "International Relation Secretary",
      image: "/public/teamImg/ahsan-habib.jpg",
    },
    {
      name: "S.M. Rakib",
      role: "Office & Organization Secretary",
      image: "/public/teamImg/sm-rakib.jpg",
    },
    {
      name: "Intisifar Awal Hrid",
      role: "Office & Organization Secretary",
      image: "/public/teamImg/intisifar-awal-hrid.jpg",
    },
    {
      name: "MD. Rufayed Islam Plai",
      role: "Program Organization Secretary",
      image: "/public/teamImg/rufayed-islam-plai.jpg",
    },
    {
      name: "Md. Abul Hasnat Himel",
      role: "Sports Secretary",
      image: "/public/teamImg/abul-hasnat-himel.jpg",
    },
    {
      name: "MD. Mahmudul Hasan Rafi",
      role: "Cultural Secretary",
      image: "/public/teamImg/mahmudul-hasan-rafi.jpg",
    },
    {
      name: "Sayem Mohammad Prince",
      role: "Public Relation Secretary",
      image: "/public/teamImg/sayem-mohammad-prince.jpg",
    },
    {
      name: "FAHIM BIN FORHAD",
      role: "Media & Press Secretary",
      image: "/public/teamImg/fahim-bin-forhad.jpg",
    },
    {
      name: "Md. Mubashshir Alam",
      role: "Design Secretary",
      image: "/public/teamImg/mubashshir-alam.jpg",
    },
  ],
};

const avatarPalette = [
  "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300",
  "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300",
  "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
];

function getInitials(name) {
  return name
    .split(" ")
    .filter((w) => w.length > 2 && !["Dr.", "Md.", "MD.", "Prof."].includes(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function Avatar({ name, image, index = 0, size = "md" }) {
  const palette = avatarPalette[index % avatarPalette.length];
  const sizeClass =
    size === "lg"
      ? "h-14 w-14 text-base"
      : size === "sm"
        ? "h-9 w-9 text-xs"
        : "h-11 w-11 text-sm";

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`${sizeClass} shrink-0 rounded-full object-cover ring-2 ring-white dark:ring-slate-900`}
        onError={(e) => {
          // Fallback to initials if image fails to load
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
    );
  }

  return (
    <div
      className={`${sizeClass} ${palette} flex shrink-0 items-center justify-center rounded-full font-semibold ring-2 ring-white dark:ring-slate-900`}
    >
      {getInitials(name)}
    </div>
  );
}

function AvatarWithFallback({ name, image, index = 0, size = "md" }) {
  const palette = avatarPalette[index % avatarPalette.length];
  const sizeClass =
    size === "lg"
      ? "h-14 w-14 text-base"
      : size === "sm"
        ? "h-9 w-9 text-xs"
        : "h-11 w-11 text-sm";

  return (
    <div className={`${sizeClass} relative shrink-0`}>
      <img
        src={image}
        alt={name}
        className="h-full w-full rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
      <div
        className={`${palette} absolute inset-0 hidden items-center justify-center rounded-full font-semibold ring-2 ring-white dark:ring-slate-900`}
        style={{ fontSize: size === "lg" ? 16 : size === "sm" ? 11 : 13 }}
      >
        {getInitials(name)}
      </div>
    </div>
  );
}

function SectionDivider({ label }) {
  return (
    <div className="flex items-center gap-4 py-1">
      <p className="shrink-0 text-xs uppercase tracking-[0.3em] text-sky-600">
        {label}
      </p>
      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}

function AdvisorCard({ member, index }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <AvatarWithFallback
        name={member.name}
        image={member.image}
        index={index}
        size="lg"
      />
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">
          {member.name}
        </p>
        <p className="mt-0.5 text-xs uppercase tracking-widest text-sky-600">
          {member.role}
        </p>
      </div>
    </div>
  );
}

function LeaderCard({ member, index }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <AvatarWithFallback
        name={member.name}
        image={member.image}
        index={index}
        size="lg"
      />
      <div>
        <p className="text-sm font-semibold leading-snug text-slate-900 dark:text-white">
          {member.name}
        </p>
        <p className="mt-1 text-xs uppercase tracking-widest text-sky-600">
          {member.role}
        </p>
      </div>
    </div>
  );
}

function VPCard({ member, index }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <AvatarWithFallback
        name={member.name}
        image={member.image}
        index={index}
      />
      <div>
        <p className="text-xs font-semibold leading-snug text-slate-900 dark:text-white">
          {member.name}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-sky-600">
          {member.role}
        </p>
        {member.dept && (
          <span className="mt-2 inline-block rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
            {member.dept}
          </span>
        )}
      </div>
    </div>
  );
}

function SecretaryCard({ member, index }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-shadow hover:shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <AvatarWithFallback
        name={member.name}
        image={member.image}
        index={index}
        size="sm"
      />
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-slate-900 dark:text-white">
          {member.name}
        </p>
        <p className="truncate text-[10px] leading-relaxed text-slate-500 dark:text-slate-400">
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-10 lg:px-16"
    >
      {/* Header — mirrors WingsSection layout */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
            Ad Hoc Committee 2025
          </p>
          <h2 className="text-4xl font-semibold text-slate-950 dark:text-white">
            Meet the people behind the club.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          The dedicated members driving every initiative, event, and publication
          of the Software Engineering Club forward.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {/* Advisors */}
        <div className="flex flex-col gap-4">
          <SectionDivider label="Advisors" />
          <div className="grid gap-4 sm:grid-cols-2 xl:max-w-2xl">
            {teamData.advisors.map((m, i) => (
              <AdvisorCard key={i} member={m} index={i} />
            ))}
          </div>
        </div>

        {/* Core Leadership */}
        <div className="flex flex-col gap-4">
          <SectionDivider label="Core Leadership" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {teamData.leadership.map((m, i) => (
              <LeaderCard key={i} member={m} index={i + 2} />
            ))}
          </div>
        </div>

        {/* Vice Presidents */}
        <div className="flex flex-col gap-4">
          <SectionDivider label="Vice Presidents" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {teamData.vicePresidents.map((m, i) => (
              <VPCard key={i} member={m} index={i + 7} />
            ))}
          </div>
        </div>

        {/* Secretaries */}
        <div className="flex flex-col gap-4">
          <SectionDivider label="Secretaries" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamData.secretaries.map((m, i) => (
              <SecretaryCard key={i} member={m} index={i + 12} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
