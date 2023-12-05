// create a function to update the time
function updateTime() {
  //california code
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(" .date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = chicagoTime.format("ddd MMMM Do, YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  //stockholm code
  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(" .date");
  let stockholmTimeElement = stockholmElement.querySelector(".time");
  let stockholmTime = moment().tz("Europe/Stockholm");

  stockholmDateElement.innerHTML = stockholmTime.format("ddd MMMM Do, YYYY");
  stockholmTimeElement.innerHTML = stockholmTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
