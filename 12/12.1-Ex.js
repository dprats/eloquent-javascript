//Ex 12.1

//Write a function "asHTML" which, when given a DOM node, 
//produces a string representing the HTML text for that 
//node and its children. You may ignore attributes, 
//just show nodes as <nodename>. The escapeHTML function 
//from chapter 10 is available to properly escape the 
//content of text nodes.

// Hint: Recursion!

function asHTML(node, str){

	//if we are at a node which is text, return the text
	if (node.nodeType ==3){
		return str += node.nodeValue;
	}
	//get possibe strings from child nodes
	for (var child in node.childNodes){
		return str+= asHTML(child);
	}

}

function asHTML(node){

	if (isTextNode(node)){
		return escapeHTML(node.nodeValue);
	} else if (node.childNodes.length == 0){
		return "<" + node.nodeName + "/>";
	} else {
		return "<" + node.nodeName + ">" +
						map(asHTML, node.childNodes).join("") +
						"</" +node.nodeName + ">";
	}

}
//test function 
print(asHTML(document.body));