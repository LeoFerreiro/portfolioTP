// Botón de modo oscuro / claro
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Menú responsive
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Efecto scroll animado para secciones
const secciones = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            obs.unobserve(entrada.target); // Evita volver a animar
        }
    });
}, {
    threshold: 0.2 // 20% visible para activar animación
});

secciones.forEach(seccion => {
    observer.observe(seccion);
});