function gridFunction(row, col){
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Clear previous grid if any
    // loop through the number of rows and columns
    for(let i =0; i < row * col; i++){
        // create a div element
        const gridItem = document.createElement("div");
        // add class to the div element
        gridItem.classList.add("grid-item");
        // add text to the div element
        //grid.textContent = ' ';
        container.appendChild(gridItem); // append the div to the container
    }
}
// call the function with the number of rows and columns
gridFunction(16, 16);

const gridHover = document.querySelectorAll(".grid-item");
// loop through the grid items
gridHover.forEach(function(gridHover){
    // add event listener to the grid items
    gridHover.addEventListener("mouseover", function(){
        const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink","brown", "gray", "black","maroon", "navy", "teal", "lime", "olive", "coral","ginger", "salmon", "khaki", "plum", "turquoise"];
        // get a random color from the array
        const randomColor = Math.floor(Math.random() * colors.length);        
        // change the background color to black on hover
        gridHover.style.backgroundColor = colors[randomColor];
        gridHover.style.opacity = 1;
        gridHover.style.transition = "background-color 0.5s ease-in-out";
        gridHover.style.opacity = 0.5;
    });
});