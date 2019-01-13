// demonstrates handling a click event

let value = 0;

/*document.getElementById("mybutton").addEventListener('click', function() {
     value++;
    document.getElementById('mybutton').innerHTML = value;
    // sets the HTML text inside the button to display the number of times it has been clicked.
});*/


// write my name randomly

let fullName = 'Ivan Felix Mayanja';
let dad = 'Kakeeto Godfrey';
let mum = 'Babirye Barbara';

setInterval(function() {
let myRandom = Math.random() * 100;
// console.log(myRandom);

document.getElementById('myname').addEventListener('click', function() {

    if(myRandom < 30) {
        document.getElementById('myname').innerHTML = fullName;
    } else if(myRandom > 30 && myRandom < 60) {
        document.getElementById('myname').innerHTML = dad;
    } else {
        document.getElementById('myname').innerHTML = mum;
    }
});
}, 1000);

// changing colors
let colorOne = 'red';
let colorTwo = 'blue';
let colorThree = 'green';

setInterval(function() {
let myRandom = Math.random() * 100;
 console.log(myRandom);


/*document.getElementById('changeColor').addEventListener('click', function() {

    if(myRandom < 30) {
        document.getElementById('changeColor').style.color = colorOne;
    } else if(myRandom > 30 && myRandom < 60) {
        document.getElementById('changeColor').style.color = colorTwo;
    } else {
        document.getElementById('changeColor').style.color = colorThree;
    }
});
}, 5000);*/
    
   
    let ivan = document.querySelector('#ivan');
    ivan.addEventListener('click', function() {
	if(myRandom < 30) {
        ivan.style.color = colorOne;
    } else if(myRandom > 30 && myRandom < 60) {
        ivan.style.color = colorTwo;
    } else {
        ivan.style.color = colorThree;
    }
    });

 let kakeeto = document.querySelector('#kakeeto');
    kakeeto.addEventListener('click', function() {
	if(myRandom < 30) {
        kakeeto.style.color = colorOne;
    } else if(myRandom > 30 && myRandom < 60) {
        kakeeto.style.color = colorTwo;
    } else {
        kakeeto.style.color = colorThree;
    }
    });

 let babirye = document.querySelector('#babirye');
    babirye.addEventListener('click', function() {
	if(myRandom < 30) {
        babirye.style.color = colorOne;
    } else if(myRandom > 30 && myRandom < 60) {
        babirye.style.color = colorTwo;
    } else {
        babirye.style.color = colorThree;
    }
    });
   
}, 1000);

