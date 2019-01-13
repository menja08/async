// demonstrates creating promise

let promise = new Promise(function(resolve, reject) {

    // do stuff
    console.log("Mayanja");

    let isSuccessful = true;

    if(isSuccessful) {
	resolve("Success!");
    } else {
	reject(Error("Failure"));
    }
});
