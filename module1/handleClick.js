// demonstrates handling a dom event by defining an event attribute

let value = 0;

function handleClick() {
    value++;
    document.getElementById('mybutton').innerHTML = value;
    // sets the text inside the button to display the number of times it has been clicked
}
