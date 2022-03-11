const cityId = "2347283"
const webApiKey = "78298f0be9d2981ef18b16cdbdb8e086"

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${webApiKey}`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(1);
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });