import "./style.css";
import { apiData } from "./modules/api";

const searchName = document.querySelector(".searchName");
const searchButton = document.querySelector(".searchButton");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const todayButton = document.querySelector(".todayButton");
const tomorrowButton = document.querySelector(".tomorrowButton");
const unit = document.querySelector(".unit");
const allUnit = document.querySelectorAll(".metricUnit");
const currentTemp = document.querySelector(".currentTemp");
const temperature = document.querySelector(".currentTemp");
const tempmin = document.querySelector(".tempmin");
const tempmax = document.querySelector(".tempmax");

document.addEventListener("DOMContentLoaded", () => {
  unit.selectedIndex = 0;
  searchName.value = "";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});

todayButton.addEventListener("click", () => {
  console.log("Today button was clicked");
  todayButton.classList.add("buttonSelected");
  tomorrowButton.classList.remove("buttonSelected");
  apiData.getData(searchName.value, 0);
});

tomorrowButton.addEventListener("click", () => {
  console.log("Tomorrow button was clicked");
  todayButton.classList.remove("buttonSelected");
  tomorrowButton.classList.add("buttonSelected");
  apiData.getData(searchName.value, 1);
});

searchButton.addEventListener("click", () => {
  todayButton.click();
});

unit.addEventListener("input", () => {
  changeMetricUnit();
});

export function getCurrentUnit() {
  return unit.value;
}

export function changeMetricUnit() {
  if (
    !(currentTemp.textContent === undefined || currentTemp.textContent === "")
  ) {
    allUnit.forEach((item) => {
      item.textContent = "";
      item.textContent = unit.value;
    });
  }
}

export function convertToCelcius(value) {
  return (((value - 32) * 5) / 9).toFixed(1);
}

export function convertToFahrenheit(value) {
  return ((value * 9) / 5 + 32).toFixed(1);
}
