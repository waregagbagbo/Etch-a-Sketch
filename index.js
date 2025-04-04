function gridFunction(row, col){
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Clear previous grid if any

    // loop through the number of rows and columns
    for(let i =0; i < row * col; i++){
        // create a div element
        const grid = document.createElement("div");
        // add class to the div element
        grid.classList.add("grid-item");
        // add text to the div element
        grid.innerText = `${i + 1}`;
        container.appendChild(grid); // append the div to the container
    }
}

// call the function with the number of rows and columns
gridFunction(4, 4);