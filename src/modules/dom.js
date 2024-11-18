const location = document.querySelector(".location");
const currentDate = document.querySelector(".currentDate");
const currentDay = document.querySelector(".currentDay");
const description = document.querySelector(".description");
const temperature = document.querySelector(".currentTemp");
const tempmin = document.querySelector(".tempmin");
const tempmax = document.querySelector(".tempmax");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const uvindex = document.querySelector(".uvIndex");
const sunrise = document.querySelector(".sunRise");
const sunset = document.querySelector(".sunSet");
const icon = document.querySelector(".image");

export const render = (function () {
  function displayDay(obj) {
    temperature.textContent = obj.temperature;
    description.textContent = obj.description;
    currentDate.textContent = obj.dateTime;
    currentDay.textContent = obj.time;
    location.textContent = obj.location;
    tempmax.textContent = obj.tempmax;
    tempmin.textContent = obj.tempmin;
    wind.textContent = obj.wind;
    pressure.textContent = obj.pressure;
    humidity.textContent = obj.humidity;
    uvindex.textContent = obj.uvindex;
    sunrise.textContent = obj.sunrise;
    sunset.textContent = obj.sunset;
  }

  return { displayDay };
})();
