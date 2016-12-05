<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 15-Feb-16
 * Time: 1:51 PM
 */

session_start();
$con = mysql_connect("devweb2015.cis.strath.ac.uk","yyb11163","Eed7Obahghie") or ('Failed to connect' . mysql_error());



$currentdb = mysql_select_db('yyb11163', $con) or die('Failed to connect' . mysql_error());

$patient_name = $_SESSION['patient_name'];
$question1 = $_POST['q1'];
$question2 = $_POST['q2'];
$question3 = $_POST['q3'];
$question4 = $_POST['q4'];
$question4a = $_POST['q4a'];
$question5 = $_POST['q5'];
$question6 = $_POST['q6'];
$question7 = $_POST['q7'];
$question8 = $_POST['q8'];
$question9 = $_POST['q9'];
$question10 = $_POST['q10'];
$question11 = $_POST['q11'];
$question12 = $_POST['q12'];
$question13 = $_POST['q13'];
$question14 = $_POST['q14'];
$question15 = $_POST['q15'];
$question16 = $_POST['q16'];
$question16a = $_POST['q16a'];
$question16b = $_POST['q16b'];
$question17 = $_POST['q17'];
$question17a = $_POST['q17a'];
$question17b = $_POST['q17b'];
$question17c = $_POST['q17c'];
$question17d = $_POST['q17d'];
$question17e = $_POST['q17e'];
$question17f = $_POST['q17f'];
$question17g = $_POST['q17g'];
$question17h = $_POST['q17h'];
$question18 = $_POST['q18'];
$question19 = $_POST['q19'];
$question20 = $_POST['q20'];
$question21 = $_POST['q21'];
$question22 = $_POST['q22'];
$question23 = $_POST['q23'];
$question23a = $_POST['q23a'];
$question24 = $_POST['q24'];

$patientstatus = $_POST['status'];

$query = mysql_query("UPDATE patient_info SET question_1 = '$question1', question_2 = '$question2', question_3 = '$question3', question_4 = '$question4', question_4a = '$question4a',
question_5 = '$question5', question_6 = '$question6', question_7 = '$question7', question_8 = '$question8', question_9 = '$question9', question_10 = '$question10',
 question_11 = '$question11', question_12 = '$question12', question_13 = '$question13', question_14 = '$question14', question_15 = '$question15',
 question_16 = '$question16', question_16a = '$question16a', question_16b = '$question16b', question_17 = '$question17', question_17a = '$question17a',
 question_17b = '$question17b', question_17c = '$question17c', question_17d = '$question17d', question_17e = '$question17e', question_17f = '$question17f',
 question_17g = '$question17g', question_17h = '$question17h', question_18 = '$question18', question_19 = '$question19', question_20 = '$question20', question_21 = '$question21',
  question_22 = '$question22', question_23 = '$question23', question_23a = '$question23a', question_24 = '$question24', patient_status = '$patientstatus'
where patient_name = '$patient_name'");

mysql_close($con);
?>
