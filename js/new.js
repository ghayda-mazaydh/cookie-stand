
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7am', 'Total'];
var container = document.getElementById('content-area');


var table = document.createElement('table');
container.appendChild(table);

function addElement(tagName, container, text) {
    var element = document.createElement(tagName);
    container.appendChild(element);

    if (text) {
        element.textContent = text;

    }
    return element;
}


var hourRow = addElement('tr',table);
addElement('th', hourRow, '   ');
for (var i=0; i<hours.length; i++){
// var td = document.createElement('td');
// hourRow.appendChild(td);
// td.textContent = hours[i]; 
// addElement('th', tableRow, 'aaaaa');
// addElement('th', tableRow, 'sssss');
addElement('th', hourRow, hours[i]);
}

addElement('th', hourRow, 'daily totals');
/////////////////////////////////////////////////////////////

function shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesHour = [];
    this.salesloc = [];
    this.dailyTotal = 0;
    this.hourlyTotal = 0;

this.generateHourluSales();


}
















//     var shops = [seattle, tokyo, dubai, paris, lima]; 

// var seattle = new CookieStand("seattle", 23, 65, 6.3);
// var tokyo = new CookieStand("tokyo", 3, 24, 1.2);
// var dubai = new CookieStand("dubai", 11, 38, 3.7);
// var paris = new CookieStand("paris", 20, 38, 2.3);
// var lima = new CookieStand("lima", 2, 16, 4.6);


// for (var i=0; i< shops.length; i++)
// {var currntShop = shops[i];
//     var shopRow = addElement('tr', table);
//     addElement('td', shopRow,  currntShop.location);

// }
var shops= [];
shops.push(new shop ('seattle', 23, 65, 6.3));
shops.push(new shop ('seattle', 23, 65, 6.3));
shops.push(new shop ('seattle', 23, 65, 6.3));
shops.push(new shop ('seattle', 23, 65, 6.3));
shops.push(new shop ('seattle', 23, 65, 6.3));

for (var i=0; i< shops.length; i++)
{var currntShop = shops[i];
  currntShop.generateHourluSales();
  currntShop.renderRow.table();
    // addElement('td', shopRow,  currntShop.location);

}








