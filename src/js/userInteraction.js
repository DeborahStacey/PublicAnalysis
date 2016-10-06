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
		document.getElementById('showResult1').innerHTML = "";
		document.getElementById('showResult2').innerHTML = "";
		document.getElementById('1').value = "1";
		document.getElementById('2').value = "1";
	}

	/*-------
		Purpose: Extension to JavaScript evaluate function, but this allows me to set values in my input boxes before calculations
		Parameters: value ( value to be evaluated ), slot (input box will be set to the evaluated number )
		Return: NONE
	-------*/
	function evaluate(value, slot){
		var result = 0;
		result = eval(value);
		document.getElementById(slot).value = result;

	}

	/*-------
		Purpose: Calculates conversion from Centimetres to Feet, and Feet to Centimetres.
		Parameters: NONE
		Return: NONE
	-------*/
	function calculate(){
		var centimetresInput = document.getElementById('1').value;
		var feetInput = document.getElementById('2').value;
		var centimetresConverted = 0;
		var feetConverted = 0;
		var letters = /^[A-Za-z]+$/; 

		/* Error checking for certain input boundaries, don't allow characters! Needs to be done before EVAL function is used */
		if (centimetresInput.match(letters)){
			document.getElementById('showResult1').innerHTML = "Please use numbers, not characters";
		}else if (centimetresInput == ""){
			document.getElementById('1').value = 1;
			document.getElementById('showResult1').innerHTML = "Input is empty! Put in a number to calculate!";
		}else{
			/* Error checking to see if any calculations need to be solved before we do conversion */
			evaluate(centimetresInput, 1);
			centimetresInput = document.getElementById('1').value;
			
			/* Calculate the conversions */
			feetConverted = centimetresInput * 0.032808;

			/*  Show conversions to the user */
			document.getElementById('showResult1').innerHTML = centimetresInput + "cm = " + feetConverted +"ft";
			
			
		}

		/* Error checking for certain input boundaries, don't allow characters! Needs to be done before EVAL function is used */
		if (feetInput.match(letters)){
			document.getElementById('showResult2').innerHTML = "Please use numbers, not characters";
		}else if (feetInput == ""){
			document.getElementById('2').value = 1;
			document.getElementById('showResult2').innerHTML = "Input is empty! Put in a number to calculate!";
		}else{
			
			/* Error checking to see if any calculations need to be solved before we do conversion */
			evaluate(feetInput, 2);
			feetInput = document.getElementById('2').value;

			/* Calculate the conversions */
			centimetresConverted = feetInput / 0.032808;

			/*  Show conversions to the user */
			document.getElementById('showResult2').innerHTML = feetInput + "ft = " + centimetresConverted +"cm";

		}
	}
	
	
	/*-------
		Purpose: Testing Jasmine Framework
		Parameters: NONE
		Return: "Hello world!"
	-------*/
	function helloWorld() {
		return "Hello world!";
	}