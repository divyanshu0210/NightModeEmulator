


// Get the root element
var r = document.querySelector(':root');


/*

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --rgbais: " + rs.getPropertyValue('--rgba'));
}

// Create a function for setting a variable value

function myFunction_set() {
	
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--rgba', slide.value);
}
*/

slider.oninput = function(){
	
	  r.style.setProperty('--rgba',this.value/100);
	
	}