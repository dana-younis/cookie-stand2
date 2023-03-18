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
let allLocations = [];
function Location(min, max, AvgCookie, name) {
  (this.name = name), (this.min = min);
  this.max = max;
  this.AvgCookie = AvgCookie;
  this.customersPerHourArray = [];
  this.sum = 0;
  allLocations.push(this);
}
let Seattle = new Location(23, 65, 6.3, "Seattle");
let Tokyo = new Location(3, 24, 1.2, "Tokyo");
let Dubai = new Location(11, 38, 3.7, "Dubai");
let Paris = new Location(20, 38, 2.3, "Paris");
let Lima = new Location(2, 16, 4.6, "Lima");
console.log(allLocations);

let parents = document.getElementById("parents");
let myTable = document.createElement("table");
parents.appendChild(myTable);

let firstRow = document.createElement("tr");
myTable.appendChild(firstRow);

let firstHeader = document.createElement("th");
firstRow.appendChild(firstHeader);
firstHeader.textContent = "..........";

for (let index = 0; index < hours.length; index++) {
  let firstHeader = document.createElement("th");
  firstRow.appendChild(firstHeader);
  firstHeader.textContent = hours[index];
}
let firstHeader1 = document.createElement("th");
firstRow.appendChild(firstHeader1);
firstHeader1.textContent = "Daily Location Total";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
Location.prototype.customersPerHour = function () {
  for (let index = 0; index < hours.length; index++) {
    this.customersPerHourArray.push(
      Math.floor(getRandomIntInclusive(this.min, this.max) * this.AvgCookie)
    );
    this.sum += this.customersPerHourArray[index];
  }
  let secondRow = document.createElement("tr");
  myTable.appendChild(secondRow);
  let secondHeader = document.createElement("td");
  secondRow.appendChild(secondHeader);
  secondHeader.textContent = this.name;

  for (let index = 0; index < hours.length; index++) {
    let thHeader = document.createElement("td");
    secondRow.appendChild(thHeader);
    thHeader.textContent = this.customersPerHourArray[index];
  }
  let fHeader = document.createElement("td");
  secondRow.appendChild(fHeader);
  fHeader.textContent = this.sum;
};




for (let index = 0; index < allLocations.length; index++) {
  allLocations[index].customersPerHour();
}
