console.log("Portfolio script loaded successfully.");

// 1. Mobile Hamburger Menu Toggle
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navLinks = document.querySelector("#nav-links");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

// Stretch goal: close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});

// 2. Dynamic Projects Array
const projects = [
  {
    title: "Daily House Expense Tracker Pro",
    description:
      "An installable Progressive Web App for tracking daily household expenses with real-time cloud sync and automated nightly email summaries.",
    tags: ["Firebase", "JavaScript"],
    link: "https://daily-house-expense-trackerpro.firebaseapp.com",
    linkText: "View Live App →"
  },
  {
    title: "SJTC_LOG-2026 System Logger",
    description:
      "An automated device usage logging dashboard and scheduled monthly PDF/PNG email reporting pipeline built with Google Apps Script and Sheets.",
    tags: ["Automation", "JavaScript"],
    link: "https://github.com/amos574",
    linkText: "View on GitHub →"
  },
  {
    title: "Web Audio Mixer & FX Controller",
    description:
      "A browser-based soundcard control and live audio routing interface engineered for low-latency OBS Studio event streaming workflows.",
    tags: ["JavaScript"],
    link: "https://github.com/amos574",
    linkText: "View on GitHub →"
  }
];

const projectsContainer = document.querySelector("#projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// 3. Render Project Cards
function renderProjects(category = "All") {
  const filtered =
    category === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(category));

  projectsContainer.innerHTML = filtered
    .map(
      (project) => `
      <article class="project-card">
        <div class="card-tags">
          ${project.tags.map((tag) => `<span class="tag-pill">${tag}</span>`).join("")}
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener" class="card-link">
          ${project.linkText}
        </a>
      </article>
    `
    )
    .join("");
}

// 4. Filter Button Listeners
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// Initial Render
renderProjects();