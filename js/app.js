var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7am', 'Total'];
var locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
var table = document.createElement('table');
function CookieStand(name, min, max, avg, salesHour, dailyTotal, salesloc, dailyTotal) {
   this.name = name;
   this.min = min;
   this.max = max;
   this.avg = avg;
   this.salesHour = [];
   this.salesloc = [];
   this.dailyTotal = 0;
   this.hourlyTotal = 0;

   this.getIt = function () {
      return Math.ceil(Math.random() * (this.max - this.min)) + this.min;
   };
   this.totalEachHour = function () {
      for (var i = 0; i < hours.length; i++) {
         this.salesHour.push(Math.ceil(this.avg * this.getIt()));
         console.log(this.salesHour);
         this.salesHour.textContent;
         this.dailyTotal += this.salesHour[i];
         console.log(this.dailyTotal);
      };
      //  this.totalEachloc = function() {
      //    for (var i=0; i < locations.length; i++) {
      //      this.salesloc.push(Math.ceil(this.avg * this.getIt()));
      //      console.log(this.salesHour);
      //      this.salesHour.textContent;
      //      this.hourlyTotal += this.salesloc[i];
      //      console.log(this.hourlyTotal);
      //    };
   }
   this.display = function () {
      var trElement = document.createElement('tr');
      var tdlocationName = document.createElement('td');
      tdlocationName.textContent = this.name;
      trElement.appendChild(tdlocationName);
      for (var i = 0; i < this.salesHour.length; i++) {
         var tdElement = document.createElement('td');
         tdElement.textContent = this.salesHour[i];
         trElement.appendChild(tdElement);
      }
      tdElement.textContent = this.dailyTotal;
      trElement.appendChild(tdElement);
      table.appendChild(trElement);
      document.body.appendChild(table);
   };
   this.time = function () {
      var trElement = document.createElement('tr');
      for (var i = -1; i < this.salesHour.length; i++) {
         var thElement = document.createElement('th');
         thElement.textContent = hours[i];
         trElement.appendChild(thElement);
      }
      table.appendChild(trElement);
      document.body.appendChild(table);
   };

};
var seattle = new CookieStand("seattle", 23, 65, 6.3);
var tokyo = new CookieStand("tokyo", 3, 24, 1.2);
var dubai = new CookieStand("dubai", 11, 38, 3.7);
var paris = new CookieStand("paris", 20, 38, 2.3);
var lima = new CookieStand("lima", 2, 16, 4.6);
seattle.totalEachHour();
seattle.time();
seattle.display();
tokyo.totalEachHour();
tokyo.display();
dubai.totalEachHour();
dubai.display();
paris.totalEachHour();
paris.display();
lima.totalEachHour();
lima.display();
var location = new location(document.getElementById('location'), document.getElementById('max'), document.getElementById('min'), (document.getElementById('avg') * document.getElementById('cookies')));
location.totalEachHour();
location.display();


// var seattle = {
//    TheMin: 23,
//    TheMax: 65,
//    TheAv: 6.3,
//    cookiesArray: [],
//    Ramdom: function () {
//       var range = this.TheMax - this.TheMin;
//       var rand = Math.floor(Math.random() * range) + this.TheMin;
//       return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//       for (i = 0; i < 15; i++) {
//           this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Ramdom());
//           this.cookiesArray.push(this.amountOfCookiesCeil);
//       }
//       return this.cookiesArray;
//    },
//    }
//    seattle.amountOfCookiesPerHourFunction();
//    var Tokyo = {
//    TheMin: 3,
//    TheMax: 24,
//    TheAv: 1.2,
//    cookiesArray: [],
//    Random: function () {
//       var range = this.TheMax - this.TheMin;
//       var rand = Math.floor(Math.random() * range) + this.TheMin;
//       return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//       for (i = 0; i < 15; i++) {
//           this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
//           this.cookiesArray.push(this.amountOfCookiesCeil);
//       }
//       return this.cookiesArray;
//    },
//    }
//    Tokyo.amountOfCookiesPerHourFunction();
//    var Dubai = {
//    TheMin: 11,
//    TheMax: 38,
//    TheAv: 3.7,
//    cookiesArray: [],
//    Random: function () {
//       var range = this.TheMax - this.TheMin;
//       var rand = Math.floor(Math.random() * range) + this.TheMin;
//       return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//       for (i = 0; i < 15; i++) {
//           this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
//           this.cookiesArray.push(this.amountOfCookiesCeil);
//       }
//       return this.cookiesArray;
//    },
//    }
//    Dubai.amountOfCookiesPerHourFunction();
//    var Paris = {
//    TheMin: 20,
//    TheMax: 38,
//    TheAv: 2.3,
//    cookiesArray: [],
//    Random: function () {
//       var range = this.TheMax - this.TheMin;
//       var rand = Math.floor(Math.random() * range) + this.TheMin;
//       return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//       for (i = 0; i < 15; i++) {
//           this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
//           this.cookiesArray.push(this.amountOfCookiesCeil);
//       }
//       return this.cookiesArray;
//    },
//    }
//    Paris.amountOfCookiesPerHourFunction();
//    
// var Lima = {
//    TheMin: 2,
//    TheMax: 16,
//    TheAv: 4.6,
//    cookiesArray: [],
//    Random: function () {
//       var range = this.TheMax - this.TheMin;
//       var rand = Math.floor(Math.random() * range) + this.TheMin;
//       return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//       for (i = 0; i < 15; i++) {
//           this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
//           this.cookiesArray.push(this.amountOfCookiesCeil);
//       }
//       return this.cookiesArray;
//    },
//    }
//    Lima.amountOfCookiesPerHourFunction();
//   
//  arrayall = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
//    arrayall1 = [seattle, Tokyo, Dubai, Paris, Lima];
//    for (let j = 0; j < arrayall.length; j++) {
//    var count = 0;
//    document.write("<h2>", "* ", arrayall[j], "</h2>");
//    document.write("<ul>");
//    for (i = 0; i < 15; i++) {
//       count += arrayall1[j].cookiesArray[i];
//       document.write("<li>");
//       document.write(Hours[i], ": ", arrayall1[j].cookiesArray[i], " Cookies.");
//       document.write("<br>");
//       document.write("</li>");
//    }
//    document.write("<li>", "Total : ", count, " Cookies.");
//    document.write("</ul>");
//    }






