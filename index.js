

const container = document.querySelector(".container");

// create grid divs
for (test = 1; test <= 4; test += 1){
    for (n = 1; n <= 4; n += 1){
        const box = document.createElement("div");
        box.setAttribute('style', 'class: col; background-color: red; height: 50px; width: 50px; border: 1px solid black;');
        container.appendChild(box);
    }
}


// Be careful with borders and margins, as they can adjust the size of the squares!
// “OMG, why isn’t my grid being created???”

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// Adding a new class to the div.
// Changing the div’s background color using JavaScript.
// Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
// Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
// Push your project to GitHub!