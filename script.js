const cards = document.querySelectorAll(".project-card");
const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDescription = document.getElementById("lightbox-description");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    lightboxImg.src = card.dataset.image;
    lightboxTitle.innerHTML = card.dataset.title;
    lightboxDescription.innerHTML = card.dataset.description;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});