const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const temperature = 7; 
const windSpeed = 6;    

// Windchill formula for Celsius (°C and km/h)
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

// Only calculate windchill if temp <= 10°C and wind speed > 4.8 km/h
let windChillDisplay = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay = `${calculateWindChill(temperature, windSpeed)} °C`;
}

// Show wind chill in the Weather section (always creates/updates the <li>)
const weatherList = document.querySelector('.info-card-weather ul');
if (weatherList) {
    let windChillItem = weatherList.querySelector('li.windchill');
    if (!windChillItem) {
        windChillItem = document.createElement('li');
        windChillItem.className = 'windchill';
        weatherList.appendChild(windChillItem);
    }
    windChillItem.innerHTML = `<strong>Wind chill:</strong> ${windChillDisplay}`;
}