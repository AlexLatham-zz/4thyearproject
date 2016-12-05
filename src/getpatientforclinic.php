<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 17-Feb-16
 * Time: 12:18 PM
 */
session_start();
$con = mysql_connect("devweb2015.cis.strath.ac.uk","yyb11163","Eed7Obahghie") or ('Failed to connect' . mysql_error());


$currentdb = mysql_select_db('yyb11163', $con) or die('Failed to connect' . mysql_error());

if ($_SESSION['job_type'] == "nurse") {

    $data = array();
    $query = mysql_query("SELECT real_name, patient_status FROM patient_info where clinician_name = '$_SESSION[clinic_user]'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

if ($_SESSION['job_type'] == "anaesthetist") {

    $data = array();
    $query = mysql_query("SELECT real_name, patient_status FROM patient_info where patient_status = 'Red' or patient_status = 'Amber'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

mysql_close($con);

?>