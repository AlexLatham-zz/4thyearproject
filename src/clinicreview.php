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
    <script> $(document).ready(function () { buildReview(); }) </script>



    <title>Patient Questionnaire</title>
</head>



<body>




<div class = "container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Preoperative Assessment </h3> <input type = 'image' src = '../img/home.png' onclick = "location.href = 'clinicwelcome.php'"/>
    </div>



    <div class="jumbotron">
        <h1>You have selected patient <?php session_start(); echo $_SESSION['patient']; ?> </h1>

        <input type = 'image' src = '../img/back.png' onclick = "location.href = 'clinicpatients.php'"/>

    </div>

   <ul class ="nav nav-tabs">
       <li class=""active><a data-toggle= "tab" href="#analysis">Patient Analysis</a></li>
       <li><a data-toggle="tab" href="#conditions">Patient Conditions</a></li>
       <li><a data-toggle="tab" href="#questions">Patient Questions</a></li>

   </ul>

    <div class="tab-content">
        <div id = "analysis" class = "tab-pane fade in active">



        </div>

        <div id = "conditions" class = "tab-pane fade">


        </div>




        <div id = "questions" class = "tab-pane fade">
            <table class = "table table-striped" id = "dataTable">
            <thead>
            <tr>
                <th>Question</th>
                <th>Answer</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
            </table>


        </div>


    </div>


</div>

</body>

<script src="../js/bootstrap.min.js"></script>
</html>