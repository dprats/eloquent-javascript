//EX 12.2

//Write the convenient function removeElement which 
//removes the DOM node it is given as an argument 
//from its parent node.

function removeElement(node){
	if (node.parentNode){
		var parent = node.parentNode;
		parent.removeChild(node);		
	}
}

//test the function

removeElement(document.body.getElementsByTag("BLINK"));