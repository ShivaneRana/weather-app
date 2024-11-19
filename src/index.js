import "./style.css";
import { apiData } from "./modules/api";
import { render } from "./modules/dom";

const searchName = document.querySelector(".searchName");
const searchButton = document.querySelector(".searchButton");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const todayButton = document.querySelector(".todayButton");
const tomorrowButton = document.querySelector(".tomorrowButton");
const unit = document.querySelector(".unit");

let currentUnit = unit.value;

document.addEventListener("DOMContentLoaded", () => {
  unit.selectedIndex = 0;
  setCurrentUnit(unit.value);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});

todayButton.addEventListener("click", () => {
  console.log("Today button was clicked");
  apiData.getData(searchName.value, 0);
});

tomorrowButton.addEventListener("click", () => {
  console.log("Tomorrow button was clicked");
  apiData.getData(searchName.value, 1);
});

searchButton.addEventListener("click", () => {
  apiData.getData(searchName.value, 0);
});

unit.addEventListener("input", () => {
  setCurrentUnit(unit.value);
});

function setCurrentUnit(value) {
  currentUnit = value;
  getCurrentUnit();
}

function getCurrentUnit() {
  console.log(`Current metric unit being used: ${currentUnit}`);
}
