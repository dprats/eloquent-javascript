//Ex 10.4

// write a new function escapeHTML, which does the same 
// thing, but only calls replace once.

function escapeHTML(text) {
  var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                      ["<", "&lt;"], [">", "&gt;"]];

  forEach(replacements, function(replace) {
    text = text.replace(replace[0], replace[1]);
  });
  return text;
}

//SOLUTION

function escapeHTML(text){

	var replacements = {"&": "&amp;", "\"": "&quot;",
                      "<": "&lt;", ">": "&gt;"};
  return text.replace(/[<>&"]/g,function(character){
  	return replacements[character];
  });
}


console.log(escapeHTML("The 'pre-formatted' tag is written \"<pre>\"."));