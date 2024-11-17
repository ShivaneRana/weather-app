import "./style.css";

const searchName = document.querySelector(".searchName");
const searchButton = document.querySelector(".searchButton")
const location = document.querySelector(".location");
const currentDate = document.querySelector(".currentDate");
const currentDay = document.querySelector(".currentDay");
const temperature = document.querySelector(".temperature");
const image = document.querySelector(".image");
const unit = document.querySelector(".unit");


searchName.addEventListener("input",() => {

})

searchButton.addEventListener("click",() => {
    console.log(searchName.value);
})

unit.addEventListener("input",() => {
    console.log(unit.value)
})