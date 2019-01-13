// demonstrates how map() and filter() use callbacks

var array = [1,2,3,4,5];

var newArray = array.map(function(x) {// uses an anonymous callback function to square each element in the array
    return x*x;
});
console.log(newArray);

// filter example

function isEven(x) {// checks if x is even
    return x % 2 == 0;
}

var newArray = array.filter(isEven);// uses a callback function to check if an element is even
console.log(newArray);

myEven = function(x) {
    return x % 2 == 0;
}

var newArray = array.filter(myEven);
console.log(newArray);
