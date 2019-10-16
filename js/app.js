var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7am','8am']

var seattle = { min:23, max: 65, avg: 6.3, locations: [],
Random: function () {
   var randNum = Math.ceil(Math.random()*(this.max-this.min))+ this.min;
return randNum;
},
cookiesForEachHour: function() {
   for (var i = 0; i < hours.length; i++){
      this.dailyCookiesForEachHour = Math.ceil(this.avg*this.Random());
      this.locations.push(this.dailyCookiesForEachHour);
   }
   return this.locations;
},
}
seattle.cookiesForEachHour();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tokyo = { min:3, max: 24, avg: 1.2, locations: [],

Random: function () {
   var randNum = Math.ceil(Math.random()*(this.max-this.min))+ this.min;
return randNum;
},
cookiesForEachHour: function() {
   for (var i = 0; i < hours.length; i++){
      this.dailyCookiesForEachHour = Math.ceil(this.avg*this.Random());
      this.locations.push(this.dailyCookiesForEachHour);
   }
   return this.locations;
},
}
tokyo.cookiesForEachHour();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var dubai = { min:11, max: 38, avg: 3.7, locations: [],

Random: function () {
   var randNum = Math.ceil(Math.random()*(this.max-this.min))+ this.min;
return randNum;
},
cookiesForEachHour: function() {
   for (var i = 0; i < hours.length; i++){
      this.dailyCookiesForEachHour = Math.ceil(this.avg*this.Random());
      this.locations.push(this.dailyCookiesForEachHour);
   }
   return this.locations;
},
}
dubai.cookiesForEachHour();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var paris = { min:20, max: 38, avg: 2.3, locations: [],

Random: function () {
   var randNum = Math.ceil(Math.random()*(this.max-this.min))+ this.min;
return randNum;
},
cookiesForEachHour: function() {
   for (var i = 0; i < hours.length; i++){
      this.dailyCookiesForEachHour = Math.ceil(this.avg*this.Random());
      this.locations.push(this.dailyCookiesForEachHour);
   }
   return this.locations;
},
}
paris.cookiesForEachHour();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var lima = { min:2, max: 16, avg: 4.6, locations: [],

Random: function () {
   var randNum = Math.ceil(Math.random()*(this.max-this.min))+ this.min;
return randNum;
},
cookiesForEachHour: function() {
   for (var i = 0; i < hours.length; i++){
      this.dailyCookiesForEachHour = Math.ceil(this.avg*this.Random());
      this.locations.push(this.dailyCookiesForEachHour);
   }
   return this.locations;
},
}
lima.cookiesForEachHour();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var locationArray = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
var locationArrayVar = [seattle, tokyo, dubai, paris, lima];

for (let cityIndex = 0; cityIndex < locationArray.length; cityIndex++) {
var count = 0;
document.write( locationArray[cityIndex]);
document.write("<ul>");
for (var i = 0; i < 15; i++) {
   count += locationArrayVar[cityIndex].locations[i];
   document.write("<li>");
   document.write(hours[i], ": ", locationArrayVar[cityIndex].locations[i], " Cookies.");
   document.write("<br>");
   document.write("</li>");
}
document.write("<li>", "Total : ", count, " Cookies.");
document.write("</ul>");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function render () {
//     var container = document.getElementById('content-area');
//     var h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent = 'seatle';

//     var ul = document.createElement('ul');
//     container.appendChild(ul);


//     for (var i = 0; i < hours.length; i++) {
//         var li = document.createElement('li');
//         ul.appendChild(li);
//         var salesInfo = hours[i] + ':' + this.cookiesForEachHour[i] + "cookies";

//         li.textContent = salesInfo;

//     }

//     var li = document.createElement('li');
//     li.textContent= 'total' + this.cookiesForEachHour + ' cookies';
//     ul.appendChild(li);
// }

// var locations = [seattle, tokyo, dubai, paris, lima]; // add more shops when ready

// for (var i = 0; i < locations.length; i++) {
//   var location = locations[i];
//   location.generateCookieForEachHour();
//   location.render();
// }

////////////////////////////////////////////////////

