<?php
include_once "./conn.php";
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods:*");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// $dbsn = "localhost";
// $dbun = "root";
// $password = "";
// $dbname = "news";

// $conn = mysqli_connect($dbsn,$dbun,$password,$dbname);
// if($conn)
// {}
// else
// {
//     echo "connection failed";
// }

// $name = $_REQUEST['name'];
// $email = $_REQUEST['email'];
// $phone = $_REQUEST['phone'];
// $pass = $_REQUEST['pass'];

$fname = $_REQUEST['first_name'];
$lname = $_REQUEST['last_name'];
$email = $_REQUEST['email'];
$pass = $_REQUEST['password'];
$phone = $_REQUEST['phone'];


$sql = "INSERT INTO users(first_name,last_name,email,password,phone) VALUES('$fname', '$lname', '$email', '$pass', '$phone')";

mysqli_query($conn,$sql);

$conn->close();

?>