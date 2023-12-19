 // Prompt user for miles
 var miles = prompt("Enter distance in miles:");

 // Check if the user entered a valid number
 if (isNaN(miles)) {
     alert("Please enter a valid number for miles.");
 } else {
     // Convert miles to kilometers
     var kilometers = miles * 1.60934;

     // Display the result
     alert(miles + " miles is approximately " + kilometers.toFixed(2) + " kilometers.");
 }