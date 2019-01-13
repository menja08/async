// demonstrates anonymous callback functions

function calculate(x, y, compute) {
    return compute(x, y);
}

var c = calculate(10, 5, function(x,y) {/* uses an anonymous callback */
    return x-y; // subtracts x from y
});
console.log(c);

var d = calculate(18, 10, (x,y) => {return x-y});/* using arrow functions */
console.log(d);
