function updateTime() {
  //Perth
  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");

  let perthTime = moment().tz("Australia/Perth");

  perthDateElement.innerHTML = perthTime
    .format("ddd, MMM D, YYYY")
    .toLowerCase();
  perthTimeElement.innerHTML = perthTime.format("h:mm:ss [<small>]A[</small>]");

  //Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");

  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime
    .format("ddd, MMM D, YYYY")
    .toLowerCase();
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime
    .format("ddd, MMM D, YYYY")
    .toLowerCase();
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime
    .format("ddd, MMM D, YYYY")
    .toLowerCase();
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
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

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
