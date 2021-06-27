
function showSlideBar( ){
 
	var slideBar = document.getElementById("slidecontainer");
	slideBar.style.display="block";


}

function  hideSlideBar( ){
 
	var slideBar = document.getElementById("slidecontainer");
	slideBar.style.display="none";


}


function  showButton( ){
	
  
	var button = document.getElementById("night_mode_on");
	button.style.display="block";
	
    

}



function  hideButton( ){
 
	
	var button = document.getElementById("night_mode_on");
	button.style.display="none";
   

}





function  showSwitch( ){
	
   var switch1 = document.getElementById("switch1");
	switch1.style.display="block";

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

function get(   id , property  ){

var element = document.getElementById( id );
  var style = window.getComputedStyle(element); 
var   extractedProp= style.getPropertyValue(property);
  return extractedProp; 




}

function index(   ){

var bl= document.querySelectorAll(  "#container_to_show button "   );
var p =  document.querySelectorAll(  "#container_to_show p "   );
var links = document.querySelectorAll(  "div#container_to_show a "   );
var span= document.querySelectorAll(  "div#container_to_show span "   );
 var myBtn= document.getElementById("myBtn" );

for ( i=0; i < bl.length; i++){
	
	if(   bl[  i  ]  !=  myBtn     ){
	bl[ i ].style.position="relative";
	bl[  i  ].style.zIndex= "3";
//	bl[ i ].style.opacity= " 0.5";
}
		
	}

	
for ( i=0; i < links.length; i++){
//	p[ i ].style.position="relative";
	links[  i  ].style.zIndex= "3";
	
	}
	
for ( i=0; i < p.length; i++){
 p[ i ].style.position="relative";
	p[  i  ].style.zIndex= "1";
	
	}
	
	for ( i=0; i < span.length; i++){
 span[ i ].style.position="relative";
	span[  i  ].style.zIndex= "3";
	
	}
	
	



}


function propExtractor( selector , prop ){
var e =  document.querySelectorAll( selector );   // e for element
var i ;
var p = [  ] ;      // p for prperty of the elemnt

for ( i=0; i < e.length; i++){

 var  style = window.getComputedStyle(e[  i ]);
 p[  i  ]  = style.getPropertyValue( prop );
 
   }

return p;

}












/*
document.getElementById("check").addEventListener("click",function(){
		
		
		myFunction();
		
		
		});
	
	function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("check");
  // Get the output text
  var over= document.getElementById("over");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    over.style.display = "block";
	showButton( );
    snackbar( );
   turnOn( );
     

  } 
	
		
			
 else
	 {
    over.style.display = "none";
	hideButton( );
	turnOff( );
  }
}
*/

  