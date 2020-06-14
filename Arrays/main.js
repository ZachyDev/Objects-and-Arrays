let users = [
    { name: 'Zachy', course: 'CS' },
    { name: 'Doroh', course: 'EDS' },
    { name: 'Rodger', course: 'ACS' },
];

// loop through the arrays

// forEach helper
let allUsers = users.filter(user => {
    return user.name === 'Doroh'
})
// console.log(allUsers);


// every helper
let everyUser = users.every(user => {
    return users.name != '';
})
// console.log(everyUser)

// find helper

let findUser = users.find(user => {
    return user.name = 'Zachy';
});
// console.log(findUser);

// filter helper

let filterUser = users.filter(user => {
    return user.name === 'Doroh';
})
console.log(filterUser);