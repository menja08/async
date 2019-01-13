// demonstrates handling a keypress event using attributes

document.onkeypress = handleKeyPress;

function handleKeyPress(event) {
    let keyPressed = event.key; //
    document.getElementById('mybutton').innerHTML = 'Key Pressed ' + keyPressed;
    //
}
