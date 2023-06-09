// return div and button
const btnColor = document.querySelector("#btn-color");
const txtColor = document.querySelector("#txt-color");
const headingColor = document.querySelector("h1");

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

    document.body.style.background = finalColor;
    headingColor.style.color = finalColor;
    btnColor
    .style.color = finalColor;
    // Changing text on every click
    txtColor.textContent = finalColor;
    

    // For better view changing text color
    if (redRange < 100 && greenRange < 100 && blueRange < 100) {
        txtColor.style.color = "#fff";

    } else {
        txtColor.style.color = "#000";
    };
};