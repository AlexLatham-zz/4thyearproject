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

<body onload = "createQuestionPage(3)">

<div class = "container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Questionnaire Prototype </h3> <input type = 'image' src = '../img/home.png' onclick = "location.href = 'patientwelcome.php'"/>
    </div>


    <div class="jumbotron" id = 'parent' >
        <div class = 'hover_over'> <h2> Angina - or angina pectoris (Latin for squeezing of the chest) - is chest pain, discomfort, or tightness that occurs when an area of the heart muscle is receiving decreased blood oxygen supply </h2></div>
        <div class = 'normal'>
        <div id = "question_text">

        </div>
            </div>
    </div>


    <div class="row marketing">
        <div class="col-lg-6">

            <form id = "buttons"></form>
            <img src = "../img/heartpainmedication.jpg" id="pageimage" >
        </div>


        <div class="col-lg-6">

            <div id = "answer_text"></div>
            <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
            <input type = 'image' src = '../img/next.png' id = 'nextPage'/>
            <input type = 'image' src = '../img/previous.png' id = 'backPage' onclick = "location.href = 'questionpage2.php'"/>

        </div>



    </div>


    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="70"
             aria-valuemin="0" aria-valuemax="100" style="width:8.6%">
            <span class="sr-only">50% Complete</span>
        </div>
    </div>



</div>
</body>




</html>
