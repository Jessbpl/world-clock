// create a function to update the time
function updateTime() {
  //chicago code
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(" .date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTime.format("ddd, MMMM Do, YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  //stockholm code
  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(" .date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTime = moment().tz("Europe/Stockholm");

    stockholmDateElement.innerHTML = stockholmTime.format("ddd, MMMM Do, YYYY");
    stockholmTimeElement.innerHTML = stockholmTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  //havana code
  let havanaElement = document.querySelector("#havana");
  if (havanaElement) {
    let havanaDateElement = havanaElement.querySelector(" .date");
    let havanaTimeElement = havanaElement.querySelector(".time");
    let havanaTime = moment().tz("America/Havana");

    havanaDateElement.innerHTML = havanaTime.format("ddd, MMMM Do, YYYY");
    havanaTimeElement.innerHTML = havanaTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("ddd, MMMM Do, YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("ddd, MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        
      </div>
      <a href="index.html" class="reset">Reset</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
