<?php
	require_once(__DIR__."/databases.php"); 

	$post_json = file_get_contents("php://input");
	$post = json_decode($post_json, true);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3b1546898f09054d066d42cd8962e724d5973757
	$userID = $_GET['user_id'];
	$dropID = $_GET['dropID'];
	$timestamp = CURRENT_TIMESTAMP;

	$query = "SELECT * FROM users WHERE user_id = $userID AND drop_id = $dropID";
	if(existsInDatabase($query)){
		echo 200;
	} else {
		$add_query = "INSERT INTO favorites(user_id, drop_id) VALUES('$userID', '$dropID', 'timestamp')";
		addToDatabase($add_query);
		echo 100;
	}

<<<<<<< HEAD
=======
>>>>>>> bcd7dcbd99881bc0f8d772174b721f66f206f7e4
=======

>>>>>>> 3b1546898f09054d066d42cd8962e724d5973757
?>