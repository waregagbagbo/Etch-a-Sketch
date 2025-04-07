// implementing fetching random color from an API using color API
async function colorApi(){
    try{
        const response = await fetch(`https://www.thecolorapi.com/random?format=json`)
        const data = await response.json();
        return data.hex.value
    }
    catch(error){
        console.error('Color error',error);
        return 'black'
    }
}

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
gridFunction(16,16);


// DOM Manipulation
const titles = document.querySelector(".title");
titles.textContent = "Etch-a- Sketch";
titles.style.fontSize = "40px";
titles.style.color = "black";
titles.style.color ="white";

// set the color change on hover for the grids function
function gridColorChange(){
const gridHover = document.querySelectorAll(".grid-item"); // all the grids
// loop through the grid items
gridHover.forEach(function(gridHover){
    // add event listener to the grid items
    gridHover.addEventListener("mouseover",async function(){
        const randomColor = await colorApi();
        gridHover.style.backgroundColor = randomColor
        gridHover.style.opacity = 5;
        gridHover.style.transition = "background-color 0.5s ease-in-out";
        gridHover.style.opacity = 0.5;
    });
})}
gridColorChange()


// DOM for the buttons
const gridResize = document.querySelector('.resize');
gridResize.addEventListener('click', function(){
    let userInput = prompt('Enter number of squares per side (max 100)');
    // set conditions
    if (userInput > 0 && userInput <= 100) {
        gridFunction(userInput,userInput); // Call gridFunction with valid input
        gridColorChange()
    } 
    
    else {
        alert('Please try a value between 1 and 100');
    }
})


// grid reset functionality
const gridReset = document.querySelector(".reset");
gridReset.addEventListener('click', function(){
    gridFunction(16,16); // Reset to default grid size
    gridColorChange()
})
