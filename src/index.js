import "./styles.css";
import { displayData } from "./displayData.js";

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    displayData(location);
});
