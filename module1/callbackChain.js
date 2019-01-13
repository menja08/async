// chaining callbacks using the continuation passing style (CPS). In CPS, methods with callback functions as arguments are called within other callback functions. CPS is characterized by having methods that have callback functions as their last argument

function myFunction(x, callback) {
    callback(x);
}

var answer = 0;

myFunction(10, function(x) {// callback1
    var result = x * x;

    myFunction(result, function(x) {// callback2 within callback1
	var result2 = x + x;

	myFunction(result2, function(x) {// callback3 within callback2
	    var result3 = x + 100;
	    console.log(result3);
	    answer = 100 + x;
	    console.log(answer);
	});
    });
});
console.log(answer, answer);
