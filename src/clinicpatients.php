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
    <script src="../js/jstorage.js"></script>
    <script src="../js/jstorage.min.js"></script>

    <title>Patient Questionnaire</title>
</head>


<body onload=createClinicWelcome()>


<div class="container">
    <div class="header clearfix">
        <h3 class="text-muted">Alex Latham | Preoperative Assessment</h3> <input type='image' src='../img/home.png'
                                                                                 onclick="location.href = 'clinicwelcome.php'"/>
    </div>


    <div class="jumbotron">
        <h1>Welcome</h1>

        <h2> You will find below a list of your selected patients. </h2>

        <h2> Please click the "View" button after the name of the patient you wish to view and you will be taken to
            their answers.</h2>

    </div>


    <ul class="nav nav-tabs">
        <li class="" active><a data-toggle="tab" href="#selectpatient">Select by Patient</a></li>
        <li><a data-toggle="tab" href="#selectcondition">Select by Condition</a></li>

    </ul>

    <div class="tab-content">
        <div id="selectpatient" class="tab-pane fade in active">


            <table class="table table-striped" id="dataTable">
                <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Patient Status</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>


        </div>

        <div id = "selectcondition" class = "tab-pane fade">
            <table class = "table table-striped" id = "conditionTable">
                <thead>
                <tr>
                    <th>Condition Name</th>
                    <th>View</th>
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