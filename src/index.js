function updateDateTime() {
  let newYorkDateElement = document.querySelector(".NYcityInfo .date");
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

updateDateTime();
setInterval(updateDateTime, 1000);
