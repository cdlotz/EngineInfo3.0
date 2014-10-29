//Javascript Multiplier Cory Lotz 9/29/2014  multiplier.js



function multFunct(horsepower){
	//pull the 2 inputs from the document	
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	//print it to console
	console.log(input1);
	console.log(input2);
	
	//make the inputs integers
	input1 = parseFloat(input1);
	input2 = parseFloat(input2);
	
	
	
	//add the inputs
	var result = input1 * input2;
	
	//if the the horsepower var is true divide by constant
	if(horsepower){
		result = result / 5252;
	}
	
	console.log(result);
	//convert result to string
	result = String(result);
	
	//output the result
	document.getElementById("result").innerHTML = result;
	
	
}//end addFunct