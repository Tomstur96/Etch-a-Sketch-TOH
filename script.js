// Div Grid Creation and Hover Affect //

const mainContainer = document.getElementById("mainContainer");
let gridSize = document.querySelector("#gridSize__Button");
let defaultGridSize = 8;

createGridDiv(defaultGridSize);

// Individual Grid Creation // 

function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('divGrid');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
};

// Container for Grid //

function createGridDiv(defaultGridSize) {
    for (let i = 0; i < defaultGridSize; i++) {
        for (let j = 0; j < defaultGridSize; j++) {
            mainContainer.appendChild(createDiv(mainContainer.clientWidth / defaultGridSize));
        }
    }
};

// Hover Event Listener and append class //

mainContainer.addEventListener('mouseover', function(e){
    if (e.target.matches('.divGrid')) {
        e.target.classList.add('hover');
    }
});

// // Remove current container //

function removeAllChildNodes(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// // // Div Grid Creation - Button Click //

gridSize.addEventListener("click", function(){
    let inputNumber = prompt("What size Grid would you like? \nMaximum is 100",100);
    let val = inputNumber;
    removeAllChildNodes(mainContainer);
    createGridDiv((val/2));
});
