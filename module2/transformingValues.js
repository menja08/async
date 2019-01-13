// transforming values by calling return within then()

let promise = Promise.resolve("hello");

let promise2 = promise.then();
