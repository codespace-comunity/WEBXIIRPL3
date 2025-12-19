// =====================
// DATE INFO
// =====================
const today = new Date();
const todayIndex = today.getDay();

const formatDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

document.getElementById("todayDate").textContent = `📅 ${formatDate}`;

// =====================
// TIME HELPERS
// =====================
const nowMinutes = today.getHours() * 60 + today.getMinutes();

const toMinutes = (time) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const getNextSubjectIndex = (subjects) => {
  for (let i = 0; i < subjects.length; i++) {
    const start = toMinutes(subjects[i].start);
    if (nowMinutes < start) {
      return i;
    }
  }
  return -1;
};

// =====================
// SCHEDULE DATA
// =====================
const scheduleData = [
  {
    day: "Monday",
    index: 1,
    subjects: [
      { start: "06:30", end: "07:00", name: "Upacara" },
      { start: "07:00", end: "09.15", name: "PKK" },
      { start: "09:15", end: "10:00", name: "B.Inggris" },
      { start: "10:00", end: "10:20", name: "Istirahat" },
      { start: "10:20", end: "11:05", name: "B.Inggris" },
      { start: "11:05", end: "11:50", name: "IOT" },
      { start: "11:50", end: "12:30", name: "Istirahat" },
      { start: "12:30", end: "14:00", name: "IOT" },
      { start: "14:00", end: "15:30", name: "B.Indonesia" },
    ],
  },
  {
    day: "Tuesday",
    index: 2,
    subjects: [
      { start: "06:30", end: "07:00", name: "Tadarus" },
      { start: "07:00", end: "10:00", name: "BD" },
      { start: "10:00", end: "10:20", name: "Istirahat" },
      { start: "10:20", end: "11:50", name: "BD" },
      { start: "11:50", end: "12:30", name: "Istirahat" },
      { start: "12:30", end: "14:00", name: "BD" },
      { start: "14:00", end: "15:30", name: "PP" },
    ],
  },
  {
    day: "Wednesday",
    index: 3,
    subjects: [
      { start: "06:30", end: "07:00", name: "Tadarus" },
      { start: "07:00", end: "10:00", name: "PWEB" },
      { start: "10:00", end: "10:20", name: "Istirahat" },
      { start: "10:20", end: "11:50", name: "PWEB" },
      { start: "11:50", end: "12:30", name: "Istirahat" },
      { start: "12:30", end: "15:30", name: "PWEB" },
    ],
  },
  {
    day: "Thursday",
    index: 4,
    subjects: [
      { start: "06:30", end: "07:00", name: "Tadarus" },
      { start: "07:00", end: "10:00", name: "PBO" },
      { start: "10:00", end: "10:20", name: "Istirahat" },
      { start: "10:20", end: "11:50", name: "PBO" },
      { start: "11:50", end: "12:30", name: "Istirahat" },
      { start: "12:30", end: "15:30", name: "PBO" },
    ],
  },
  {
    day: "Friday",
    index: 5,
    subjects: [
      { start: "06:30", end: "07:00", name: "Upacara" },
      { start: "07:00", end: "08:30", name: "MTK" },
      { start: "08:30", end: "10:00", name: "PABP" },
      { start: "10:00", end: "10:20", name: "Istirahat" },
      { start: "10:20", end: "11:50", name: "BD" },
      { start: "11:50", end: "13:00", name: "Istirahat" },
      { start: "13:00", end: "14:30", name: "B.Sunda" },
    ],
  },
];

// =====================
// RENDER
// =====================
const grid = document.getElementById("scheduleGrid");

scheduleData.forEach((day) => {
  const isToday = day.index === todayIndex;

  const card = document.createElement("div");
  card.className = `
    relative rounded-3xl border backdrop-blur-xl p-6 transition-all
    ${
      isToday
        ? "scale-[1.03] border-cyan-400/50 bg-white/10 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
        : "border-white/10 bg-white/5"
    }
  `;

  const nextIndex = isToday ? getNextSubjectIndex(day.subjects) : -1;

  card.innerHTML = `
  ${
    isToday
      ? `
    <span class="absolute -top-3 right-6 text-xs px-3 py-1 rounded-full bg-cyan-400 text-black font-semibold">
      TODAY
    </span>`
      : ""
  }

  <h2 class="text-xl font-semibold mb-5">${day.day}</h2>

  <ul class="space-y-3">
    ${day.subjects
      .map((sub, idx) => {
        const start = toMinutes(sub.start);
        const end = toMinutes(sub.end);

        const isActive = isToday && nowMinutes >= start && nowMinutes < end;

        const isNext = isToday && !isActive && idx === nextIndex;

        return `
          <li class="
            flex justify-between items-center rounded-xl px-3 py-1 transition
            ${
              isActive
                ? "bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/40"
                : isNext
                ? "bg-blue-400/10 text-blue-300 ring-1 ring-blue-400/30 border border-dashed border-blue-400/40"
                : "text-white/80"
            }
          ">
            <span class="text-sm">
              ${sub.start} - ${sub.end}
            </span>
            <span class="font-medium flex items-center gap-2">
              ${sub.name}
              ${
                isActive
                  ? `<span class="text-xs px-2 py-0.5 rounded-full bg-cyan-400 text-black">NOW</span>`
                  : isNext
                  ? `<span class="text-xs px-2 py-0.5 rounded-full bg-blue-400 text-black">NEXT</span>`
                  : ""
              }
            </span>
          </li>
        `;
      })
      .join("")}
  </ul>
`;

  grid.appendChild(card);
});
