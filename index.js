function klikniNaMene() {
  console.log("Klikno ti BGM na mene");
  console.log("Pozvala se funkcija klikniNaMene()");
  let paragraf = document.getElementById("mojParagraf");
  paragraf.innerHTML = "Nemoj ti meni HAAAA";
  paragraf.style = "font-weight:700";
}

function procesirajKlik() {
  let number1 = prompt("Unesi prvu vrijednost i nek bude broj");
  let number2 = prompt("Unesi drugu vrijednost i nek bude broj");
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  let suma = number1 + number2;
  let resultParagraf = document.getElementById("resultP");
  resultParagraf.innerHTML=suma;
}
