// demonstrates clearTimeout()

var timeout = setTimeout(function() {
    console.log("hello2");
}, 6000);

clearTimeout(timeout);
