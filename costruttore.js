class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confronto(user2) {
    if (this.age > user2.age) {
      console.log(this.firstName + " " + this.lastName + " è più anziano");
    } else if (this.age === user2.age) {
      console.log("hanno la stessa età");
    } else {
      console.log(user2.firstName + " " + user2.lastName + " è più anziano");
    }
  }
}

const marioRossi = new User("mario", "Rossi", 23, "italia");
const luigiVerdi = new User("luigi", "Verdi", 52, "germania");
const warioGialli = new User("wario", "gialli", 37, "olanda");
const waluigiViola = new User("waluigi", "viola", 19, "russia");
// console.log(marioRossi);
// marioRossi.confronto(luigiVerdi);

const ul = document.querySelector("main ul");
const campiDaInserire = document.querySelectorAll("header input");
const idDaInserire = document.querySelectorAll("main form input");
let numeroAnimali = 0;
let animali = [];
let unId = document.querySelector(".primoId");
let dueId = document.querySelector(".secondId");

unId.textContent = idDaInserire[0].value;
idDaInserire[0].addEventListener("input", (event) => {
  unId.textContent = event.target.value;
});
dueId.textContent = idDaInserire[1].value;
idDaInserire[1].addEventListener("input", (event) => {
  dueId.textContent = event.target.value;
});

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
    this.id = numeroAnimali;
  }
  stessoPadrone(pet2) {
    if (this.ownerName.toLowerCase() === pet2.ownerName.toLowerCase()) {
      console.log("true");
      return true;
    }
  }
}
const creaAnimale = (e) => {
  e.preventDefault();
  let petName = campiDaInserire[0].value;
  let ownerName = campiDaInserire[1].value;
  let species = campiDaInserire[2].value;
  let breed = campiDaInserire[3].value;
  let id = numeroAnimali;
  let pet = new Pet(petName, ownerName, species, breed, id);
  console.log("creato", pet);
  animali.push(pet);
  let li = document.createElement("li");
  li.innerText = `il mio nome è ${petName} , appaertengo a ${ownerName} sono un/una ${species} di razza ${breed} my ID : ${id}`;
  ul.appendChild(li);
  numeroAnimali++;
};

const confrontaPadroni = (e) => {
  e.preventDefault();
  if (idDaInserire[0].value !== idDaInserire[1].value) {
    if (
      animali[idDaInserire[0].value].ownerName.toLowerCase() === animali[idDaInserire[1].value].ownerName.toLowerCase()
    ) {
      console.log("stesso padrone");
    } else {
      console.log("non è stesso padrone");
    }
  } else if (idDaInserire[0].value === idDaInserire[1].value) {
    console.log("gli ID selezionati sono identici");
  } else {
    console.log("gli ID selezionati sono inesistenti o errati");
  }
};
