'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieCity(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesOfHour = [];
  this.salesOfDay = 0;
  this.generateHourlySales();
}

CookieCity.prototype.randomNumOfCustomer = function () {
  var randomCount = Math.random() * (this.max - this.min) + this.min;
  return Math.ceil(randomCount);
}

CookieCity.prototype.generateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var HourlyAmountOfCookie = Math.ceil(this.randomNumOfCustomer() * this.avg);
    this.salesOfHour.push(HourlyAmountOfCookie);
    this.salesOfDay += HourlyAmountOfCookie;
  }
}

CookieCity.prototype.render = function (table) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.city;

  for (var i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.salesOfHour[i];
  }
  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.salesOfDay;
}

// stand-alone function for header row
function renderHeaderRow(table) {
  var tr = document.createElement('tr');
    table.appendChild(tr);
  var th = document.createElement('th');
  tr.appendChild(th); // no text content for first one

  for(var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = hours[i];
  }
  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = ' Total of location';
}
function renderFooterRow(table) {
  var tr = document.createElement('tr');
    table.appendChild(tr);
  var td = document.createElement('td');
  
  tr.appendChild(td);
    td.textContent = 'Hourly Total';
  var overAllTotal = 0;

  for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
        td = document.createElement('td');
        tr.appendChild(td);
    var sum = 0;

    for (var shopIndex = 0; shopIndex < shops.length; shopIndex++) {
      var shop = shops[shopIndex];
            sum += shop.salesOfHour[hourIndex];
    }
    td.textContent = sum;
    overAllTotal += sum;
  }
  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = overAllTotal;
}

var seattle = new CookieCity('Seattle',23, 65, 6.5);
var tokyo = new CookieCity('tokyo', 3, 24, 1.2);
var dubai = new CookieCity('Dubai',38, 20, 2.3);
var paris = new CookieCity('paris', 3, 24, 1.2);
var lima = new CookieCity('lima',2, 6, 4.6);
var shops = [seattle, tokyo, dubai, paris,lima]; 


var container = document.getElementById('content-area');
var table = document.createElement('table');
container.appendChild(table);
renderHeaderRow(table);

for (var i = 0; i < shops.length; i++) {
  var shop = shops[i];
  shop.render(table);
}

renderFooterRow(table);
























// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7am', 'Total'];
// var locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
// var table = document.createElement('table');
// function CookieStand(name, min, max, avg, salesHour, dailyTotal, salesloc, dailyTotal) {
//    this.name = name;
//    this.min = min;
//    this.max = max;
//    this.avg = avg;
//    this.salesHour = [];
//    this.salesloc = [];
//    this.dailyTotal = 0;
//    this.hourlyTotal = 0;

//    this.getIt = function () {
//       return Math.ceil(Math.random() * (this.max - this.min)) + this.min;
//    };
//    this.totalEachHour = function () {
//       for (var i = 0; i < hours.length; i++) {
//          this.salesHour.push(Math.ceil(this.avg * this.getIt()));
//          console.log(this.salesHour);
//          this.salesHour.textContent;
//          this.dailyTotal += this.salesHour[i];
//          console.log(this.dailyTotal);
//       };
//       //  this.totalEachloc = function() {
//       //    for (var i=0; i < locations.length; i++) {
//       //      this.salesloc.push(Math.ceil(this.avg * this.getIt()));
//       //      console.log(this.salesHour);
//       //      this.salesHour.textContent;
//       //      this.hourlyTotal += this.salesloc[i];
//       //      console.log(this.hourlyTotal);
//       //    };
//    }
//    this.display = function () {
//       var trElement = document.createElement('tr');
//       var tdlocationName = document.createElement('td');
//       tdlocationName.textContent = this.name;
//       trElement.appendChild(tdlocationName);
//       for (var i = 0; i < this.salesHour.length; i++) {
//          var tdElement = document.createElement('td');
//          tdElement.textContent = this.salesHour[i];
//          trElement.appendChild(tdElement);
//       }
//       tdElement.textContent = this.dailyTotal;
//       trElement.appendChild(tdElement);
//       table.appendChild(trElement);
//       document.body.appendChild(table);
//    };
//    this.time = function () {
//       var trElement = document.createElement('tr');
//       for (var i = -1; i < this.salesHour.length; i++) {
//          var thElement = document.createElement('th');
//          thElement.textContent = hours[i];
//          trElement.appendChild(thElement);
//       }
//       table.appendChild(trElement);
//       document.body.appendChild(table);
//    };

// };

// var seattle = new CookieStand("seattle", 23, 65, 6.3);
// var tokyo = new CookieStand("tokyo", 3, 24, 1.2);
// var dubai = new CookieStand("dubai", 11, 38, 3.7);
// var paris = new CookieStand("paris", 20, 38, 2.3);
// var lima = new CookieStand("lima", 2, 16, 4.6);
// seattle.totalEachHour();
// seattle.time();
// seattle.display();
// tokyo.totalEachHour();
// tokyo.display();
// dubai.totalEachHour();
// dubai.display();
// paris.totalEachHour();
// paris.display();
// lima.totalEachHour();
// lima.display();
// var location = new location(document.getElementById('location'), document.getElementById('max'), document.getElementById('min'), (document.getElementById('avg') * document.getElementById('cookies')));
// location.totalEachHour();
// location.display();








