




// activate mode on pressing button
var button = document.getElementById("night_mode_on");


//var slider = document.getElementsByClass("transiable");

button.addEventListener("click", function (){
	
	//	distance(  );
		
	
	if(over.style.display="none")
		{
		
		over.style.display ="block";

		snackbar("Move the Slider to Adjust Darkness ");
		showSlideBar();
		showHide( );
		hideButton();
		turnOn( );

		}
   
});



/*
alternative button to turn off nightmode

 var b = document.getElementById("night_mode_off"); 

 
b.addEventListener("click", function (){
	
	if(over.style.display="block")
		{
		
		over.style.display ="none";
over.style.zIndex="-1";  
		
		}
   });   

*/




/*
alternate way function to  turn on mode

function on() {
  document.getElementById("overlay").style.display = "block";
}


*/

/*   to turn off the mode on cluck the body(div tag)  */

var  c=  document.getElementById("over");
c.addEventListener("click",function() {
 /* c.style.display = "none";    */
   
      hideSlideBar( );
		hideHide( );
    /*  hideButton( );      */
		showSwitch( );
    /*   turnOff( );      */
       showButton( );

}
);

