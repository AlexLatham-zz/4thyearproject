<?php


session_start();

$con = mysql_connect("devweb2015.cis.strath.ac.uk","yyb11163","Eed7Obahghie") or ('Failed to connect' . mysql_error());


$currentdb = mysql_select_db('yyb11163', $con) or die('Failed to connect' . mysql_error());

$patientname = $_POST['patientname'];
$_SESSION['patient'] = $_POST['patientname'];




$query = mysql_query("SELECT question_1, question_2, question_3, question_4, question_4a, question_5, question_6, question_7, question_8, question_9,
                      question_10, question_11, question_12, question_13, question_14, question_15, question_16, question_16a, question_16b, question_17,
                      question_17a, question_17b, question_17c, question_17d, question_17e, question_17f, question_17g, question_17h, question_18, question_19,
                      question_20, question_21, question_22, question_23, question_23a, question_24, patient_status, patient_age, real_name FROM patient_info where real_name =  '$_POST[patientname]'");
$data = mysql_fetch_row($query) or die(mysql_error());
mysql_close($con);
echo json_encode($data);


?>