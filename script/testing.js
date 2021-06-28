
/*

var check =
 document.getElementById("check").hasAttribute("checked");

document.getElementsbyClass("para").innerHTML  = check;

*/

/*
var x = getElementsByClass("slider");
x.before= function(){
	
	getElementById("over").style.display= "block";
	
	};
	
	*/
	
	document.getElementById("check").addEventListener("click",function(){
		
		activator();
			
		});
	
	function activator() {
  // Get the checkbox
  var checkBox = document.getElementById("check");
  // Get the output text
  var over= document.getElementById("over");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    over.style.display = "block";
    showButton( );
    snackbar("Dark Mode On" );
     
   beforeLimit(  );
var bl= document.querySelectorAll(  "#container_to_show button "   );
	for ( i=0; i < bl.length; i++){
	  bl[ i ].style.opacity= " 0.5" ;
	
	}
	if (  currentValue > limit   )
		{
			ESelectorPropValToNew("div#container_to_show   p"  , "rgb(0, 0, 0)"  , "white"   );
		
		afterLimit(  );
		}
    


  } 
	
		
			else {
    over.style.display = "none";
    snackbar("Dark Mode Off");
    hideSlideBar( );
    hideButton( );
    hideHide( );
 	
	opaqToOne(  );


if (     currentValue> limit   ){
	ESelectorPropValToNew("div#container_to_show   p"  , "rgb(255, 255, 255)"  , "black" );
	original( );
		}
    
  }
}