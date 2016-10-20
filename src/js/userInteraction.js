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
	
	function generate(){
		alert("Generate...");
		var txtFile = "test.txt";
   		var file = new File(txtFile,"write");
   		var str = JSON.stringify({ "question": document.getElementById('question').value, "region": document.getElementById('region').value });

   		file.open(); 
   		file.writeline(str);
   		file.close();
   		alert("Done!");
	}
	
	
	/*-------
		Purpose: Testing Jasmine Framework
		Parameters: NONE
		Return: "Hello world!"
	-------*/
	function helloWorld() {
		return "Hello world!";
	}