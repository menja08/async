// demonstrates handling a key press

document.addEventListener('keypress', function(event) {
    let keyPressed = event.key; // event.key contains the key that was pressed
    document.getElementById('text').innerHTML = 'Key pressed ' + keyPressed;
    // sets the HTML text to display the key pressed
}
);

