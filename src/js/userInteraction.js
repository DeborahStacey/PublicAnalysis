/*-------
		Purpose: On launch of the script this function is called, calls the reset function to reset everything
		Parameters: NONE
		Return: NONE
	-------*/
	function init (){
		reset();
	}
		
	/*-------
		Purpose: Resets the program to the original state
		Parameters: NONE
		Return: NONE
	-------*/
	function reset () {
		document.getElementById('question').value = "question0";
		document.getElementById('region').value = "region0";
		document.getElementById('catBreed').value = "catBreed0";
		document.getElementById('age').value = "age0";
		document.getElementById('weight').value = "weight0";
		document.getElementById('gender').value = "gender0";
		document.getElementById('height').value = "height0";
		document.getElementById('showResult2').innerHTML = "";
		document.getElementById('1').value = "1";
		document.getElementById('2').value = "1";
	}
	
	/*-------
		Purpose: Testing Jasmine Framework
		Parameters: NONE
		Return: "Hello world!"
	-------*/
	function generate(){
		
		// Setup JSON object based on the input from the user on the interface
		var input =	'{ "interface" : [' +
					'{ "question":"' + document.getElementById('question').value + '" , "region":"'+ document.getElementById('region').value +'" , "catBreed":"'+ document.getElementById('catBreed').value +'" , "age":"'+ document.getElementById('age').value +'" , "weight":"'+ document.getElementById('weight').value +'" , "gender":"'+ document.getElementById('gender').value +'" , "height":"'+ document.getElementById('height').value +'" } ]}';
					
		// Convert from String to JSON Object
   		var jsonObj = JSON.parse(input);
		
		// Display JSON object on the screen 
		document.getElementById('showResult2').innerHTML = jsonObj.interface[0].question + " " + jsonObj.interface[0].region + " " + jsonObj.interface[0].catBreed + " " + jsonObj.interface[0].age + " " + jsonObj.interface[0].weight + " " + jsonObj.interface[0].gender + " " + jsonObj.interface[0].height;
	}