// demonstrates clearInterval

var count = 0;

var interval = setInterval(function() {
    count++;
    console.log(count);
    if(count >= 4) {
	clearInterval(interval);
    }
}, 4000); // executes callback every 4 seconds

/* clearInterval(interval); */
