//EX 6.5

//Write a function renderFragment, and use that to 
//implement another function renderParagraph, which 
//takes a paragraph object (with the footnotes already 
//filtered out), and produces the correct HTML element 
//(which might be a paragraph or a header, depending on 
//the type property of the paragraph object).

//This function might come in useful for rendering the 
//footnote references:

function footnote(number) {
  return tag("sup", [link("#footnote" + number,
                          String(number))]);
}
//A sup tag will show its content as 'superscript', 
//which means it will be smaller and a little higher 
//than other text. The target of the link will be 
//something like "#footnote1". Links that contain a 
//'#' character refer to 'anchors' within a page, and 
//in this case we will use them to make it so that 
//clicking on the footnote link will take the reader 
//to the bottom of the page, where the footnotes live.

//The tag to render emphasised fragments with is em, 
//and normal text can be rendered without any extra tags.

//SOLUTION

//HELPER FUNCTIONS

function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}



//MAIN FUNCTIONS

function renderFragment(fragment){

		//checking what type of tag this fragment
		//should have
		if (fragment.type == 'emphasised'){
			return tag('em', fragment.content);

		} else if (fragment.type == 'reference'){
			return tag('sup', fragment.content);

		} else if (fragment.type == 'normal'){
			return tag('p', fragment.content);
		}
}

//Example of a paragraph object:
//par.content is an array full of objects which are fragments
//

function renderParagraph(par){
	return tag(par.type, map(renderFragment, par.content));
	//we can also write this using native array methods as
	// return tag(par.type, (par.content).map(renderFragment));
}

//TEST OBJECT

var x = {type: 'body', content: [
				{type: 'reference', content: 12345},
				{type: 'emphasised', content: 'EMPHASIZE ME'},
				{type: 'normal', content: 'Im normal'}
				]};

console.log(renderParagraph(x));