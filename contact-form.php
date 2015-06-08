<?php
var_dump($_POST);

//collect and sanitize form inputs
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);    
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT;
$company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
$budget = $_POST['budget'];
$budget = $_POST['budget'];
?>