

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
 /* var color=p.style.color;   */
var limit = 80;
var checkValue =0 ;
slider.oninput = function(){
	output.innerHTML = this.value;
	  r.style.setProperty('--rgba',this.value/100);

		 if (this.value >51 && this.value< limit ){
	
			checkValue=  0   ;
			
	  /*    showText(p);     */
	p.style.color="white";
	//  p.style.zIndex ="3";
	
	font.style.zIndex ="-5";
	
		}    
		
		else if (this.value == limit)
			{
			if (this.value > checkValue){
			window.alert("  On increasing Darkness Background Visbility will Decrease .Only Text will be Visible !!");
			}
			}

	else if(this.value> limit){
		
		 checkValue = this.value- (1/2);
		
		font.style.zIndex ="3";
		/*  font.style.setProperty('--container_rgba'  , 1)  ;   */
		
		p.style.color="white";
		
		}
		
	else{
		
		checkValue =0;
	
		p.style.color= "black";
	/*	p.style.zIndex="-5";   */
	  
	font.style.zIndex ="-5";
	
	}   
	
	

	};
	
	
	