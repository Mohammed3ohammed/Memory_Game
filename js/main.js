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