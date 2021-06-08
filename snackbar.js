


function snackbar(string) {
	
	
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
   x.innerHTML= string;

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = 
x.className.replace("show", ""); }, 3000);
}

/*

function snackbar2() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar2");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = 
x.className.replace("show", ""); }, 3000);
}

*/
