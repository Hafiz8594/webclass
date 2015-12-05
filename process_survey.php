<html>
	<head>
		<title>Animal Kingdom Survey</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />		
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	
	<body>
		<center>
		<h2>Animal Kingdom Survey</h2>
		<br />
		Thanks for submitting your survey! Below are some comments submitted by others.
		<br /><br />



<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$comment = $_POST['comment'];
	$rating = $_POST['rating'];

	$dbc = mysqli_connect('localhost', 'root', '', 'animal_survey')
				or die('Error connecting to MySQL server.');
				
	$query = "INSERT INTO survey_data (name, email, comment, rating)" .
			"VALUES ('$name', '$email', '$comment', '$rating')";

	$result = mysqli_query($dbc, $query)
				or die('Error querying database');


	echo'<table border=1>
	<tr><th>Name</th><th>Comment</th><th>Rating</th></tr>';

	// Create SQL statement
	$query2 = "SELECT * FROM survey_data";
	// Execute SQL statement
	if (!($result2 = @ mysqli_query ($dbc, $query2)))
	  echo 'Error querying database...';
	// Display results
	while ($row = @ mysqli_fetch_array($result2))
	  echo "<td>{$row["name"]}</td>
	<td>{$row["comment"]}</td>
	<td>{$row["rating"]}</td></tr>";

	mysqli_close($dbc);

?>	
	</table>
	<br />
	To go back, please click <a href="survey.html">here.</a></center>

	</body>
</html>