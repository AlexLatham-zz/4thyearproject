<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 30-Jan-16
 * Time: 1:49 PM
 */

$con = mysql_connect("devweb2015.cis.strath.ac.uk","yyb11163","Eed7Obahghie") or ('Failed to connect' . mysql_error());



$currentdb = mysql_select_db('yyb11163', $con) or die('Failed to connect' . mysql_error());
//mysqli_select

$patientusername = $_POST['username'];
$patientpassword = $_POST['password'];

/**
 *
 */
/*function checkLogin() {*/


   session_start();
    ini_set('session.gc_maxlifetime', 3600);


    $query = mysql_query("SELECT * FROM patient_info where patient_name = '$_POST[username]' AND patient_pass = '$_POST[password]'");
    $row = mysql_fetch_array($query) or die(mysql_error());


    if(!empty($row['patient_name']) AND !empty($row['patient_pass'])) {
        $_SESSION['patient_name'] = $row['patient_name'];
        header("Location: patientwelcome.php");
    } else {
        header("Location: patientlogin.php");
    }




/*}*/

/*if(isset($_POST['Submit'])) {
    checkLogin();
}*/


?>