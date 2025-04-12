const text = "Every successful brand has an online presence. Build yours today!";
const typedText = document.getElementById("typed-text");
let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
window.onload = type;

// Website types + localStorage
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("website-type");
  if (select) {
    const options = [
      { id: "portfolio", name: "Portfolio Website" },
      { id: "ecommerce", name: "E-commerce Website" },
      { id: "blog", name: "Blog" },
      { id: "business", name: "Business" },
      { id: "landing", name: "Landing Page" }
    ];
    options.forEach(opt => {
      const option = document.createElement("option");
      option.value = opt.id;
      option.textContent = opt.name;
      select.appendChild(option);
    });

    // Save selected option
    select.addEventListener("change", () => {
      localStorage.setItem("preferredWebsiteType", select.value);
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const portfolioData = [
    {
      title: "LDS Temples",
      image: "images/church.jpg",
      alt: "Church image",
      link: "https://lawson-mutsa.github.io/wdd131/filtered-temples.html"
    },
    {
      title: "Zimbabwe Info",
      image: "images/zimbabwe.jpg",
      alt: "Elephants in Zimbabwe",
      link: "https://lawson-mutsa.github.io/wdd131/place.html"
    },
    {
      title: "Developer Resources",
      image: "images/web-developer.jpg",
      alt: "Developer Resources Preview",
      link: "https://lawson-mutsa.github.io/Developer-Resources/index.html"
    }
  ];

  const container = document.getElementById("portfolio-container");

  if (container) {
    portfolioData.forEach(project => {
      const item = document.createElement("div");
      item.className = "grid-item";
      item.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.alt}" loading="lazy">
        <p><a href="${project.link}" target="_blank">🌐 View Website</a></p>
      `;
      container.appendChild(item);
    });
  }
});
