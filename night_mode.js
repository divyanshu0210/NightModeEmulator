
function showSlideBar( ){
 
	var slideBar = document.getElementById("slidecontainer");

/*    want to show without transition  */
//slideBar.style.display="block";

slideBar.style.maxHeight = slideBar.scrollHeight + "px"  ;
	
}

function  hideSlideBar( ){
 
	var slideBar = document.getElementById("slidecontainer");
/*  hide when dont want transition  Also switch on display
 property of slidecontainer in slider.css    */
			//slideBar.style.display="none";
     

slideBar.style.maxHeight = null  ;

}


function  showButton( ){
	
  
	var button = document.getElementById("night_mode_on");
	button.style.display="inline-block";
	
    

}



function  hideButton( ){
 
	
	var button = document.getElementById("night_mode_on");
	button.style.display="none";
   

}





function  showSwitch( ){
	
   var switch1 = document.getElementById("switch1");
	switch1.style.display="inline-block";

}


function  hideSwitch( ){
	
   var switch1 = document.getElementById("switch1");
	switch1.style.display="none";

}





function turnOff(){

var checkBox = document.getElementById("check");
checkBox.checked= false;

}


function turnOn(){

var checkBox = document.getElementById("check");
checkBox.checked= true;

}

function showHide( ){

var hide= document.getElementById("slideHide");
	hide.style.display="inline-block";


}


function hideHide( ){

var hide= document.getElementById("slideHide");
	hide.style.display="none";


}



/*

function showText( x){

	
	var color = x.style.color;   
	
	x.style.zIndex ="3";
	if(color==="black"){
		
		x.style.color="white";
		
		}
		}
		
		function color(x ){
		var color= x.style.color;
		return color;
		}

function backToNormal(x ){
x.style.zIndex="-5";
rang= color(x);
if(rang == "white "){
	x.style.color= black;
	
	}


}

*/



// activate mode on pressing button
var button = document.getElementById("night_mode_on");

//var slider = document.getElementsByClass("transiable");

button.addEventListener("click", function (){
	
	
	
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

