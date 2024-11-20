import { getCurrentUnit } from "..";

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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function displayDay(obj) {
    // creating date object for displaying current date

    const date = new Date(`${obj.dateTime}`);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    temperature.textContent = obj.temperature + getCurrentUnit();
    description.textContent = obj.description;
    currentDate.textContent = `${day}-${months[month - 1]}-${year}`; //year-month-date
    currentDay.textContent = obj.time;
    location.textContent = obj.location;
    tempmax.textContent = obj.tempmax + getCurrentUnit();
    tempmin.textContent = obj.tempmin + getCurrentUnit();
    wind.textContent = obj.wind + " km/h";
    pressure.textContent = obj.pressure + " mb";
    humidity.textContent = obj.humidity + " %";
    uvindex.textContent = obj.uvindex;
    sunrise.textContent = obj.sunrise;
    sunset.textContent = obj.sunset;
    console.log(obj.icon);
    icon.style.backgroundImage = `url("/public/weatherIcon/${obj.icon}.png")`;
  }

  return { displayDay };
})();

export const renderDialog = (function () {
  function renderError(value) {
    const dialog = document.createElement("dialog");
    const wrapper = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = value;

    dialog.classList.add("dia");
    wrapper.classList.add("wrapper");

    wrapper.append(p);
    dialog.append(wrapper);
    document.body.append(dialog);
    dialog.showModal();

    dialog.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        dialog.close();
      }
    });
  }

  return { renderError };
})();
