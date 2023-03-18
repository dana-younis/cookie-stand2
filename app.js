let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm:",
  "2pm:",
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
let parents = document.getElementById("parents");

let Seattle = {
  total: 0,
  min: 23,
  max: 65,
  AvgCookie: 6.3,
  arrayCustomer: [],
  sum: 0,
  customersPerHour: function () {
    for (let index = 0; index < hours.length; index++) {
      this.arrayCustomer.push(getRandomIntInclusive(this.min, this.max));
    }
    let place = document.createElement("h3");
    parents.appendChild(place);
    place.textContent = "Seattle";
  },

  simulatedAmountsOfCookies: function () {
    let parents = document.getElementById("parents");
    let child = document.createElement("ul");
    parents.appendChild(child);

    for (let index = 0; index < hours.length; index++) {
      let li = document.createElement("li");
      child.appendChild(li);
      sum = Math.floor(this.arrayCustomer[index] * this.AvgCookie);
      li.textContent = `${hours[index]}:${sum}cookies`;
      this.total = this.total + sum;
    }
    let totalCookie = document.createElement("p");
    parents.appendChild(totalCookie);
    totalCookie.textContent = `total:${this.total}`;
  },
};

Seattle.customersPerHour();
Seattle.simulatedAmountsOfCookies();

let Tokyo = {
  total: 0,
  min: 3,
  max: 24,
  AvgCookie: 1.2,
  arrayCustomer: [],
  sum: 0,
  customersPerHour: function () {
    for (let index = 0; index < hours.length; index++) {
      this.arrayCustomer.push(getRandomIntInclusive(this.min, this.max));
    }
    let place = document.createElement("h3");
    parents.appendChild(place);
    place.textContent = "Tokyo";
  },

  simulatedAmountsOfCookies: function () {
    let parents = document.getElementById("parents");
    let child = document.createElement("ul");
    parents.appendChild(child);

    for (let index = 0; index < hours.length; index++) {
      let li = document.createElement("li");
      child.appendChild(li);
      sum = Math.floor(this.arrayCustomer[index] * this.AvgCookie);
      li.textContent = `${hours[index]}:${sum}cookies`;
      this.total = this.total + sum;
    }
    let totalCookie = document.createElement("p");
    parents.appendChild(totalCookie);
    totalCookie.textContent = `total:${this.total}`;
  },
};

Tokyo.customersPerHour();
Tokyo.simulatedAmountsOfCookies();



let Dubai = {
  total: 0,
  min: 11,
  max: 38,
  AvgCookie: 3.7,
  arrayCustomer: [],
  sum: 0,
  customersPerHour: function () {
    for (let index = 0; index < hours.length; index++) {
      this.arrayCustomer.push(getRandomIntInclusive(this.min, this.max));
    }
    let place = document.createElement("h3");
    parents.appendChild(place);
    place.textContent = "Dubai";
  },

  simulatedAmountsOfCookies: function () {
    let parents = document.getElementById("parents");
    let child = document.createElement("ul");
    parents.appendChild(child);

    for (let index = 0; index < hours.length; index++) {
      let li = document.createElement("li");
      child.appendChild(li);
      sum = Math.floor(this.arrayCustomer[index] * this.AvgCookie);
      li.textContent = `${hours[index]}:${sum}cookies`;
      this.total = this.total + sum;
    }
    let totalCookie = document.createElement("p");
    parents.appendChild(totalCookie);
    totalCookie.textContent = `total:${this.total}`;
  },
};

Dubai.customersPerHour();
Dubai.simulatedAmountsOfCookies();








let Paris = {
  total: 0,
  min: 20,
  max: 38,
  AvgCookie: 2.3,
  arrayCustomer: [],
  sum: 0,
  customersPerHour: function () {
    for (let index = 0; index < hours.length; index++) {
      this.arrayCustomer.push(getRandomIntInclusive(this.min, this.max));
    }
    let place = document.createElement("h3");
    parents.appendChild(place);
    place.textContent = "Paris";
  },

  simulatedAmountsOfCookies: function () {
    let parents = document.getElementById("parents");
    let child = document.createElement("ul");
    parents.appendChild(child);

    for (let index = 0; index < hours.length; index++) {
      let li = document.createElement("li");
      child.appendChild(li);
      sum = Math.floor(this.arrayCustomer[index] * this.AvgCookie);
      li.textContent = `${hours[index]}:${sum}cookies`;
      this.total = this.total + sum;
    }
    let totalCookie = document.createElement("p");
    parents.appendChild(totalCookie);
    totalCookie.textContent = `total:${this.total}`;
  },
};

Paris.customersPerHour();
Paris.simulatedAmountsOfCookies();





let Lima = {
  total: 0,
  min: 2,
  max: 16,
  AvgCookie: 4.6,
  arrayCustomer: [],
  sum: 0,
  customersPerHour: function () {
    for (let index = 0; index < hours.length; index++) {
      this.arrayCustomer.push(getRandomIntInclusive(this.min, this.max));
    }
    let place = document.createElement("h3");
    parents.appendChild(place);
    place.textContent = "Lima";
  },

  simulatedAmountsOfCookies: function () {
    let parents = document.getElementById("parents");
    let child = document.createElement("ul");
    parents.appendChild(child);

    for (let index = 0; index < hours.length; index++) {
      let li = document.createElement("li");
      child.appendChild(li);
      sum = Math.floor(this.arrayCustomer[index] * this.AvgCookie);
      li.textContent = `${hours[index]}:${sum}cookies`;
      this.total = this.total + sum;
    }
    let totalCookie = document.createElement("p");
    parents.appendChild(totalCookie);
    totalCookie.textContent = `total:${this.total}`;
  },
};

Lima.customersPerHour();
Lima.simulatedAmountsOfCookies();
