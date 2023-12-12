//this includes the vehicle class as a module

const VehicleModule = require("./vehicleBaseClass")

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, fuel, scheduleService) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = maximumPassengers || 0;
    this.fuel = fuel || 0;
    this.scheduleService = scheduleService || false;
    }
}



//TO DO: Creating Instances and Testing Them
let newMercury1 = new Car("Mercury", "Sedan", 1965, "color", 50000, 5, 10, false);
newMercury1.start();
newMercury1.performService();
console.log(newMercury1);
let newMercury2 = new Car("Mercury","Sable", 2003, "tan", 115000, 6, 18, false);
newMercury2.start();
newMercury2.performService();
console.log(newMercury2);
let newMercury3 = new Car("Mercury", "Milan", 2008,"Silver", 70171, 5, 17.5, false);
newMercury3.start();
newMercury3.performService();
console.log(newMercury3);
//You can use the same instance "v" of the Vehicle class above for the base class.






//Create at least two new instances of the Car class and test them here:
