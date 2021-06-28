

function showSlideBar( ){
 
	var slideBar = document.getElementById("slidecontainer");
	var mainDiv= document.getElementById("container_to_show");
  mainDiv.style.marginTop="180px";  
/*    want to show without transition  */
//slideBar.style.display="block";

slideBar.style.maxHeight = slideBar.scrollHeight + "px"  ;
	
}

function  hideSlideBar( ){
 
	var slideBar = document.getElementById("slidecontainer");
	var mainDiv= document.getElementById("container_to_show");
	mainDiv.style.marginTop="50px";
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


function get(   id , property  ){

var element = document.getElementById( id );
  var style = window.getComputedStyle(element); 
var   extractedProp= style.getPropertyValue(property);
  return extractedProp; 




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

//code in place of propExtractor( ) in merge.js
/*
var divp= document.querySelectorAll("div#container_to_show p	");
var background = [  ]   ; 
var color = [  ]  ; 
for ( i=0; i < divp.length; i++){

 var  style = window.getComputedStyle(divp[  i ]);


// var element = document.getElementById('image_1');
  
  background[  i  ]  = style.getPropertyValue('background');
  color[  i  ]  = style.getPropertyValue('color');
   
}

  
*/


// function for restoring original conditin
function original(  ){
	/*
	var all = document.querySelectorAll(  " div#container_to_show *  "   );
for (i = 0; i < all.length; i++) {
  all[i].style.opacity = opacity[  i ] ;
  
}
*/

	var divp= document.querySelectorAll("div#container_to_show p 	");
for (i = 0; i < divp.length; i++) {
  divp[i].style.background = background[  i ] ;
  divp[  i  ].style.color = color[  i  ] ; 
}
}







//function for appearing in dark
function afterLimit(  ){
	
	
	var bl= document.querySelectorAll(  "#container_to_show button "   );
	for ( i=0; i < bl.length; i++){
	  bl[ i ].style.opacity= " 1" ;
	
	}
	
	var links = document.querySelectorAll(  "div#container_to_show a "   );
	for ( i=0; i < links.length; i++){
		
			  links[ i ].style.opacity= " 1" ;
		
		}
		
		
	var span= document.querySelectorAll(  "div#container_to_show span "   );
	for ( i=0; i < span.length; i++){
	span[ i ].style.opacity= " 1" ;
	}
	
	
var divp= document.querySelectorAll("div#container_to_show p 	");
for (i = 0; i < divp.length; i++) {
divp[i].style.backgroundColor = "rgba(0, 0, 0, var(--rgba)/10)";
divp[i ].style.zIndex="3";
/*    this snippet can be used for changing color of any particular background

  if(   background[ i ]  == ""  )  {
   ESelectorPropValToNew("div#container_to_show   p"  , "rgb(0, 0, 0)"  , "white"   );
		}
		*/
}

var divspan= document.querySelectorAll("div#container_to_show divspan	");
for( i=0 ; i<divspan.length ; i++ ){
divspan[ i ].style.zIndex="3";

}
/*
var border= document.getElementsByTagName("div");
for (i =0; i< border.length ; i++){
border[  i ].style.borderColor="white";

}   */

}



function beforeLimit( ){

var bl= document.querySelectorAll(  "#container_to_show button "   );
var p =  document.querySelectorAll(  "#container_to_show p "   );
var links = document.querySelectorAll(  "div#container_to_show a "   );
var span= document.querySelectorAll(  "div#container_to_show span "   );
 var myBtn= document.getElementById("myBtn" );
var cV =(1 - currentValue/100).toString(10);
var cVl = ((1 - currentValue/100)*2).toString(10);
for ( i=0; i < bl.length; i++){
	
	if(   bl[  i  ]  !=  myBtn     ){
	bl[ i ].style.position="relative";
	bl[  i  ].style.zIndex= "3";
	bl[ i ].style.opacity= cV ;

}
		
	}

	
for ( i=0; i < links.length; i++){
//	p[ i ].style.position="relative";
	links[  i  ].style.zIndex= "3";
	links[ i ].style.opacity=cVl;
	}
	
for ( i=0; i < p.length; i++){
 p[ i ].style.position="relative";
	p[  i  ].style.zIndex= "1";
	//	p[ i ].style.opacity= cVl;
	}
	
	for ( i=0; i < span.length; i++){
 span[ i ].style.position="relative";
	span[  i  ].style.zIndex= "3";
	span[i ].style.opacity= cV;
	
	}
	
	



}



	
function opaqToOne(   ){


var bl= document.querySelectorAll(  "#container_to_show button "   );
	for ( i=0; i < bl.length; i++){
	  bl[ i ].style.opacity= " 1" ;
	
	}
	
	var links = document.querySelectorAll(  "div#container_to_show a "   );
	for ( i=0; i < links.length; i++){
		
			  links[ i ].style.opacity= " 1" ;
		
		}
		
		
	var span= document.querySelectorAll(  "div#container_to_show span "   );
	for ( i=0; i < span.length; i++){
	span[ i ].style.opacity= " 1" ;
	}


}








/*
function distance( ){
var mainDiv= document.getElementById("container_to_show");
if(    mainDiv.style.marginTop !="180px"   ){
	
	mainDiv.style.marginTop="180px";
	}
else if(        mainDiv.style.marginTop=="180px"    ){

mainDiv.style.marginTop="50px";

}


}
*/

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

  