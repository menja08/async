// reolving and rejecting a promise

// a resolved promise with fulfillment value "already resolved"
/*
let resolvedPromise = Promise.resolve("already reolved");
console.log(resolvedPromise);
*/

//let rejectedPromise = Promise.reject("already rejected");
//console.log(rejectedPromise);

let firstPromise = Promise.resolve("already resolved");
let secondPromise = Promise.resolve(firstPromise);
console.log(secondPromise);
