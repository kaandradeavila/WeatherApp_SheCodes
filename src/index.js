//Feature 1: display the current date and time using JavaScript:
//Tuesday 16:00

let now = new Date();

let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");

let timeDisplay = document.querySelector("#current-day-time");
timeDisplay.innerHTML = `${days[day]} ${hours}:${minutes}`;

//Feature 2: Add a search engine, when searching for a city (i.e. Paris),
//display the city name on the page after the user submits the form.

function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-search-input");

  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit", searchCity);

//Feature 3: Display a fake temperature (i.e 17) in Celsius and
//add a link to convert it to Fahrenheit. When clicking on it,
//it should convert the temperature to Fahrenheit. When clicking on Celsius,
//it should convert it back to Celsius.

function changeTempUnit() {
  let tempUnit = document.querySelector("#temp-unit");
  let tempDisplay = document.querySelector("#temp-display");
  let unitChange = document.querySelector("#unit-change");

  if (tempUnit.innerHTML === "°F") {
    tempDisplay.innerHTML = "30";
    tempUnit.innerHTML = "°C";
    unitChange.innerHTML = "°F";
  } else {
    tempDisplay.innerHTML = "85";
    tempUnit.innerHTML = "°F";
    unitChange.innerHTML = "°C";
  }
}

let unitChange = document.querySelector("#unit-change");
unitChange.addEventListener("click", changeTempUnit);
