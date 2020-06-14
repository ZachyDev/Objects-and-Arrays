let car = {
    id: 123,
    style: 'convertible'
}
console.log(JSON.stringify(car));
let jsonIn = `[
    {"carId": 123},
    {"carId": 234},
    {"carId": 455}
]`;
let carIds = JSON.parse(jsonIn);
console.log(carIds);