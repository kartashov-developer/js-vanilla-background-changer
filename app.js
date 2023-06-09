// return text, button, and input
const btnColor = document.querySelector("#btn-color");
const txtColor = document.querySelector("#txt-color");
const headingColor = document.querySelector("h1");
const inputColor = document.querySelector("input");

// Changing input color dynamic
// function for creating hex range for every color
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
    }
// function for converting rgb to hex
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

}

// Randoming color event on click
btnColor.addEventListener("click", randomColor);

function randomColor() {
    /* Creating 3 const variables for random calc of each of the colors. 
    1. Math.random() for creating random number(from 0 to 1 with floating point).
    2. Multiply on 256 is to get a number between 0 and 256.
    3. Math.ceil() is for rounds down to the higher integer.
    ! May use Math.floor() for rounds down to the smaller integer but need to multiply on 257.
    */
    const redRange = Math.ceil(Math.random() * 256);
    const greenRange = Math.ceil(Math.random() * 256);
    const blueRange = Math.ceil(Math.random() * 256);
    // Merge into final color
    const finalColor = `rgb(${redRange}, ${greenRange}, ${blueRange})`;

    // Adding finalColor for changing
    document.body.style.backgroundColor = finalColor;
    headingColor.style.color = finalColor;
    btnColor.style.color = finalColor;

    // Changing text on every click
    txtColor.textContent = finalColor;
    
    inputColor.value = rgbToHex(redRange, greenRange, blueRange);
};

// Changing background on changing input
inputColor.oninput = (event) => {
    document.body.style.backgroundColor = inputColor.value; //bg changing
    headingColor.style.color = inputColor.value; //heading changing
    btnColor.style.color = inputColor.value; //btn changing
    // Creating rgb format
    const color = event.target.value ;
    const r = parseInt(color.substr(1,2), 16)
    const g = parseInt(color.substr(3,2), 16)
    const b = parseInt(color.substr(5,2), 16)
    // Changing text
    txtColor.textContent = `rgb(${r}, ${g}, ${b})`;
}

// Changing background by items
function color(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = b;
    headingColor.style.color = b;
    btnColor.style.color = b;
    txtColor.textContent = b;
}