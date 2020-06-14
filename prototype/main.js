function Car(id) {
    this.carId = id;
}
Car.prototype.start = function() {
    console.log(`Starting: ${ this.carId }`)
}
let car = new Car(2020);
car.start();