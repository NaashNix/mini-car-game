// function A(){}

// var test = new A();

// var ab = Object.create(Function.prototype);
// Function.prototype.testFunction = 100;

// var e = Object.create(Object.prototype);

function Vehicle(model, year) {
    this.model = model;
    this.year = year;
    this.park = function () {
        return `${this.model} - ${this.year} is going to park.`;
    }
}

function Car(model,year) {
    Vehicle.apply(this,arguments);
}

Car.prototype = Object.create(Vehicle.prototype);   // Create an empty object referring vehicle prototype.
Car.prototype.constructor = Car;

// Vehicle.prototype = Car.prototype;

var c = new Car(); // Under the vehicle prototype.

var v = new Vehicle();  // Under the vehicle prototype.

Vehicle.prototype.testVehicle = 100;

Vehicle.prototype.model = 'Benz';

// Vehicle.prototype.park = function park() {
//     console.log("Hello Parked!");
// }
