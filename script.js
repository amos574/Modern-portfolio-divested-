console.log("Portfolio script loaded successfully.");

// 1. Mobile Hamburger Menu Toggle
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navLinks = document.querySelector("#nav-links");

if (hamburgerBtn && navLinks) {
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
}

// 2. Dynamic Projects Array (Real Projects Built)
const projects = [
  {
    title: "Daily House Expense Tracker Pro",
    description:
      "An installable Progressive Web App (PWA) hosted on Firebase for tracking daily household expenses with real-time cloud sync.",
    tags: ["Firebase", "JavaScript"],
    link: "https://daily-house-expense-trackerpro.firebaseapp.com",
    linkText: "View Live App →"
  },
  {
    title: "System Usage Logger (In Progress)",
    description:
      "Currently rebuilding a full-stack system telemetry and automated laptop usage reporting tool using Firebase and Google Apps Script.",
    tags: ["Automation", "Firebase"],
    link: "#projects",
    linkText: "Currently in Development"
  },
  {
    title: "Expense Tracker & Reporting Pipeline (Part 2)",
    description:
      "A lightweight expense intake and automated spreadsheet reporting workflow built with Google Forms, Google Sheets, and Google Apps Script.",
    tags: ["Automation"],
    link: "https://github.com/amos574",
    linkText: "View on GitHub →"
  },
  {
    title: "Browser Audio Mixing Console",
    description:
      "A custom browser-based audio routing and soundcard mixing interface built for live event streaming setups.",
    tags: ["JavaScript"],
    link: "https://github.com/amos574",
    linkText: "View on GitHub →"
  },
  {
    title: "Live Broadcast Multiview Switcher (In Progress)",
    description:
      "A web-based live broadcast switcher interface with multiview camera monitoring built for OBS Studio and vMix streaming workflows.",
    tags: ["JavaScript"],
    link: "#projects",
    linkText: "Currently in Development"
  },
  {
    title: "Modern Interactive Portfolio & DevStudio",
    description:
      "Responsive personal developer portfolio built with semantic HTML, CSS variables, mobile-first media queries, and dynamic JavaScript filtering.",
    tags: ["JavaScript"],
    link: "https://github.com/amos574/Modern-portfolio-divested-",
    linkText: "View Repository →"
  }
];

const projectsContainer = document.querySelector("#projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// 3. Render Project Cards
function renderProjects(category = "All") {
  if (!projectsContainer) return;

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
        <a href="${project.link}" ${project.link.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} class="card-link">
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