// =====================
// GALLERY DATA
// =====================
const galleryData = [
  {
    src: "../../public/images/gallery/basketball.jpeg",
    category: "activity",
  },
  {
    src: "../../public/images/gallery/champion.jpeg",
    category: "event",
  },
  {
    src: "../../public/images/gallery/edufair.jpeg",
    category: "event",
  },
  {
    src: "../../public/images/gallery/girls.jpeg",
    category: "event",
  },
  {
    src: "../../public/images/gallery/kmt.jpeg",
    category: "activity",
  },
  {
    src: "../../public/images/gallery/losedek.jpeg",
    category: "activity",
  },
];

// =====================
// STATE
// =====================
let activeCategory = "all";

// =====================
// ELEMENTS
// =====================
const grid = document.getElementById("galleryGrid");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

// =====================
// RENDER
// =====================
function renderGallery(category = "all") {
  grid.innerHTML = "";

  const filtered =
    category === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === category);

  filtered.forEach((item) => {
    const card = document.createElement("div");

    card.className = `
      group relative overflow-hidden rounded-2xl
      bg-white/5 border border-white/10
      cursor-pointer
    `;

    card.innerHTML = `
  <div class="w-full aspect-[4/3] flex items-center justify-center bg-black/20">
    <img
      src="${item.src}"
      class="max-w-full max-h-full object-contain transition duration-300
             group-hover:scale-105"
    />
  </div>

  <div
    class="absolute inset-0 bg-black/30 opacity-0
           group-hover:opacity-100 transition"
  ></div>
`;

    card.addEventListener("click", () => {
      modalImage.src = item.src;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });

    grid.appendChild(card);
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <p class="col-span-full text-center text-white/40">
        No images found
      </p>
    `;
  }
}

renderGallery();

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
    activeCategory = btn.dataset.category;

    buttons.forEach((b) =>
      b.classList.remove("bg-cyan-400/20", "text-cyan-300")
    );

    btn.classList.add("bg-cyan-400/20", "text-cyan-300");

    renderGallery(activeCategory);
  });
});

// =====================
// MODAL CLOSE
// =====================
modal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});
