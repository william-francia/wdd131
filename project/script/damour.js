const currentYear = new Date().getFullYear();
const currentYearElem = document.getElementById("currentyear");
if (currentYearElem) currentYearElem.textContent = currentYear;

const lastModified = document.lastModified;
const lastModifiedElem = document.getElementById("lastModified");
if (lastModifiedElem) lastModifiedElem.textContent = `Last Modified: ${lastModified}`;



// Menu responsive
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

if (abrir && nav) {
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });
}
if (cerrar && nav) {
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
}



// Hacer la imagen de la boda lazy loading
const weddingImg = document.getElementById("weddingcake");
if (weddingImg) {
    weddingImg.setAttribute("loading", "lazy");
}