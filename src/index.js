function showTimeZones() {
  let timeZones = [
    { city: "perth", country: "australia", timezone: "Australia/Perth" },
    { city: "seoul", country: "south korea", timezone: "Asia/Seoul" },
    { city: "tokyo", country: "japan", timezone: "Asia/Tokyo" },
    { city: "london", country: "england", timezone: "Europe/London" },
  ];

  let citiesElement = document.querySelector("#cities");
  let citiesHTML = `<div>`;

  timeZones.forEach(function (city, index) {
    let cityName = timeZones[index].city;
    let countryName = timeZones[index].country;
    let cityTimeZone = timeZones[index].timezone;
    let cityTime = moment().tz(`${cityTimeZone}`);
    let formattedCityTime = cityTime.format("h:mm:ss [<small>]A[</small>]");
    let formattedCityDate = cityTime.format("ddd, MMM D, YYYY").toLowerCase();

    citiesHTML =
      citiesHTML +
      `<div class="row align-items-center timezone-wrapper">
      <div class="col-6">
              <div class="location">
                <span class="city">${cityName}</span>, ${countryName}
              </div>
              <div class="date">${formattedCityDate}</div>
            </div>
            <div class="col-6 time">${formattedCityTime}</div></div>`;
  });

  citiesHTML = citiesHTML + `</div>`;
  citiesElement.innerHTML = citiesHTML;
}

showTimeZones();
let refreshTime = setInterval(showTimeZones, 1000);

function updateCity(event) {
  if (event.target.value !== "") {
    clearInterval(refreshTime);
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1].toLowerCase();
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="row align-items-center timezone-wrapper">
            <div class="col-6">
              <div class="location">
                <span class="city">${cityName}</span>
              </div>
              <div class="date">${cityTime
                .format("ddd, MMM D, YYYY")
                .toLowerCase()}</div>
            </div>
            <div class="col-6 time">${cityTime.format(
              "h:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>`;
  }
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
