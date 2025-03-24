// Set year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill Calculation Function
function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) ? 
        (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) 
        : "N/A";
}

// Static values
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

// Calculate and display wind chill
document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
