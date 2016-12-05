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
    <title>Patient Questionnaire</title>
</head>


<body>

<div class="container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Preoperative Assessment</h3>
    </div>


    <div class="jumbotron">
        <h1>Clinicians</h1>

        <h2> Please enter your username and password then click Submit to proceed. </h2>

        <h2> Not a clinician? </h2> <input type = 'image' src = '../img/clickhere.png' onclick = "location.href = 'patientlogin.php'"/>

    </div>

    <div class="row marketing">
        <div class="col-lg-6">
            <div class="jumbotron">
            <form name="form1" method="post" action="checkcliniclogin.php">
                <h2>Username:</h2>
                <input id = "logininput" type="text" name="username" placeholder="Username" required/>
                <br>
                <h2>Password:</h2>
                <input id = "logininput" type="password" name="password" placeholder="Password" required/>
        </div>
</div>

        <div class="col-lg-6">
            <br><br><br><br><br><br><br><br><br><br><br><br>
            <input type='image' src = '../img/submit.png'  value = "Submit" name="Submit" id = "loginsubmit" >
            </form>
        </div>


    </div>

</div>

</body>