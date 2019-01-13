run();

function run() {
    let timeCounter = 0;
    let myInterval;
    let clicked = 0;
    let value;// = timeCounter/10;


    document.getElementById("startStop").addEventListener("click", function() {
	clicked++;
	//console.log("myInterval is now " + myInterval);
	if(clicked < 2) {
	myInterval = setInterval(function() {
	    timeCounter++;
	    value = timeCounter/10;
	    document.getElementById("timeCounter").innerHTML = value;
	}, 100);
	}
	if(clicked === 2) {
	    clearInterval(myInterval);
	    clicked = 0;
	    timeCounter = 0;
	}

	
    });

    // s keypress
    document.addEventListener("keypress", function(event) {
	clicked++;
	if(clicked < 2) {
	    if(event.key === "s") {
		myInterval = setInterval(function() {
		    timeCounter++;
		    value = timeCounter/10;
		    document.getElementById("timeCounter").innerHTML = value;
		}, 100);
	    }
	}
	if(clicked === 2) {
	    clearInterval(myInterval);
	    clicked = 0;
	    timeCounter = 0;
	}
    });

    // reset
    document.getElementById("reset").addEventListener("click", function() {
	clearInterval(myInterval);
	timeCounter = 0;
	value = timeCounter;
	document.getElementById("timeCounter").innerHTML = value;
	document.getElementById("timeList").innerHTML = "";
    });

    // r keypress
    document.addEventListener("keypress", function(event) {
	if(event.key === "r") {
	    clearInterval(myInterval);
	timeCounter = 0;
	value = timeCounter;
	document.getElementById("timeCounter").innerHTML = value;
	document.getElementById("timeList").innerHTML = "";
	}
    });

    // record past time
    document.getElementById("recordTime").addEventListener("click", function() {
	    document.getElementById("timeList").innerHTML = value;
    });

    // t keypress
    document.addEventListener("keypress", function(event) {
	if(event.key === "y") {
	    document.getElementById("timeList").innerHTML = value;
	}
    });
}
