

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

 /* var color=p.style.color;   */

slider.oninput = function(){
	output.innerHTML = this.value;
	  r.style.setProperty('--rgba',this.value/100);

		 if (this.value >51){
	
	  /*    showText(p);     */
	p.style.color="white";
	//  p.style.zIndex ="3";
	
	}    
	
	
	else{
	
		p.style.color= "black";
	/*	p.style.zIndex="-5";   */
	}   
	
	

	};
	
	
	