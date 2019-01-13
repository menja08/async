// demonstrates the use of callback functions.
// callback functions are functions that are passed as arguments into other functions to be executed at a later point in time.

// multiplies two numbers
function mult(x, y) {
    return x*y;
}

// adds two numbers
function add(x, y) {
    return x + y;
}

// uses a callback to process two numbers
function calculate(x, y, compute) {
    return compute(x, y);
}

var a = calculate(10, 5, add); // uses add callback
console.log(a);

var b = calculate(10, 5, mult); // uses mult callback
console.log(b);
