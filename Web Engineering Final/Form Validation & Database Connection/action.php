<?php
/**
 * User: MD. Eyakub Sorkar
 * Date: 4/20/2018
 * Time: 2:47 AM
 */


$host = 'localhost';
$rootUser = 'root';
$dbPass = '';
$dbName = 'login';

//create connection
$conn = mysqli_connect($host, $rootUser, $dbPass, $dbName);

//check connection
if(!$conn){
    die("connection failed: ".mysqli_connect_error());
}


$username = $password = "";

if(isset($_POST['submit'])){
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $username = check_data($_POST['username']);
        $password = check_data($_POST['password']);
        if(strlen($password) > 6){
            if(mysqli_query($conn, $insertSql)){
                echo "Registration successful";
            }
        }else{
            die("password is too short");
        }
    }
}


function check_data($data){
    $data = trim($data);
    $data = stripcslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$insertSql = "INSERT INTO test_reg(username, password) VALUES ('$username', '$password')";

mysqli_close($conn);
