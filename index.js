
const body = ddocument.querySelector(".body");
const container = document.querySelector(".container");

const button = document.createElement('button')
button.setAttribute('style', 'height: 100px; width: 100px; background-color: black; color: white');
button.innerHTML = "Click Me!";
body.appendChild(button);

button.addEventListener('click', numberofSquares);

function numberofSquares(){
    const number = prompt("How many Squares per side do you want?");

    // create grid divs
    if(number <= 100){
        for (test = 1; test <= number; test += 1){
            for (n = 1; n <= number; n += 1){
                const box = document.createElement("div");
                box.setAttribute('style', 'class: col; background-color: red; height: 50px; width: 50px; border: 1px solid black; flex-wrap: wrap; flex: 1 0 300px');
                // container.appendChild(box);
                // button.nextSibling(box);

                function pixelated() {
                    box.setAttribute('style', 'background-color: blue; height: 50px; width: 50px; border: 1px solid black; flex-wrap: wrap; flex: 1 0 300px');
                }

                function normal(){
                    box.setAttribute('style', 'background-color: red; height: 50px; width: 50px; border: 1px solid black; flex-wrap: wrap; flex: 1 0 300px');
                }

                box.addEventListener('mouseover', pixelated);
                // box.addEventListener('mouseout', normal);
            }
        }
    }
    else {
        alert(number + " is too high!");
        numberofSquares();
    }
}

// Be careful with borders and margins, as they can adjust the size of the squares!
// “OMG, why isn’t my grid being created???”


// Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
// Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
// Push your project to GitHub!