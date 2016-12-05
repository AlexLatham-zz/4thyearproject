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

<body onload = createReviewPage()>

<div class = "container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Questionnaire Prototype</h3> <input type = 'image' src = '../img/home.png' onclick = "location.href = 'patientwelcome.php'"/>
    </div>


    <div class="jumbotron" >

       <h1>Please review your answers</h1>
        <h2>If you wish to change an answer please click the "Change" button that appears underneath it.</h2>
        <h2>Once you are confident all the questions are correct please click "Submit" at the bottom of the page to submit your answers and complete the questionnaire.</h2>
    </div>

    <div class = "patientwarning">

        <h2> Please note: You may be asked more questions based on changes to certain answers.</h2>

        </div>

    <br> <br>


    <div id = "resultDisplay">


    </div>

    <div id = "submitFunction" >

        <input type = 'image' src = '../img/submit.png' id = 'reviewsubmit'/>
        </div>




    </div>


</div>



</body>




</html>