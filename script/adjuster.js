

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
//var divp= document.querySelectorAll("div#container_to_show p 	");

//var divp= document.querySelectorAll("div#container_to_show p , #container_to_show div	");

//var divp= document.querySelectorAll(" *	");
//var divspan= document.querySelectorAll("div#container_to_show divspan	");
//var border= document.getElementsByTagName("div");
//var all = document.querySelectorAll(  " div#container_to_show *  "   );


//storing original color and background of required elements used inside original function inmerge.js
var background = propExtractor(   "div#container_to_show p"  , "background"  );
var color = propExtractor(   "div#container_to_show p"  , "color"  );
var opacity =propExtractor(   "div#container_to_show * "  , "opacity"  );

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
 		
		beforeLimit( );
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
	
	afterLimit( );
		}
		
	else{
		
		checkValue =0;
		dv.style.color= "black";
	/*	p.style.zIndex="-5";   */
	  //	font.style.zIndex ="1";
	
	beforeLimit( );
	ESelectorPropValToNew("div#container_to_show   p"  , "rgb(255, 255, 255)"  , "black"   );
	
	//setting the  original backgorund and color of para elements
	original(  );
		
	}   
	
		};
		
		


	
	
	