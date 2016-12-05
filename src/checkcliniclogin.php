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

$clinicusername = $_POST['username'];
$clinicpassword = $_POST['password'];

/**
 *
 */
/*function checkLogin() {*/


    session_start();
    ini_set('session.gc_maxlifetime', 3600);

    $query = mysql_query("SELECT * FROM clinic_info where clinic_user = '$_POST[username]' AND clinic_pass = '$_POST[password]'");
    $row = mysql_fetch_array($query) or die(mysql_error());


    if(!empty($row['clinic_user']) AND !empty($row['clinic_pass'])) {
        $_SESSION['clinic_user'] = $row['clinic_user'];
        $_SESSION['job_type'] = $row['job_type'];
        header("Location: clinicwelcome.php");
    } else {
        header("Location: cliniclogin.php");
    }




/*}*/

/*if(isset($_POST['Submit'])) {
    checkLogin();
}*/


?>