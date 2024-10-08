
const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");

container.style.width = '580px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

const button = document.createElement('button')
button.setAttribute('style', 'height: 100px; width: 100px; background-color: black; color: white;');
button.innerHTML = "Generate New Grid";
buttonContainer.appendChild(button);

let random = Math.random().toString().substr(2, 6);

numberofSquares(16);


function howManySquares(){
    numberofSquares(prompt("How many Squares per side do you want?"));
}

function numberofSquares(number){
    // Clear previous grid
    container.innerHTML = '';

    // const number = prompt("How many Squares per side do you want?");
    let squareSize = 580/number;

    // create grid divs
    if(number <= 100){
        for (let test = 1; test <= number * number; test++){
            const box = document.createElement("div");
            box.style.width = `${squareSize}px`;
            box.style.backgroundColor = '#E2F1E7';
            box.style.height = `${squareSize}px`;3
            box.style.flex= '0 o auto';
            container.appendChild(box);

            function pixelated() {
                // box.style.backgroundColor = '#387478';
                box.style.backgroundColor = getRandomColor();
            }

            // event listeners
            box.addEventListener('mouseover', pixelated);
        }
    }
    else if (number > 100){
        alert(number + " is too high, try again!");
        numberofSquares();
    }
    else {
        alert("Invalid Input, try again!")
        numberofSquares();
    }
}

// Get random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// numberofSquares();
button.addEventListener('click', howManySquares);
