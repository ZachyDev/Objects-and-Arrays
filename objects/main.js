function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log(`Start: ${ this.carId}`);
    }
}
let car = new Car(123);
car.start();