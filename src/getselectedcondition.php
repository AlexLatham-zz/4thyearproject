<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 16-Mar-16
 * Time: 3:53 PM
 */

$con = mysql_connect("devweb2015.cis.strath.ac.uk","yyb11163","Eed7Obahghie") or ('Failed to connect' . mysql_error());


$currentdb = mysql_select_db('yyb11163', $con) or die('Failed to connect' . mysql_error());


$condname = $_POST['conditionname'];

/* Receive the variable from the AJAX call and depending on the condition name
   select different information from the database */




if ($condname == "Hypertension") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_1 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);


}

else if ($condname == "Coronary Artery Disease") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_2, question_3, question_4, question_4a FROM patient_info WHERE  question_2 = 'Yes' OR question_3 = 'Yes' OR question_4 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);


}

else if ($condname == "Angina") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_3 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);


}

else if ($condname == "Heart Attack") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_4a FROM patient_info WHERE question_4 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Renal Disease") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_5, question_18, question_19 FROM patient_info WHERE question_5 = 'Yes' OR question_18 = 'Yes' OR question_19 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);


}

else if ($condname == "Kidney Disease") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_5 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Anaesthetic") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_6, question_9 FROM patient_info WHERE question_6 = 'Yes' OR question_9 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Arrhythmia") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_7, question_20, question_21 FROM patient_info WHERE question_7 = 'Yes' OR question_20 = 'Yes' OR question_21 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Cerebrovascular Disease") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_8 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Epilepsy") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_10 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Thyroid Disease") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_11 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Liver Disease/Jaundice") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_13 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Heart failure") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_14 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "COPD/Asthma") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_15, question_24 FROM patient_info WHERE question_15 = 'Yes' OR question_24 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Asthma") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_15 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Diabetes") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_16a, question_16b FROM patient_info WHERE question_16 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Previous Heart Surgery") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_17b, question_17c, question_17d FROM patient_info WHERE question_17a = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Previous Brain Surgery") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_17f, question_17g, question_17h FROM patient_info WHERE question_17e = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Dialysis") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_19 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Slow heart beat") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_20 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Abnormal Platelet Count") {

    $data = array();
    $query = mysql_query("SELECT real_name, question_23a FROM patient_info WHERE question_23 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Pacemaker") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_21 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Low Blood/Anemia") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_22 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}

else if ($condname == "Bronchitis") {

    $data = array();
    $query = mysql_query("SELECT real_name FROM patient_info WHERE question_24 = 'Yes'");
    while ($row = mysql_fetch_row($query)) {
        $data[] = $row;
    }
    echo json_encode($data);

}


mysql_close($con);

/*    conditions.push("Hypertension");
conditions.push("Coronary Artery Disease");
conditions.push("Angina");
conditions.push("Heart Attack");
conditions.push("Renal Disease");
conditions.push("Kidney Disease");
conditions.push("Anaesthetic");
conditions.push("Arrhythmia");
conditions.push("Cerebrovascular Disease");
conditions.push("Epilepsy");
conditions.push("Thyroid Disease");
conditions.push("Liver Disease/Jaundice");
conditions.push("Heart failure");
conditions.push("COPD/Asthma");
conditions.push("Asthma");
conditions.push("Diabetes");
conditions.push("Previous Heart Surgery");
conditions.push("Previous Brain Surgery");
conditions.push("Dialysis");
conditions.push("Slow heart beat");
conditions.push("Abnormal Platelet Count");
conditions.push("Pacemaker");
conditions.push("Low Blood/Anemia");
conditions.push("Bronchitis");*/
?>







