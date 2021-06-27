
/* About  

this  file contains thw basic code used to scroll any element. 
thencode is alredy included in nav.js  hence no need to include this file
in html cide or it can be commented in nav.html  */





/*
var mybutton = document.getElementById("myBtn");
var element = document.querySelectorAll(".scrollable");
element= Array.from( element ); 
element.forEach(p=>{    X( )            });
var i;

function X( ){
for(i=0 ; i < element.length ; i++){
// When the user scrolls down 20px from the top of the document, show the button
element[i ].onscroll = function() {
  if (element[ i].scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
}     }
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
  element.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/




var element;
var  mybutton = document.getElementById("myBtn");

function scrolled (id ){
	
element = document.getElementById(id );

// When the user scrolls down 20px from the top of the document, show the button
element.onscroll = function() {
  if ( element.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
  element.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


