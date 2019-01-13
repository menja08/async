//

run();

function run() {
    let timeCounter = 0
    let myInterval;
    let values = [];
    let run = true;
    let clicked = 0;
	

    document.getElementById("startStop").addEventListener("click", function() {
	clicked++;
	console.log(clicked + " A");
	myInterval = setInterval(function() {
	    timeCounter++;
		// console.log(clicked);
		document.getElementById("timeCounter").innerHTML = timeCounter;
	    }, 100);
	//console.log(clicked);
	if(clicked === 2) {
	    console.log(clicked + " B");
	    clearInterval(myInterval);
	}
    });
	 


    //reset
    document.getElementById("reset").addEventListener("click", function() {
	location.reload();
	/*clearInterval(myInterval);
	timeCounter = 0;
	document.getElementById("timeCounter").innerHTML = timeCounter;*/
    });
}
