<?php
$host = 'mysql';
$user = 'root';
$pass = 'rootpassword';
$conn = new mysqli($host, $user, $pass, 'colors');

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} else {
	$colorName = $_POST['colorName'];
	$red = $_POST['red'];
	$green = $_POST['green'];
	$blue = $_POST['blue'];
	if ($conn->query("INSERT INTO colors (name, red, green, blue) VALUES ('$colorName', $red, $green, $blue);")) {
		http_response_code(201);
	} else {
		http_response_code(500);
	}
}

