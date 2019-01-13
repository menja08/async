

//run program
run();

// function definitions

function run() {
    let timeCounter = 0;
    let myInterval;
    let values = [];

    console.log(start(timeCounter, myInterval, values));
    //let toStopInterval = start(timeCounter, myInterval, values);
    //console.log(toStopInterval[0], "2");
   //stop(toStopInterval);
   // reset(toStopInterval);
}

// startStop
function start(timeCounter, myInterval, values) {
    
    document.getElementById("startStop").addEventListener("click", function() {
	myInterval = setInterval(function() {
	    timeCounter++;
	    document.getElementById("timeCounter").innerHTML = timeCounter;
	}, 100);
    });
    values.push(myInterval);
    values.push(timeCounter);
    //console.log(values);
    return values;
}

function stop(toStopInterval) {

	//stop
    document.getElementById("startStop").addEventListener("click", function () {
	console.log(toStopInterval);
	    clearInterval(toStopInterval.myInterval);
	});
}

function reset(toStopInterval) {
    // reset
	document.getElementById("reset").addEventListener("click", function() {
	    console.log(toStopInterval.myInterval);
	    clearInterval(toStopInterval.myInterval);
	    timeCounter = 0;
	    document.getElementById("timeCounter").innerHTML = timeCounter;
	});
}
/*
	// record time
	document.getElementById("recordTime").addEventListener("click", function() {
		document.getElementById("timeList").innerHTML ="\n " + timeCounter;
	});
});*/
//}
