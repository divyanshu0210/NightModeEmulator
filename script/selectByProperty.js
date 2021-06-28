function ESelectorPropValToNew(selector , value , newValue){
// Get all  elements 
let spans = document.querySelectorAll(selector); 

// Convert  element nodeslist to array
spans = Array.from( spans ); 

// Filter spans array
// Get CSS properties object of selected element - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

let arr = spans.filter( p=> String( document.defaultView.getComputedStyle( p, null ).color ) == value );

// Change  color of matched  elements
arr.forEach( p => {   p.style.color = newValue;});


}
