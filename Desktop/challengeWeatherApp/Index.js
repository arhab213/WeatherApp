const arrayWeather = [
  { city: "Algiers", weather: 33, icon: '<i class="fa-regular fa-sun"></i>' },
  {
    city: "Annaba",
    weather: 22,
    icon: '<i class="fa-solid fa-cloud-sun-rain"></i>',
  },
  { city: "Oran", weather: 28, icon: '<i class="fa-solid fa-cloud-sun"></i>' },
];
const getWeatherButton = document.getElementById("get-weather");
const locationInput = document.getElementById("location");
const weatherData = document.getElementById("weather-data");

getWeatherButton.addEventListener("click", () => {
  const location = locationInput.value.toLowerCase();
  weatherData.innerHTML;
  const CityCheck = () => {
    arrayWeather.map((e, i) => {
      let { city, weather, icon } = e;
      if (location.toLowerCase() == city.toLowerCase()) {
        weatherData.innerHTML = " ";
        let newDiv = document.createElement("div");
        newDiv.classList.add("DivWeather");
        newDiv.innerHTML = `<div id="city">${city}</div>
        <div id="weatherAndIcon">
        <div id="Weather">${weather} °C</div>
        ${icon}
        </div>
        `;
        weatherData.appendChild(newDiv);
        return;
      }
    });
  };

  CityCheck();
});
