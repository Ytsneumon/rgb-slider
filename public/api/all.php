<?php

$host = 'mysql';
$user = 'root';
$pass = 'rootpassword';
$conn = new mysqli($host, $user, $pass, 'colors');

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} else {
	$result = mysqli_query($conn, "SELECT * FROM colors;");
	if ($result) {
		$rows = $result->fetch_all(MYSQLI_ASSOC);
		echo json_encode($rows);
	} else {
		http_response_code(500);
	}
}
