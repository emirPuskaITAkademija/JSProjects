let timeDiv = document.querySelector(".time");
let dateTimeDiv = document.querySelector(".date-time");

function updateSat() {
  //trenutno vrijeme
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  let dayOfWeekNames = [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota",
  ];

  let monthInYearNames = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ];

  minutes = minutes<10 ? "0"+minutes: minutes;
  seconds = seconds<=9 ? "0"+seconds: seconds;
  let periodDana = hours < 12 ? "AM" : "PM";
  timeDiv.innerHTML = hours + ":" + minutes + ":" + seconds + " " + periodDana;
  dateTimeDiv.innerHTML=dayOfWeekNames[day]+", "+ monthInYearNames[month]+" " + date+", "+year;
}


updateSat();
setInterval(updateSat, 1000);