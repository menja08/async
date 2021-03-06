// global variables here
let clickedArray = [];
let interval;
let started = false;
let time = 0;
let ready = true;
let numCompleted = 0;


// execute functions here
setUp();


// function definitions go here
function randomAnswers() {
    let answers = [1,1,2,2,3,3,4,4,5];
    answers.sort(function(item) {
	return .5 - Math.random();
    });
    return answers;
}

function setUp() {
    let grid = document.getElementsByTagName("td");
    let answers = randomAnswers();

    for(let i = 0; i < grid.length; i++) {
	let cell = grid[i];
	cell.completed = false;
	cell.clicked = false;
	cell.value = answers[i];

	cell.addEventListener("mouseenter", function() {
	    if(this.completed === false && this.clicked === false)
		this.style.background = "orange";
	});

	cell.addEventListener('mouseleave', function() {
	    if(this.completed === false && this.clicked === false)
		this.style.background = "blue";
	});

	cell.addEventListener('click', function() {
	    if(ready === false)
		return;
	    
	    startTimer();
	    
	    if(this.completed === false && this.clicked === false)
		clickedArray.push(this);
	    reveal(this);

	    if(clickedArray.length === 2) {
		if(clickedArray[0].value === clickedArray[1].value) {
		    // if a matching pair is found
		    complete(clickedArray[0]);
		    complete(clickedArray[1]);

		    clickedArray = [];

		    if(numCompleted === 8) {
			alert("You won in " + time + " seconds!");
			clearInterval(interval);
		    }
		} else {
		    // if a matching pair is not found
		    ready = false;
		    document.getElementById("gridTable").style.border = "5px solid red";

		   setTimeout(function() {
			// after a 500ms delay
			hide(clickedArray[0]);
			hide(clickedArray[1]);

			clickedArray = [];

			ready = true;
			document.getElementById("gridTable").style.border = "5px solid black";
		    }, 500);
		}
	    }
	});
    }

    document.addEventListener("keydown", function(event) {
	if(event.key > 0 && event.key < 10) {
	    grid[event.key -1].click();
	}
    });

    document.getElementById("restart").addEventListener("click",function() {
	location.reload();
    });
}

function reveal(cell) {
    cell.style.backgroundColor = "red";
    cell.innerHTML = cell.value;
    cell.clicked = true;
}

function startTimer() {
    if(started === false) {
	interval = setInterval(function() {
	    time++;
	    document.getElementById("timer").innerHTML = "Time Elapsed: " + time;
	}, 1000);
	started = true;
    }
}

function hide(cell) {
    cell.style.backgroundColor = "blue";
    cell.innerHTML = "";
    cell.clicked = false;
}

function complete(cell) {
    numCompleted++;
    cell.completed = true;
    cell.style.backgroundColor = "purple";
}
