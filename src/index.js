import "./style.css";

const searchName = document.querySelector(".searchName");
const searchButton = document.querySelector(".searchButton")

searchName.addEventListener("input",() => {
    console.log(searchName.value);
})