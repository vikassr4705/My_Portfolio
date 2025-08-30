// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;

function setTheme(theme) {
    htmlTag.setAttribute('data-theme', theme);
    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem('theme', theme);
}
toggleBtn.addEventListener("click", () => {
    const newTheme = htmlTag.getAttribute('data-theme') === "light" ? "dark" : "light";
    setTheme(newTheme);
});

// Initial theme
const savedTheme = localStorage.getItem('theme') || "light";
setTheme(savedTheme);

// Simple fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
function showFaders() {
    faders.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', showFaders);
window.addEventListener('DOMContentLoaded', showFaders);