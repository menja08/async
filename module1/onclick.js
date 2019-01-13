// demonstrates use of an anonymous event handler, onclick

let value = 0;

document.getElementById('mybutton').onclick = function() {
    value++;
    document.getElementById('mybutton').innerHTML = value;
    // sets the HTML text inside the button to display the number of times it has been clicked
}
