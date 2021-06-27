/*        attempt to remove JS from nav.html
tablinks= document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
	
	tablinks[i].addEventListener("click", function(	){
	
	openCity();
	
	
	});
	
	
	}
	
		*/
		
		
		
		
//code  for closing tabcontent		

var j;
var topright=	document.getElementsByClassName("topright");	
  for (j= 0; j < topright.length; j++) {
topright[j].addEventListener("click", function(){
	
var	tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
  
    tabcontent[i].style.display = "none";
}	
	
var tablinks= document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

});
}
				
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].scrollTop=0;   
    tabcontent[i].style.display = "none";

    }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }



  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";


mybutton.style.display="none";

/*
 topFunction( );      
*/
}


function showTab( ){
	var icon= document.getElementById("icon");
	var tab= document.getElementById("tab");
	
	if(tab.style.display=="none"){
	tab.style.display="block";
	
	icon.innerHTML="<--";
		 // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.width= "70%";
  }
	}
	else{
	  
		tab.style.display="none";
		 // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.width= "100%";
  }
	
	
	}
	
	}
	
	
	
	var elementStorer;
var  mybutton = document.getElementById("myBtn");

function scrolled (id ){
	
var element = document.getElementById(id );


// When the user scrolls down 20px from the top of the document, show the button
element.onscroll = function() {
  if ( element.scrollTop > 20) {
    mybutton.style.display = "block";
   elementStorer = element;
  } else {
    mybutton.style.display = "none";
  }
};
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
  elementStorer.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*

var k;
var scrollable =document.getElementsByClassName("scrollable");
scrollableArray= Array.from( scrollable); 
for (k= 0;  k< scrollable.length; k++) {
scrollable[k].addEventListener("scroll", function(){
	
	
	scrolled(scrollableArray[k]);
	
	

});
}


*/