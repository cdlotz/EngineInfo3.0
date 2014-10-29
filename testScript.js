//test JavaScript


function testFunction(){
				console.log("test");
			}//end testFunct



function addFunct(){
	//pull the 2 inputs from the document	
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	//print it to console
	console.log(input1);
	console.log(input2);
	
	//make the inputs integers
	input1 = parseInt(input1);
	input2 = parseInt(input2);
	
	//add the inputs
	var result = input1 + input2;
	
	console.log(result);
	//convert result to string
	result = String(result);
	
	//output the result
	document.getElementById("result").innerHTML = result;
	
	
}//end addFunct