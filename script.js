const mainContainer = document.getElementById("mainContainer");
let gridSize = document.querySelector("#gridSize__button");
let divs = document.querySelector(".divGrid");
const divArray = document.getElementsByClassName("divGrid");
let reset = document.querySelector("#reset__button");
let randomgRGB = document.querySelector(".randomRgb");
let defaultGridSize = 8;

createGridDiv(defaultGridSize);
colorHover();
randomRGBStatus();
gridReset(mainContainer);

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

function colorHover() {
    for (const divGrid of divArray) {
        divGrid.addEventListener('mouseover', function(e) {
            const active = randomgRGB.getAttribute("data-active")
            e.target.classList.add('active');
            if (e.target.matches('.divGrid.active') && active === "true") {
                    e.target.style.backgroundColor = randomRgbColor();
                } else if ((e.target.matches('.divGrid.active') && active === "false")) {
                    e.target.classList.add('hover');
                }
            }
        )
    }
};

// RGB Button Status //

function randomRGBStatus() {
    randomgRGB.addEventListener('click', function(e){
        const active = randomgRGB.getAttribute("data-active")
        if (active === "false") {
            randomgRGB.setAttribute(`data-active`, true);
        } else {
            randomgRGB.setAttribute(`data-active`, false);
        }
    });
};

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
    createGridDiv((val));
    colorHover();
    randomRGBStatus();
});


// Random RGB Color Generator //

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';    
}

// Reset grid to initial state //

function gridReset(parent) {
    reset.addEventListener('click', function(e){
        removeAllChildNodes(parent);
        createGridDiv(defaultGridSize);
        colorHover();
        const active = randomgRGB.getAttribute("data-active");
            if (active === "true") {
                randomgRGB.setAttribute(`data-active`, false);
            } else {
                randomgRGB.setAttribute(`data-active`, false);
            };
        })
};
