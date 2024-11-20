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

let currentUnit = unit.value;

document.addEventListener("DOMContentLoaded", () => {
  unit.selectedIndex = 0;
  setCurrentUnit(unit.value);
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
  setCurrentUnit(unit.value);
  changeMetricUnit();
});

function setCurrentUnit(value) {
  currentUnit = value;
  getCurrentUnit();
}

export function getCurrentUnit() {
  console.log(`Current metric unit being used: ${currentUnit}`);
  return currentUnit;
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
