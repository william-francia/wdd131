

const nav = document.querySelector ("#nav")
const abrir = document.querySelector ("#abrir")
const cerrar = document.querySelector ("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible")
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})


const linkLarge = document.createElement("link");
linkLarge.rel = "stylesheet";
linkLarge.href = "styles/temples-large.css";

function aplicarEstilosGrandes() {
  if (window.innerWidth >= 900) {
    // Si no está ya agregado, lo añadimos
    if (!document.head.contains(linkLarge)) {
      document.head.appendChild(linkLarge);
    }
  } else {
    // Si es pantalla pequeña, quitamos el css de grandes
    if (document.head.contains(linkLarge)) {
      document.head.removeChild(linkLarge);
    }
  }
}

// Ejecutar al cargar la página
aplicarEstilosGrandes();

// Ejecutar cada vez que se cambia el tamaño de la ventana
window.addEventListener("resize", aplicarEstilosGrandes);
