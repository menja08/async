// using promises; with then() and catch()

let promise = new Promise(function(resolve, reject) {

    //do stuff
    let isSuccessful = true;
    setTimeout(function() {
	if(isSuccessful) {
	    resolve("success!");
	} else {
	    reject(Error("Failure!"));
	}
    }, 5000);
});

// promise status changes from pending to resolved after 5 seconds

promise.then(function(val) {// val represents the fulfillment value
    console.log(val);
}).catch(function(val) {
    console.log(val);
});
