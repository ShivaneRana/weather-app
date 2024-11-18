import "./style.css";
import { apiData } from "./modules/api";

const searchName = document.querySelector(".searchName");
const searchButton = document.querySelector(".searchButton");
const location = document.querySelector(".location");
const currentDate = document.querySelector(".currentDate");
const currentDay = document.querySelector(".currentDay");
const temperature = document.querySelector(".temperature");
const image = document.querySelector(".image");
const unit = document.querySelector(".unit");

let currentUnit = unit.value;

document.addEventListener("DOMContentLoaded", () => {
  unit.selectedIndex = 0;
  console.log(`Current Unit ${currentUnit}`);
});

searchName.addEventListener("input", () => {});

searchButton.addEventListener("click", () => {
    apiData.getData(searchName.value);
});

unit.addEventListener("input", () => {
  currentUnit = unit.value;
  console.log(`Current Unit ${currentUnit}`);
});
