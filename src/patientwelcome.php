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



<body onload = addQuestions()>




<div class = "container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Preoperative Assessment</h3>
    </div>



    <div class="jumbotron">
        <h1>Welcome</h1>

        <h2> This website will ask you a number of questions which are important for your upcoming surgical procedure. </h2>

    </div>

    <div class="row marketing">
        <div class="col-lg-6">

            <div class="welcometext">
                <h3>On these next few pages, you will be asked a series of questions about your current physical health and any problems you may have had in the past. </h3>
                <br>
                <h3>Please answer these questions as correctly as possible.</h3>
                <br>
                <h3>To answer the question, please select the button next to the answer, then click next to proceed to the next question.</h3>
                <br>
                <h3>Click "Start" on the right to begin the questionnaire.</h3>
            </div>
        </div>


        <div class="col-lg-6">

            <br>  <br>  <br>  <br>  <br>  <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>

            <input type = "image" src = "../img/start.png" id="startbutton" onclick = "location.href= '../src/questionpage1.php'"/>

        </div>



    </div>



</div>

</body>

<script src="../js/bootstrap.min.js"></script>
</html>