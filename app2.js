"use strict";
let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
let allLocations = [];

function Location(name, min, max, AvgCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.AvgCookie = AvgCookie;
  this.arrayCustomer = [];
  this.sum = 0;
  allLocations.push(this);
}

let Seattle = new Location("Seattle", 23, 65, 6.3);
let Tokyo = new Location("Tokyo", 3, 24, 1.2);
let Dubai = new Location("Dubai", 11, 38, 3.7);
let Paris = new Location("Paris", 20, 38, 2.3);
let Lima = new Location("Lima", 2, 16, 4.6);

Location.prototype.customersPerHour = function () {
  for (let index = 0; index < hours.length; index++) {
    this.arrayCustomer.push(getRandomIntInclusive(this.min, this.max));
  }
};

for (let i = 0; i < allLocations.length; i++) {
  allLocations[i].customersPerHour();
}

console.log(allLocations);

let parents = document.getElementById("parents");
let table = document.createElement("table");
parents.appendChild(table);

let tr = document.createElement("tr");
table.appendChild(tr);
let th = document.createElement("th");
tr.appendChild(th);
th.textContent = "cookiesPerHours";
for (let index = 0; index < hours.length; index++) {
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = hours[index];
}
let tr2 = document.createElement("tr2");
table.appendChild(tr2);

for (let index = 0; index < hours.length; index++) {
  let th2 = document.createElement("th2");
  tr2.appendChild(th2);
  Location.sum = Math.floor(Location.arrayCustomer[index] * Location.AvgCookie);
  th2.textContent = `${Location.sum}cookies`;
}
