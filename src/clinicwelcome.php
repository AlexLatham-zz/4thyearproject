<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="../css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/custom.css">
    <script src= "../js/jquery-1.11.3.min.js"></script>
    <script src="../js/script.js"></script>
    <script src="../js/jstorage.js"></script>
    <script src="../js/jstorage.min.js"></script>

    <title>Patient Questionnaire</title>
</head>



<body>




<div class = "container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Preoperative Assessment</h3>
    </div>



    <div class="jumbotron">
        <h1>Welcome</h1>

        <h2> You will find below a list of your selected patients. </h2>
        <h2> Please click the "View" button after the name of the patient you wish to view and you will be taken to their answers.</h2>

    </div>

    <div class="row marketing">
        <div class="col-lg-6">

            <input type = "image" src = "../img/patientanalysis.png" id = "indexpagebutton" onclick = "location.href = 'clinicpatients.php'"/>
        </div>


        <div class="col-lg-6">



            <input type = "image" src = "../img/createlogin.png" id = "indexpagebutton" onclick = "location.href= 'clinicnewlogin.php'"/>

        </div>



    </div>



</div>

</body>

<script src="../js/bootstrap.min.js"></script>
</html>