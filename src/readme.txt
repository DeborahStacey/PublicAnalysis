1. Import jquery javacsript library & bootstrap CSS
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" crossorigin="anonymous">
					
		<script src="jQuery/jQuery-2.1.3.min.js"></script>

2. There are 2 functions (read_json & save_json)
	1) read_json function
		- read content from inputFile.json
		- show contet as ul/li on div
		- set every value of content into text-field
	2) save_json
		- read every value of text-field to save content
		- set values into json value
		- you can save content using this json value
			you can see this line:
				var content = JSON.stringify(json_value);
3. Output Values on Div
	1) Read Successful
		this shows contents it's getted from json file
	
	2) Will be written
		this shows contents it will be written.

*) save function is not implemented but content is exist.