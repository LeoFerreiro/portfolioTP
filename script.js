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

// Mensaje de confirmación del formulario
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita recargar la página

    // Simulación de envío exitoso
    formMessage.textContent = "✅ Tu mensaje se envió con éxito.";
    formMessage.className = "form-message success";
    formMessage.style.display = "block";

    // Limpiar campos
    form.reset();

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.style.display = "none";
    }, 5000);
});