<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 24-Feb-16
 * Time: 3:23 PM
 */

$con = mysql_connect("devweb2015.cis.strath.ac.uk","yyb11163","Eed7Obahghie") or ('Failed to connect' . mysql_error());



$currentdb = mysql_select_db('yyb11163', $con) or die('Failed to connect' . mysql_error());

$name = $_POST['pname'];
$password = $_POST['pass'];
$username = $_POST['puser'];
$age = $_POST['page'];
$nurse = $_POST['pnurse'];

$query = mysql_query("INSERT INTO patient_info (real_name, patient_name, patient_pass, patient_age, clinician_name)
 VALUES ('$name', '$username', '$password', $age, '$nurse')");

mysql_close($con);
?>