// Function
function calculateTip() {
    // Store data of inputs
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numPeople = document.getElementById("totalPeople").value;

    // Quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please add a value");
        return; //This will prevent the function from keep running
    }

    // Check to see if input is less or = to 1 or nothing
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Do some Math
    let total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // Display the tip
    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total;
}

// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click the button calls function
document.getElementById("calculate").onclick = function() { calculateTip(); };