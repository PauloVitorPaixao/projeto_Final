<?php
$con = new mysqli('localhost', 'root', '', 'projetofinal');
header('Access-Control-Allow-Origin: http://localhost:8100');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Max-Age: 86400');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $email = $data['email'];
    $pass = md5($data['password']);
    $_SESSION['email'] = "paulovitorpro021@gmail.com";
    $query = mysqli_query($con, "SELECT * FROM users where email = '$email' AND password = '$pass'");
     if($query -> num_rows > 0){
         $res = array('status' => 200);
     }else{
         $res = array ('status' => 500, 'mess' => 'username or password ins correct');
     }
     echo json_encode($res);
}








?>