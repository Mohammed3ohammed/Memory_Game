//Select The Start Game Button

document.querySelector(".control-buttons span").onclick = function () {

    // Prompt Window To Ask For Name
    let yourName = prompt("What Your Name?");

    // If Name Is Empty
    if (yourName == null || yourName == "") {

        // Set Name To Unknown
        document.querySelector(".name span").innerHTML = 'Unknown';

        // Name Is Not Empty
    } else {

        // Set Name To Your Name
        document.querySelector(".name span").innerHTML = yourName;

    }
    // Remove Splash Screen

    document.querySelector(".control-buttons").remove();

};

// Effect Duration 
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks 
let blocks = Array.from(blocksContainer.children);

// // Create Range Of Keys
// let orderRange = [...Array(blocks.length).keys()];
let orderRange = Array.from(Array(blocks.length).keys());

shuffle(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {

    block.style.order = orderRange[index];

});

// Shuffle Function

function shuffle(array) {

    //Setting Vars
    let current = array.length,
        temp,
        random;

    while (current > 0) {
        // Get Random Number

        random = Math.floor(Math.random() * current);

        // Decrease Lenght By One

        current--;

        // Save Cuurent Element in Stash
        temp = array[current]

        // Current Element = Random Element
        array[current] = array[random];

        // Random Element = Get Element From Stash
        array[random] = temp;
    }

    return array;

}