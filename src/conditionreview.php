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
    <script> $(document).ready(function () { fillConditionPage(); }) </script>
    <title>Patient Questionnaire</title>

</head>

<body>

<div class = "container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Questionnaire Prototype</h3> <input type = 'image' src = '../img/home.png' onclick = "location.href = 'clinicwelcome.php'"/>
    </div>


    <div class="welcometext" >
        <div id = "conditionheader">
        <h1>See below the table of patients with your selected condition: </h1>
            </div>
        <input type = 'image' src = '../img/back.png' onclick = "location.href = 'clinicpatients.php'"/>
    </div>


 <div id = "conditionTable">

 </div>






</div>
</body>




</html>