// Custom funtiom
function tipcalculate() {
    //Store the data
    var billamount = document.getElementById("billamount").value;
    var servicequality = document.getElementById("servicequality").value;
    var totalpeople = document.getElementById("totalpeople").value;

    // Quick validation
    if (billamount === "" || servicequality == 0) {
        window.alert("Please enter valid information");
        return;
    }

    // cheak to see this input is emty oe less then or equal to 1
    if (totalpeople === "" || totalpeople <= 1) {
        totalpeople = 1;
        
        document.getElementById("each").style.display= "none";
    }else {
        document.getElementById("each").style.display="block";
    
    }
    
    // do some math
     var total = ( billamount * servicequality ) / totalpeople;
    total = Math.round(total *100) /100;
    total = total.toFixed(2);
    
    // display the tip
    
    document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML = total;
    
    
    
}




// Hide the tip amount on load
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom funtion
document.getElementById("calculate").onclick = function () {
    tipcalculate();
};
