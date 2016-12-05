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
    <script src="../js/jquery-1.11.3.min.js"></script>
    <script src="../js/script.js"></script>
    <title>Patient Questionnaire</title>
</head>


<body>

<div class="container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Preoperative Assessment</h3> <input type = 'image' src = '../img/home.png' onclick = "location.href = 'clinicwelcome.php'"/>
    </div>


    <div class="jumbotron">
        <h1>Please enter in the details of the patient you wish to add to the system.</h1>

        <h2> Once you have entered all the details, click create to create the patient </h2>

    </div>


    <form class="form-horizontal" id = "createlogin">
        <div class="form-group">
            <label for="inputName" class="col-sm-2 control-label">Patient Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="patientname" placeholder="Name">
            </div>
        </div>
        <div class="form-group">
            <label for="inputUser" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="patientpassword" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <label for="inputUsername" class="col-sm-2 control-label">Patient Username</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="patientuser" placeholder="Username">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAge" class="col-sm-2 control-label">Age</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="patientage" placeholder="Age">
            </div>
        </div>
        <div class="form-group">
            <label for="inputNurse" class="col-sm-2 control-label">Patient Nurse</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="patientnurse" placeholder="Nurse">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <input type = "image" src = "../img/create.png" id = "submitbutton"  onclick = "createNewLogin()"/>
            </div>
        </div>
    </form>




</div>

</body>

<script src="../js/bootstrap.min.js"></script>
</html>