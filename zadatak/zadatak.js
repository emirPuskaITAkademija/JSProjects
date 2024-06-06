function prikaziMore() {
  //var -> let ES6
  let img = document.getElementById("slika");
  img.src = "more.jpg";
  img.style.display = "block";
}

function prikaziPlaninu() {
  /*let img = document.getElementById("slika");
  img.style.display = "block";
  img.src = "planina.jpg";
  */
  let slikaElement = document.getElementById("slika");
  slikaElement.setAttribute("style", "display:block");
  slikaElement.setAttribute("src", "planina.jpg");
}

function sakrij() {
  let img = document.getElementById("slika");
  img.style.display = "none";
}

//var -> let
//1. blok opseg vidljivosti
//2. deklasirane moraju biti varijable
//3. ne mogu biti redeklarisane unutar istog opsega

function printaj() {
  console.log("Printaj..");
}
printaj();

function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(23, 34);
console.log(result);

let x = 16 + 14 + "Volvo";
console.log(x);

let y = "Volvo" + 16 + 14;
console.log(y);
console.log(typeof y);

let ime;
console.log(typeof ime); //Undefined
ime = 23;
console.log(typeof ime); //Number
ime = "Ismet";
console.log(typeof ime); //String
ime = {
  ime: "Ismet",
  nadimak: "Ile",
};
console.log(typeof ime);//Object


class Person{
    constructor(firstName, lastName, birthday){
        this.firstName = firstName;
        this.lastName = lastName; 
        this.birthday = birthday;
    }

    age(){
        
    }
}

const person = new Person("Armin", "Kovačević", new Date(1999, 1, 1));
console.log(person.birthday);