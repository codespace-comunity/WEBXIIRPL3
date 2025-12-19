// =====================
// MEMBERS DATA
// =====================
const members = [
  {
    name: "Agung Nugroho",
    role: "member",
    description: "Comedian and TPA Admin",
    photo: "",
  },
  {
    name: "Arbyan Qaaf Tsabil",
    role: "member",
    description: "TPA Member",
    photo: "",
  },
  {
    name: "Arfan Faizan",
    role: "member",
    description: "KMT Member",
    photo: "",
  },
  {
    name: "Challisa Nada Aqilah",
    role: "Treasurer",
    description: "Rehan Girlfriend",
    photo: "",
  },
  {
    name: "Daffa Fadillah",
    role: "Vice Leader",
    description: "Best Sad Boy In The Class",
    photo: "",
  },
  {
    name: "Dara Laidatul Fadilah",
    role: "member",
    description: "Hijabers Jawa Barat",
    photo: "",
  },
  {
    name: "Deka Zalfa Ardani",
    role: "member",
    description: "KING MCGG",
    photo: "",
  },
  {
    name: "Dhafin Robiantara",
    role: "member",
    description: "Mountain Lovers",
    photo: "",
  },
  {
    name: "Gea Cornelia",
    role: "member",
    description: "Best Singer",
    photo: "",
  },
  {
    name: "Ilham Nur Romadona",
    role: "member",
    description: "Maradona Son",
    photo: "",
  },
  {
    name: "Juan Putra Omartio",
    role: "member",
    description: "Always NT",
    photo: "",
  },
  {
    name: "Julinanda Tri Firmansyah",
    role: "member",
    description: "Futsal Lovers",
    photo: "",
  },
  {
    name: "Khrisna Dayalu Punitra",
    role: "member",
    description: "China",
    photo: "",
  },
  {
    name: "Lintang Ayu Habsari",
    role: "member",
    description: "Basket Ball Women",
    photo: "",
  },
  {
    name: "Lisa Putri Amanda",
    role: "member",
    description: "Futsal Women",
    photo: "",
  },
  {
    name: "Luthfi Indrawan",
    role: "MOST HANDSOME",
    description: "KING",
    photo: "",
  },
  {
    name: "Maisyah Sahla Dasuqi",
    role: "member",
    description: "Shy Girl",
    photo: "",
  },
  {
    name: "Muhammad Danni Zaidan",
    role: "member",
    description: "Cool Boy",
    photo: "",
  },
  {
    name: "Muhammad Narendra Azhar",
    role: "member",
    description: "Random",
    photo: "",
  },
  {
    name: "Mutiara Syifa",
    role: "Secretary",
    description: "",
    photo: "",
  },
  {
    name: "Nada Savaira Rizqin",
    role: "member",
    description: "She doesn't like rice, it's strange indeed",
    photo: "",
  },
  {
    name: "Nasril Ilham",
    role: "member",
    description: "I hate nasril",
    photo: "",
  },
  {
    name: "Nurisya Junita",
    role: "member",
    description: "Road To Japan",
    photo: "",
  },
  {
    name: "Partogu Adelino Situmorang",
    role: "member",
    description: "Basis Boy",
    photo: "",
  },
  {
    name: "Raggil Fitriyani",
    role: "member",
    description: "",
    photo: "",
  },
  {
    name: "Rakha Badi Saputra",
    role: "member",
    description: "Barudak bandung",
    photo: "",
  },
  {
    name: "Ramdhani Faturrahman",
    role: "Leader",
    description: "Liverpool fans",
    photo: "",
  },
  {
    name: "Rayhan Saifan Nur",
    role: "member",
    description: "Aceh pride",
    photo: "",
  },
  {
    name: "Rifqi Imam Fukaha I'zaz",
    role: "member",
    description: "Efootball lovers",
    photo: "",
  },
  {
    name: "Sabar Daniel Panggabean",
    role: "member",
    description: "Lele simulator",
    photo: "",
  },
  {
    name: "Sera Hermawan",
    role: "member",
    description: "",
    photo: "",
  },
  {
    name: "Sylviani Anggraeni",
    role: "Secretary",
    description: "Kids",
    photo: "",
  },
  {
    name: "Tegar Firdaus Ramadhan",
    role: "member",
    description: "",
    photo: "",
  },
  {
    name: "Tyas Nurfajriah",
    role: "member",
    description: "Kaka paskib",
    photo: "",
  },
  {
    name: "Yaqdhan Farras Abrisam",
    role: "Treasurer",
    description: "ex pesantren",
    photo: "",
  },
  {
    name: "Yudha Rasendriya",
    role: "member",
    description: "",
    photo: "",
  },
  {
    name: "Yudhi Rasendriya",
    role: "member",
    description: "",
    photo: "",
  },
  {
    name: "Zahratusita",
    role: "member",
    description: "",
    photo: "",
  },
];

// =====================
// RENDER MEMBERS
// =====================
const grid = document.getElementById("membersGrid");

const searchInput = document.getElementById("searchInput");

let activeRole = "all";

searchInput.addEventListener("input", () => {
  renderMembers(activeRole, searchInput.value);
});

function renderMembers(roleFilter = "all", searchQuery = "") {
  grid.innerHTML = "";

  const filtered = members.filter((member) => {
    const matchRole = roleFilter === "all" || member.role === roleFilter;

    const matchName = member.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchRole && matchName;
  });

  filtered.forEach((member) => {
    const card = document.createElement("div");

    card.className = `
      group rounded-3xl bg-white/5 border border-white/10
      p-4 backdrop-blur-xl transition
      hover:bg-white/10 hover:scale-[1.03]
    `;

    card.innerHTML = `
      <div class="flex flex-col items-center text-center gap-3">

        <!-- AVATAR -->
        <div class="h-20 w-20 rounded-full overflow-hidden
                    bg-gradient-to-br from-cyan-400/40 to-blue-500/40
                    flex items-center justify-center text-xl font-semibold">
          ${
            member.photo
              ? `<img src="${member.photo}"
                       alt="${member.name}"
                       class="w-full h-full object-cover">`
              : member.name[0]
          }
        </div>

        <div>
          <p class="font-medium">${member.name}</p>
          <p class="text-sm text-white/60">
            ${member.description}
          </p>
        </div>

        ${
          member.role !== "member"
            ? `<span class="text-xs px-3 py-1 rounded-full
                     bg-cyan-400/20 text-cyan-300">
                ${member.role.toUpperCase()}
              </span>`
            : ""
        }
      </div>
    `;

    grid.appendChild(card);
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <p class="col-span-full text-center text-white/40">
        No members found
      </p>
    `;
  }
}

renderMembers();

// =====================
// FILTER HANDLER
// =====================
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((btn) => {
  btn.className = `
    filter-btn px-4 py-2 rounded-full border border-white/10
    text-sm text-white/70 transition
    hover:bg-white/10
  `;

  btn.addEventListener("click", () => {
    buttons.forEach((b) =>
      b.classList.remove("bg-cyan-400/20", "text-cyan-300")
    );

    btn.classList.add("bg-cyan-400/20", "text-cyan-300");

    renderMembers(btn.dataset.role);
  });
});
