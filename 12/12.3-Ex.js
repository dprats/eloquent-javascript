//Ex 12.3

// The function makeTable takes two arrays as arguments. 
// The first contains the JavaScript objects that it 
// should summarise, and the second contains strings, 
// which name the columns of the table and the properties 
// of the objects that should be shown in these columns. 
// For example, the following will produce the table 
// above:

// makeTable([{Tree: "Apple", Flowers: "White"},
//            {Tree: "Coral", Flowers: "Red"},
//            {Tree: "Pine",  Flowers: "None"}],
//           ["Tree", "Flowers"]);

<table>
  <tbody>
    <tr> <th>Tree </th> <th>Flowers</th> </tr>
    <tr> <td>Apple</td> <td>White  </td> </tr>
    <tr> <td>Coral</td> <td>Red    </td> </tr>
    <tr> <td>Pine </td> <td>None   </td> </tr>
  </tbody>
</table>

function makeTable(data, columns){

	var headRow = dom("TR");
	
	//generates  <tr> <th>Tree </th> <th>Flowers</th> </tr>
	forEachIn(columns, function(name){
		headRow.appendChild(dom("TH",null,name));
	});

	//generate rows below
	forEachIn(data, function(obj){
		var row = dom("TR");

		forEachIn()

		row.appendChild(dom("TD",null,String(obj[name])));
	});



}