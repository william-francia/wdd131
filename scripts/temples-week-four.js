const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

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
        if (!document.head.contains(linkLarge)) {
            document.head.appendChild(linkLarge);
        }
    } else {
        if (document.head.contains(linkLarge)) {
            document.head.removeChild(linkLarge);
        }
    }
}

aplicarEstilosGrandes();

window.addEventListener("resize", aplicarEstilosGrandes);






const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 17800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11",
        area: 8700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 70000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    }
];


function createTempleCard() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ""; 

    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

// Llama a la función cuando la página cargue
createTempleCard();

function createTempleGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ""; // Limpia la galería antes de agregar

    temples.forEach(temple => {
        // Crea el figure
        const figure = document.createElement("figure");

        // Crea la imagen
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `
            <strong>${temple.templeName}</strong><br>
            <span class="label">Location:</span> ${temple.location}<br>
            <span class="label">Dedicated:</span> ${temple.dedicated}<br>
            <span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft
        `;

        figure.appendChild(img);
        figure.appendChild(caption);

        gallery.appendChild(figure);
    });
}

createTempleGallery();

function displayTemples(filteredTemples) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = "";
    filteredTemples.forEach(temple => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";
        const caption = document.createElement("figcaption");
        caption.innerHTML = `
            <strong>${temple.templeName}</strong><br>
            <span class="label">Location:</span> ${temple.location}<br>
            <span class="label">Dedicated:</span> ${temple.dedicated}<br>
            <span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft
        `;
        figure.appendChild(img);
        figure.appendChild(caption);
        gallery.appendChild(figure);
    });
}

function filterOld(e) {
    e.preventDefault();
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900));
}
function filterNew(e) {
    e.preventDefault();
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000));
}
function filterLarge(e) {
    e.preventDefault();
    displayTemples(temples.filter(t => t.area > 90000));
}
function filterSmall(e) {
    e.preventDefault();
    displayTemples(temples.filter(t => t.area < 10000));
}
function showAll(e) {
    if (e) e.preventDefault();
    displayTemples(temples);
}

document.getElementById("home").addEventListener("click", showAll);
document.getElementById("old").addEventListener("click", filterOld);
document.getElementById("new").addEventListener("click", filterNew);
document.getElementById("large").addEventListener("click", filterLarge);
document.getElementById("small").addEventListener("click", filterSmall);

showAll();