

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
 output.innerHTML = slider.value;    // Display the default slider value

/*Update the current slider value (each time you drag the slider handle)  */

	/*
		
   slider.oninput = function() {
  output.innerHTML = this.value;
   }

    */


//variables declared

var i ; 
var r = document.querySelector(':root');
var dv=document.getElementById("DarknessViewer");  
var  font = document.getElementById("container_to_show");  
var divp= document.querySelectorAll("div#container_to_show p 	");

//var divp= document.querySelectorAll("div#container_to_show p , #container_to_show div	");

//var divp= document.querySelectorAll(" *	");
var divspan= document.querySelectorAll("div#container_to_show divspan	");
var border= document.getElementsByTagName("div");

// function for restoring original conditin
function original(  ){

for (i = 0; i < divp.length; i++) {
  divp[i].style.background = background[  i ] ;
  divp[  i  ].style.color = color[  i  ] ; 
}
}

//function for appearing in dark
function appearInDark(  ){

for (i = 0; i < divp.length; i++) {
divp[i].style.backgroundColor = "rgba(0, 0, 0, var(--rgba)/10)";
divp[i ].style.zIndex="3";
/*    this snippet can be used for changing color of any particular background

  if(   background[ i ]  == ""  )  {
   ESelectorPropValToNew("div#container_to_show   p"  , "rgb(0, 0, 0)"  , "white"   );
		}
		*/
}

for( i=0 ; i<divspan.length ; i++ ){
divspan[ i ].style.zIndex="3";

}
/*
for (i =0; i< border.length ; i++){
border[  i ].style.borderColor="white";

}   */

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

//storing original color and background of required elements
var background = propExtractor(   "div#container_to_show p"  , "background"  );
var color = propExtractor(   "div#container_to_show p"  , "color"  );


var limit = 80;   //set limit after which alert is shown
var checkValue =0 ;   // used to control alert 
var currentValue;

slider.oninput = function(){
	output.innerHTML = this.value;
	  r.style.setProperty('--rgba',this.value/100);
     currentValue= this.value;

	 if (this.value >51 && this.value< limit ){
	
			checkValue=  0   ;
			
	     /*    showText(p);     */
		dv.style.color="white";
		
		//  p.style.zIndex ="3";
		//font.style.zIndex ="1";
 		index(  );
		// ESelectorPropValToNew("div#container_to_show   p"  , "rgb(255, 255, 255)"  , "black"   );	
	
		//setting the  original backgorund and color of para elements
		original(  );
		
		}    
		
		else if (this.value == limit)
			{
			if (this.value > checkValue){
			window.alert("  On increasing Darkness Background Visibility will Decrease .Text will be Still Visible .Black Text will appear White !!");
			}
			}

	else if(this.value> limit){
		
		 checkValue = this.value- (1/2);   // very important line
		
		//font.style.zIndex ="3";
		/*  font.style.setProperty('--container_rgba'  , 1)  ;   */
		
		dv.style.color="white";
    	ESelectorPropValToNew("div#container_to_show   p"  , "rgb(0, 0, 0)"  , "white"   );
	appearInDark( );
		}
		
	else{
		
		checkValue =0;
		dv.style.color= "black";
	/*	p.style.zIndex="-5";   */
	  //	font.style.zIndex ="1";
	index(  );
	ESelectorPropValToNew("div#container_to_show   p"  , "rgb(255, 255, 255)"  , "black"   );
	
	//setting the  original backgorund and color of para elements
	original(  );
		
	}   
	
		};
	
	
	