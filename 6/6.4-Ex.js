//Ex 6.4

// Looking back at the example HTML document if 
// necessary, write an image function which, when 
// given the location of an image file, will create an 
// img HTML element.

//EXAMPLE FROM HTML document

//SOLUTION

function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}

function image(alt, src){
	return tag('img',[],{src: src, alt: src});
}

console.log(image('image1', 'http://www.google.com'));