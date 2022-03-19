// Get input values from DOM

// const temp = parseFloat(document.querySelector("#temp").textContent);
// const windspeed = parseFloat(document.querySelector("#windspeed").textContent);
// const windchillEl = document.querySelector("#windchill");

// // Compute Wind Chill
// let windchill;

// if (temp <= 50.0 && windspeed > 3.0) {
//     //input matches the condition for computing wind chill
//     windchill = Math.round(
//         35.74 +
//         0.6215 * temp -
//         35.75 * Math.pow(windspeed, 0.16) +
//         0.4275 * temp * Math.pow(windspeed, 0.16)
//     );
//     windchillEl.textContent = windchill + "\u00B0F";
// } else {
//     windchill = "N/A";
//     windchillEl.textContent = windchill;
// }

const cityId = "2347283"
const webApiKey = "78298f0be9d2981ef18b16cdbdb8e086"

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${webApiKey}`;


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const t = ((jsObject.main.temp - 273.15) * 1.8000 + 32.00).toFixed(1);
        document.querySelector('#temp').textContent = t;

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        const windsp = jsObject.wind.speed;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('#desc').textContent = desc;
        document.querySelector('#speed').textContent = windsp;


        if (t <= 50 && windsp > 3) {
            const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(windsp, 0.16) + 0.4275 * t * Math.pow(windsp, 0.16)
            document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
        } else {
            document.querySelector("#windchill").innerHTML = "N/A"
        }
    });