

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
 output.innerHTML = slider.value;    // Display the default slider value

/*Update the current slider value (each time you drag the slider handle)  */

	/*
		
			slider.oninput = function() {
  output.innerHTML = this.value;
}

*/



var r = document.querySelector(':root');
   var p=document.getElementById("DarknessViewer");  
var  font = document.getElementById("container_to_show");  

//var  font = document.querySelectorAll("div#container_to_show   span");  

 /* var color=p.style.color;   */
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
	p.style.color="white";
	//  p.style.zIndex ="3";
	
	font.style.zIndex ="-5";
ESelectorPropValToNew("div#container_to_show   p"  , "rgb(255, 255, 255)"  , "black"   );	
		}    
		
		else if (this.value == limit)
			{
			if (this.value > checkValue){
			window.alert("  On increasing Darkness Background Visibility will Decrease .Text will be Still Visible .Black Text will appear White !!");
			}
			}

	else if(this.value> limit){
		
		 checkValue = this.value- (1/2);   // very important line
		
		font.style.zIndex ="3";
		/*  font.style.setProperty('--container_rgba'  , 1)  ;   */
		
		p.style.color="white";
		
		
		ESelectorPropValToNew("div#container_to_show   p"  , "rgb(0, 0, 0)"  , "white"   );
		
		}
		
	else{
		
		checkValue =0;
	
		p.style.color= "black";
	/*	p.style.zIndex="-5";   */
	  
	font.style.zIndex ="-5";
	
	ESelectorPropValToNew("div#container_to_show   p"  , "rgb(255, 255, 255)"  , "black"   );
	
	}   
	
	

	};
	
	
	