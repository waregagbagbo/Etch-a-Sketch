function gridFunction(row,col){
    const container = document.querySelector(".container");
    container.innerHTML = '' // clear existing grid
    // loop through the number of rows and columns
    for(let i=0; i < row * col; i++){
        // create a div element
        const gridItem = document.createElement("div");

        // add class to the div element
        gridItem.classList.add("grid-item");

         // Dynamically set width and height
         gridItem.style.width = `calc(100% / ${col})`;
         gridItem.style.height = `calc(100% / ${row})`;       
         
        container.appendChild(gridItem); // append the div to the container
    }
}
// call the function with the number of rows and columns
gridFunction(16,16);

// DOM Manipulation
const titles = document.querySelector(".title");
titles.textContent = "Etch-a- Sketch";
titles.style.fontSize = "50px";
titles.style.color = "black";
titles.style.color ="white";

// set the color change on hover for the grids function

function gridColorChange(){

const gridHover = document.querySelectorAll(".grid-item"); // all the grids
// loop through the grid items
gridHover.forEach(function(gridHover){
    // add event listener to the grid items
    gridHover.addEventListener("mouseover", function(){
        const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink","brown", "gray", "black","maroon", "navy", "teal", "lime", "olive", "coral","ginger", "salmon", "khaki", "plum", "turquoise"];
        // get a random color from the array
        const randomColor = Math.floor(Math.random() * colors.length);   
        // change the background color to black on hover
        gridHover.style.backgroundColor = colors[randomColor];
        gridHover.style.opacity = 5;
        gridHover.style.transition = "background-color 0.5s ease-in-out";
        gridHover.style.opacity = 0.5;
    });
})}
gridColorChange()


// DOM for the buttons
const gridResize = document.querySelector('.resize');
gridResize.addEventListener('click', function(){
    let userInput = prompt(parseInt('Enter number of squares per side (max 100)'));
    // set conditions
    if (userInput > 0 && userInput <= 100) {

        gridFunction(userInput,userInput); // Call gridFunction with valid input
    } else {
        alert('Please try a value between 1 and 100');
    }
})


// grid reset functionality
const gridReset = document.querySelector(".reset");
gridReset.addEventListener('click', function(){
    gridFunction(16,16); // Reset to default grid size
})
