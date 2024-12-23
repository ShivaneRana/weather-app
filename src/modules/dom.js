import { changeMetricUnit, convertToCelcius, getCurrentUnit } from "..";
import { icons } from "./icon.js";

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
const main = document.querySelector("main");

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

    description.textContent = obj.description;
    currentDate.textContent = `${day}-${months[month - 1]}-${year}`; //year-month-date

    // assign value of current time
    const currentDateTime = new Date(obj.time);
    const hour = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const today = currentDateTime.getDay();

    const dayList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let AMPM = "AM";
    if (hour >= 12) {
      AMPM = "PM";
    }

    currentDay.textContent = `${dayList[today]}, ${hour}:${minutes} ${AMPM}`;

    location.textContent = obj.location;

    if (getCurrentUnit() === "°F") {
      temperature.textContent = obj.temperature;
      tempmax.textContent = obj.tempmax;
      tempmin.textContent = obj.tempmin;
    } else if (getCurrentUnit() === "°C") {
      temperature.textContent = convertToCelcius(obj.temperature);
      tempmax.textContent = convertToCelcius(obj.tempmax);
      tempmin.textContent = convertToCelcius(obj.tempmin);
    } else {
      console.log(`unit current value is ${getCurrentUnit()}`);
    }

    wind.textContent = obj.wind + " km/h";
    pressure.textContent = obj.pressure + " mb";
    humidity.textContent = obj.humidity + " %";
    uvindex.textContent = obj.uvindex;

    // get hour and minutes of sunset

    const time1 = `${obj.sunrise}`;
    const time2 = `${obj.sunset}`;

    let [hour1, minute1] = time1.split(":");
    let [hour2, minute2] = time2.split(":");
    sunrise.textContent = `${hour1.padStart(2, "0")}:${minute1} AM`;
    sunset.textContent = `${(hour2 - 12).toString().padStart(2, "0")}:${minute2} PM`;

    main.style.opacity = 1;
    main.style.pointerEvents = "auto";
    changeMetricUnit();

    icon.style.backgroundImage = `url(${icons[obj.icon]})`;
    console.log(icons[obj.icon]);
    console.log(obj.icon);
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

  return { renderError};
})();
