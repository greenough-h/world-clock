function updateDateTime() {
  let newYorkDateElement = document.querySelector(".NYcityInfo .date");
  if (newYorkDateElement) {
    let newYorkTimeElement = document.querySelector(".NYcityInfo .time");
    let newYorkDate = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkDate.format("dddd, MMM D YYYY");
    newYorkTimeElement.innerHTML = newYorkDate.format(
      "H:mm:ss [<small>]A[</small>]"
    );

    let londonDateElement = document.querySelector(".londoncityInfo .date");
    let londonTimeElement = document.querySelector(".londoncityInfo .time");
    let londonDate = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonDate.format("dddd, MMM D YYYY");
    londonTimeElement.innerHTML = londonDate.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}

function cityTime(event) {
  let cityTZ = event.target.value;
  let cityName = cityTZ.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTZ);
  let selectedCity = document.querySelector(".cityList");
  selectedCity.innerHTML = `<div class="city">
                    <div>
                        <h2>
                            ${cityName}
                        </h2>
                        <div class="date">${cityDate.format(
                          "dddd, MMM D YYYY"
                        )}</div>
                    </div>
                    <div class="time">${cityDate.format(
                      "H:mm:ss"
                    )} <small>${cityDate.format("A")}</small>
                    </div>
                </div>`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

let citySelectElement = document.querySelector("#citySelect");
citySelectElement.addEventListener("change", cityTime);
