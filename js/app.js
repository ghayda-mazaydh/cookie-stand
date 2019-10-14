
var Seattle = {
    'min': 23,
    'max': 65,
    'Avg': 6.3,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        var numCookies = this.avg * rand;
        return Math.ceil(rand);
    }
};
var Tokyo = {
    'min': 3,
    'max': 24,
    'Avg': 1.2,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
};
var Dubai = {
    'min': 11,
    'max': 38,
    'Avg': 3.7,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
};
var Paris = {
    'min': 20,
    'max': 38,
    'Avg': 3.7,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
};
var Lima = {
    'min': 2,
    'max': 16,
    'Avg': 4.6,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
};
console.log("Seattle " + Seattle.avrcustmer());
console.log("Tokyo " + Tokyo.avrcustmer());
console.log("Dubai " + Dubai.avrcustmer());
console.log("Paris " + Paris.avrcustmer());
console.log("Lima " + Lima.avrcustmer());

// function randomInRange (min, max) {
// var range = max - min;
// var rand = (Math.random() * range) + min;
// return Math.ceil(rand);
var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'lima'];
var hours = ['6am: ','7am:', '8am:',  '9am:', '10am:','11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var cookies =[]
for (var i = 0; i < locations.length; i++) {
    for (var j = 0; j < hours.length; j++) {
cookies= locations[i].avrcustmer ()* Avg;

    }

        }