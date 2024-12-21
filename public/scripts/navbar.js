const toggleButton = document.getElementById("navbar-toggle");
const menu = document.getElementById("navbar-menu");

// Verifica si los elementos fueron seleccionados
if (toggleButton && menu) {
  // Alternar visibilidad con animación
  toggleButton.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      // Si ya está activo, lo oculta con animación inversa
      menu.classList.remove("active");
      setTimeout(() => (menu.style.display = "none"), 300); // Espera a que termine la animación
    } else {
      // Si no está activo, lo muestra con animación
      menu.style.display = "flex";
      setTimeout(() => menu.classList.add("active"), 10); // Activa la clase después de mostrarlo
    }
  });

  // Cierra el menú al hacer clic en un enlace
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      setTimeout(() => (menu.style.display = "none"), 300); // Cierra después de la animación
    });
  });
} else {
  console.error("Navbar elements not found!");
}
