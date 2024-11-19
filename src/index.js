import "./style.css";
import { apiData } from "./modules/api";

const searchName = document.querySelector(".searchName");
const searchButton = document.querySelector(".searchButton");
const image = document.querySelector(".image");
const unit = document.querySelector(".unit");

let currentUnit = unit.value;

document.addEventListener("DOMContentLoaded", () => {
  unit.selectedIndex = 0;
  setCurrentUnit(unit.value);
});

searchName.addEventListener("input", () => {});

document.addEventListener("keydown",(e) => {
  if(e.key === "Enter"){
    searchButton.click();
  }
})

searchButton.addEventListener("click", () => {
  apiData.getData(searchName.value);
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
