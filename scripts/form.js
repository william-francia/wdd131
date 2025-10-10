const currentYear = new Date().getFullYear();
const currentYearElem = document.getElementById("currentyear");
if (currentYearElem) currentYearElem.textContent = currentYear;

const lastModified = document.lastModified;
const lastModifiedElem = document.getElementById("lastModified");
if (lastModifiedElem) lastModifiedElem.textContent = `Last Modified: ${lastModified}`;



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
]

// Poblar el select de productos
const productSelect = document.getElementById("productName");
if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Contador de reviews usando localStorage
function updateReviewCounter() {
  let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);

  // Mostrar el contador en el HTML si existe el elemento
  const reviewCountDisplay = document.getElementById("reviewCountDisplay");
  if (reviewCountDisplay) {
    reviewCountDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
  }
}

// Detectar envío de formulario y actualizar el contador
const reviewForm = document.querySelector("form");
if (reviewForm) {
  reviewForm.addEventListener("submit", function (e) {
    updateReviewCounter();
    // El contador se actualiza antes de enviar el formulario
    // Si usas preventDefault aquí, recuerda procesar el formulario manualmente
  });
}

// Mostrar el contador si ya existe en la página (por ejemplo, tras redirección)
const reviewCountDisplay = document.getElementById("reviewCountDisplay");
if (reviewCountDisplay) {
  const reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
  reviewCountDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
}