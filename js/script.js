/**
 * Created by Alex on 21-Jan-16.
 */

currentpage = 0;
questions = [];

function Question(questionText, possibleAnswers, chosenAnswer, reviewed, questionColour, islast, conditionalQuestion, conditionAnswer, questionNumber, NLquestion, NLanswer, questionsToChange) {
    this.questionText = questionText;
    this.possibleAnswers = possibleAnswers;
    this.chosenAnswer = chosenAnswer;
    this.reviewed = reviewed;
    this.questionColour = questionColour;
    this.islast = islast;
    this.conditionalQuestion = conditionalQuestion;
    this.conditionAnswer = conditionAnswer;
    this.questionNumber = questionNumber;
    this.NLquestion = NLquestion;
    this.NLanswer = NLanswer;
    this.questionsToChange = questionsToChange;
}


function addQuestions() {

    /* Created when the user is logged in, creates a Question object
       for each question about to be asked and stores it into jStorage
     */


    var q1 = new Question(
        "Do you have or are you being treated for high blood pressure?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "1",
        "high blood pressure.",
        ["You have", "You don't have"]
    );

    var q2 = new Question(
        "Within the last year, have you had chest pain or pressure with activity such as walking or climbing stairs?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Amber",
        "no",
        "",
        "",
        "2",
        "chest pain or pressure with activity such as walking or climbing stairs.",
        ["You have", "You don't have"]
    );

    var q3 = new Question(
        "Do you currently take medication to prevent or reduce angina (chest pain from the heart)?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Amber",
        "no",
        "",
        "",
        "3",
        "taking medication to prevent or reduce angina (chest pain from the heart)",
        ["You are","You are not"]
    );

    var q4 = new Question(
        "Have you ever had a heart attack?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Amber",
        "no",
        ["4a"],
        "Yes",
        "4",
        "had a heart attack.",
        ["You have", "You have not"],
        ['4a']
    );


    var q4a = new Question(
        "Have you had a heart attack in the past six months?",
        ["Yes", "No"],
        "N/A",
        "No",
        "Red",
        "no",
        "",
        "",
        "4a",
        "had a heart attack in the past six months.",
        ["You have", "You have not"]
    );


    var q5 = new Question(
        "Do you have kidney disease?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "5",
        "kidney disease.",
        ["You have","You don't have"]
    );

    var q6 = new Question(
        "Has anyone in your family (blood relatives) had a problem following an anaesthetic?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Amber",
        "no",
        "",
        "",
        "6",
        "had a problem following anaesthetic.",
        ["Someone in your family has","No one in your family has"]
    );

    var q7 = new Question(
        "Have you ever been diagnosed with an irregular heartbeat?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "7",
        "diagnosed with an irregular heartbeat.",
        ["You have been", "You have not been"]
    );

    var q8 = new Question(
        "Have you ever had a stroke?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Amber",
        "no",
        "",
        "",
        "8",
        "had a stroke.",
        ["You have","You have not"]
    );

    var q9 = new Question(
        "If you have been put to sleep for an operation, were there any anaesthetic problems?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "9",
        "anaesthetic problems after being put to sleep.",
        ["You have had", "You have not had"]
    );

    var q10 = new Question(
        "Do you suffer from epilepsy or seizures?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Green",
        "no",
        "",
        "",
        "10",
        "suffer from epilepsy or seizures.",
        ["You do", "You do not"]
    );

    var q11 = new Question(
        "Do you have any problems with pain, stiffness or arthritis in your neck or jaw?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Green",
        "no",
        "",
        "",
        "11",
        "problems with pain, stiffness or arthritis in your neck or jaw",
        ["You have", "You do not have"]
    );

    var q12 = new Question(
        "Do you have thyroid disease?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Amber",
        "no",
        "",
        "",
        "12",
        "have thyroid disease",
        ["You", "You do not"]
    );

    var q13 = new Question(
        "Do you have liver disease or jaundice?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Amber",
        "no",
        "",
        "",
        "13",
        "have liver disease",
        ["You","You do not"]
    );

    var q14 = new Question(
        "Have you ever been diagnosed with heart failure?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "14",
        "been diagnosed with heart failure",
        ["You have", "You have not"]
    );

    var q15 = new Question(
        "Do you suffer from asthma?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Green",
        "no",
        "",
        "",
        "15",
        "suffer from asthma",
        ["You do","You do not"]
    );


    var q16 = new Question(
        "Do you have diabetes?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        ["16a"],
        "Yes",
        "16",
        "have diabetes",
        ["You", "You do not"],
        ['16a','16b']
    );

    var q16a = new Question(
        "Do you have diabetes that requires insulin?",
        ['Yes', 'No'],
        "N/A",
        "No",
        "Red",
        "no",
        ["16b"],
        "No",
        "16a",
        "have diabetes that requires insulin",
        ["You","You do not"],
        ['16b']
    );

    var q16b = new Question(
        "Do you have diabetes that requires tablets only?",
        ['Yes', 'No'],
        "N/A",
        "No",
        "Red",
        "no",
        "",
        "",
        "16b",
        "have diabetes that requires tablets only",
        ["You","You do not"]
    );

    var q17 = new Question(
        "Have you had surgery before?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Green",
        "no",
        ["17a"],
        "Yes",
        "17",
        "had surgery before.",
        ["You have", "You have not"],
        ['17a','17b','17c','17d','17e','17f','17g','17h']
    );

    var q17a = new Question(
        "Have you had heart surgery before",
        ['Yes', 'No'],
        "N/A",
        "No",
        "Amber",
        "no",
        ["17b", "17e"],
        "Yes",
        "17a",
        "had heart surgery before",
        ["You have","You have not"],
        ['17b','17c','17d']
    );

    var q17b = new Question(
        "Which operation did you have?",
        "text",
        "N/A",
        "no",
        "Amber",
        "no",
        ["17c"],
        "",
        "17b",
        "You have had these heart operations: "
    );

    var q17c = new Question(
        "When did the operation take place? Please use the format DD/MM/YYYY",
        "text",
        "N/A",
        "no",
        "Amber",
        "no",
        ["17d"],
        "",
        "17c",
        "You had heart operations on these dates: "
    );

    var q17d = new Question(
        "Was there any complications during or after the surgery? Please describe or simply comment 'No'",
        "text",
        "N/A",
        "no",
        "Amber",
        "no",
        ["17e"],
        "",
        "17d",
        "You had these complications after your heart surgeries: "
    );

    var q17e = new Question(
        "Have you ever had brain surgery?",
        ['Yes', 'No'],
        "N/A",
        "no",
        "Amber",
        "no",
        ["17f"],
        "Yes",
        "17e",
        "had brain surgery",
        ["You have", "You have not"],
        ['17f','17g','17h']
    );

    var q17f = new Question(
        "Which operation did you have?",
        "text",
        "N/A",
        "no",
        "Amber",
        "no",
        ["17g"],
        "",
        "17f",
        "You have had these brain operations: "
    );

    var q17g = new Question(
        "When did the operation take place? Please use the format DD/MM/YYYY",
        "text",
        "N/A",
        "no",
        "Amber",
        "no",
        ["17h"],
        "",
        "17g",
        "You had brain operations on these dates: "
    );

    var q17h = new Question(
        "Was there any complications during or after the surgery? Please describe or simply comment 'No'",
        "text",
        "N/A",
        "no",
        "Amber",
        "no",
        "",
        "",
        "17h",
        "You had these complications after your brain surgeries: "
    );

    var q18 = new Question(
        "Have you ever been told by a doctor that your kidneys don't work properly?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "18",
        "been told by a doctor your kidneys don't work properly",
        ["You have", "You have not"]
    );

    var q19 = new Question(
        "Are you on dialysis?",
        ['Yes','No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "19",
        "on dialysis",
        ["You are","You are not"]
    );

    var q20 = new Question(
        "Have you ever had an abnormally slow heartbeat?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "20",
        "had an abnormally slow heartbeat",
        ["You have", "You have never"]
    );

    var q21 = new Question(
        "Do you have a pacemaker?",
        ['Yes','No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "21",
        "have a pacemaker",
        ["You do", "You do not"]
    );

    var q22 = new Question(
        "Do you have low blood or anemia?",
        ['Yes','No'],
        "unknown",
        "No",
        "Red",
        "no",
        "",
        "",
        "22",
        "have low blood or anemia",
        ["You do","You do not"]
    );

    var q23 = new Question(
        "Have you ever been told that you have an abnormally high or low platelet count?",
        ['Yes','No'],
        "unknown",
        "No",
        "Amber",
        "no",
        ["23a"],
        "Yes",
        "23",
        "been told you have abnormally high or low platelet count",
        ["You have", "You have not"],
        ['23a']
    );

    var q23a = new Question(
        "Is your platelet count high or low?",
        ['High','Low'],
        "N/A",
        "No",
        "Amber",
        "no",
        "",
        "",
        "23a",
        "platelet count",
        ["You have a high", "You have a low"]
    );


    var q24 = new Question(
        "Do you suffer from bronchitis?",
        ['Yes', 'No'],
        "unknown",
        "No",
        "Green",
        "yes",
        "",
        "",
        "24",
        "suffer from bronchitis.",
        ["You do", "You do not"]
    );

    $.jStorage.set("question1", q1);
    $.jStorage.set("question2", q2);
    $.jStorage.set("question3", q3);
    $.jStorage.set("question4", q4);
    $.jStorage.set("question4a", q4a);
    $.jStorage.set("question5", q5);
    $.jStorage.set("question6", q6);
    $.jStorage.set("question7", q7);
    $.jStorage.set("question8", q8);
    $.jStorage.set("question9", q9);
    $.jStorage.set("question10", q10);
    $.jStorage.set("question11", q11);
    $.jStorage.set("question12", q12);
    $.jStorage.set("question13", q13);
    $.jStorage.set("question14", q14);
    $.jStorage.set("question15", q15);
    $.jStorage.set("question16", q16);
    $.jStorage.set("question16a", q16a);
    $.jStorage.set("question16b", q16b);
    $.jStorage.set("question17", q17);
    $.jStorage.set("question17a", q17a);
    $.jStorage.set("question17b", q17b);
    $.jStorage.set("question17c", q17c);
    $.jStorage.set("question17d", q17d);
    $.jStorage.set("question17e", q17e);
    $.jStorage.set("question17f", q17f);
    $.jStorage.set("question17g", q17g);
    $.jStorage.set("question17h", q17h);
    $.jStorage.set("question18", q18);
    $.jStorage.set("question19", q19);
    $.jStorage.set("question20", q20);
    $.jStorage.set("question21", q21);
    $.jStorage.set("question22", q22);
    $.jStorage.set("question23", q23);
    $.jStorage.set("question23a", q23a);
    $.jStorage.set("question24", q24);



}

function createQuestionPage(number) {

    /* Creates each question page by setting the question text and
    inputs for answers, if the question is being reviewed it hides the
    previous button and alters the image so the users knows they will be
    taken back  to the results page.
     */


    setCurrentPage(number);
    var currentquestion = $.jStorage.get("question" + number);
    if (currentquestion.conditionalQuestion != "") {
        $('#nextPage').click(conditionalSaveAndContinue);
    } else {
        $('#nextPage').click(saveAndContinue);
    }
    if (currentquestion.reviewed == "Yes") {
        $('#backPage').hide();
        $('#answer_text').append("<br> <br> <br> <br>");
        $('#nextPage').attr("src", "../img/proceedreview.png");
    }
    console.log($.jStorage.get("question17g"));
    console.log(currentquestion);
    $('#question_text').append("<h1>" + currentquestion.questionText + "</h1>");
    if (currentquestion.possibleAnswers == "text") {
        $('#buttons').append("Please enter your answer here:");
        $('#buttons').append("<input type = 'text' id = 'answerText'/>");
        $('#buttons').append("<br> <br> <br>");
    } else {
        $('#buttons').append("<label for 'answers'> ");
        for (var index = 0; index < currentquestion.possibleAnswers.length; index++) {

            $('#buttons').append("<input type = 'radio' id = 'radiobuttons' style='vertical-align: middle; margin: 0px;' name = 'answerValue' value  =" + currentquestion.possibleAnswers[index] + "> <strong> " + currentquestion.possibleAnswers[index].toUpperCase() + "</strong>")
            $('#buttons').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp');
        }
        $('#buttons').append("<br> <br>");
        $('#buttons').append("</label>");
    }

}

function conditionalSaveAndContinue() {

    /* Attached the "Next" button on any conditional branching questions.
       The function will check if the answer chosen by the user matches
       that of the conditionAnswer and if it does, will link it to the next
       question in the branch.  If it does not match, the user will be taken
       to the next question that is not in the branch.
     */

    var currentquestion = $.jStorage.get("question" + currentpage);
    if (currentquestion.possibleAnswers == "text") {
        var userchoice = $('#answerText').val();
    } else {
        var userchoice = $('input[name=answerValue]:checked', '#buttons').val();
    }
    console.log($.jStorage.storageAvailable());
    if (userchoice != null) {

        currentquestion.chosenAnswer = userchoice;
        $.jStorage.set("question" + currentpage, currentquestion);

        if (currentquestion.reviewed == "Yes" && currentquestion.chosenAnswer == currentquestion.conditionAnswer) {
            if (currentquestion.conditionalQuestion.length == 2) {

                var changereview = $.jStorage.get("question" + currentquestion.conditionalQuestion[0]);
                changereview.reviewed = "Yes";
                $.jStorage.set("question" + changereview.questionNumber, changereview);
                window.open("../src/questionpage" + changereview.questionNumber + ".php", "_self");

            }else {

                var changereview = $.jStorage.get("question" + currentquestion.conditionalQuestion);
                changereview.reviewed = "Yes";
                $.jStorage.set("question" + changereview.questionNumber, changereview);
                window.open("../src/questionpage" + changereview.questionNumber + ".php", "_self");

            }
        } else if (currentquestion.reviewed == "Yes" && currentquestion.conditionAnswer == "") {

            var temp = $.jStorage.get("question" + currentquestion.conditionalQuestion);
            if (temp.chosenAnswer != "N/A") {
                window.open("../src/questionresults.php","_self");
            } else {
                temp.reviewed = "Yes";
                $.jStorage.set("question" + temp.questionNumber, temp);
                window.open("../src/questionpage" + temp.questionNumber + ".php","_self");
            }

        } else if (currentquestion.reviewed == "Yes" && currentquestion.chosenAnswer != currentquestion.conditionAnswer) {

            if (currentquestion.conditionalQuestion.length == 2) {

                if (currentquestion.questionsToChange.length > 0) {
                    if (currentquestion.questionsToChange.length > 1) {
                        for (i in currentquestion.questionsToChange) {
                            var deleteinfo = $.jStorage.get("question" + currentquestion.questionsToChange[i]);
                            deleteinfo.chosenAnswer = "N/A";
                            $.jStorage.set("question" + currentquestion.questionsToChange[i], deleteinfo);
                        }
                    } else {
                        var deleteinfo = $.jStorage.get("question" + currentquestion.questionsToChange);
                        deleteinfo.chosenAnswer = "N/A";
                        $.jStorage.set("question" + currentquestion.questionsToChange, deleteinfo);
                    }
                }
                var changereview =  $.jStorage.get("question" + currentquestion.conditionalQuestion[1]);
                changereview.reviewed = "Yes";
                $.jStorage.set("question" + changereview.questionNumber, changereview);
                window.open("../src/questionpage"+changereview.questionNumber+".php", "_self");
            } else {
                if (currentquestion.questionsToChange.length > 0) {
                    if (currentquestion.questionsToChange.length > 1) {
                        for (i in currentquestion.questionsToChange) {
                            var deleteinfo = $.jStorage.get("question" + currentquestion.questionsToChange[i]);
                            deleteinfo.chosenAnswer = "N/A";
                            $.jStorage.set("question" + currentquestion.questionsToChange[i], deleteinfo);
                        }
                    } else {
                        var deleteinfo = $.jStorage.get("question" + currentquestion.questionsToChange);
                        deleteinfo.chosenAnswer = "N/A";
                        $.jStorage.set("question" + currentquestion.questionsToChange, deleteinfo);
                    }
                }
                window.open("../src/questionresults.php","_self");
            }

        } else if (currentquestion.conditionAnswer != "") {

            if (currentquestion.conditionalQuestion.length == 2) {
                if (currentquestion.chosenAnswer == currentquestion.conditionAnswer) {

                    window.open("../src/questionpage" + currentquestion.conditionalQuestion[0] + ".php", "_self");
                } else if (currentquestion.chosenAnswer != currentquestion.conditionAnswer) {
                    window.open("../src/questionpage" + currentquestion.conditionalQuestion[1] + ".php", "_self");
                }
            }
            else if (currentquestion.chosenAnswer == currentquestion.conditionAnswer) {

                window.open("../src/questionpage" + currentquestion.conditionalQuestion + ".php", "_self");
            } else if (currentquestion.chosenAnswer != currentquestion.conditionAnswer) {
                if (typeof currentpage == "string") {
                    temp = currentpage.substring(0, currentpage.length - 1);
                    setCurrentPage(Number(temp));
                }
                window.open("../src/questionpage" + (currentpage + 1) + ".php", "_self");
            }
        } else {
            window.open("../src/questionpage" + currentquestion.conditionalQuestion + ".php", "_self");
        }


    } else {
        alert("Please select an option");
    }

}


function setCurrentPage(numbern) {
    currentpage = numbern;
}


function saveAndContinue() {

    /*Attached the "Next" button if the question is not
      a conditional branching question.  Simply loads the
      current question from jStorage and sets the user's
      answer to then store the question back in jStorage.
     */

    console.log(currentpage);
    var currentquestion = $.jStorage.get("question" + currentpage);
    if (currentquestion.possibleAnswers == "text") {
        var userchoice = $('#answerText').val();
    } else {
        var userchoice = $('input[name=answerValue]:checked', '#buttons').val();
    }
    console.log($('input[name=answerValue]:checked', '#buttons').val());
    if (userchoice != null) {
        currentquestion.chosenAnswer = userchoice;
        console.log(currentquestion.chosenAnswer);
        $.jStorage.set("question" + currentpage, currentquestion);
        if (typeof currentpage == "string") {
            var temp = currentpage.substring(0, (currentpage.length - 1));
            setCurrentPage(Number(temp));
        }
        if (currentquestion.reviewed == "Yes") {
            window.open("../src/questionresults.php", "_self");
        }
        else if (currentquestion.islast != "yes") {
            window.open("../src/questionpage" + (currentpage + 1) + ".php", "_self");
        } else {
            window.open("../src/questionresults.php", "_self");

        }
    } else {

        alert('Please select an option');
    }


}

function createReviewPage() {

    /* Creates the review page for the patient.  All the
       Questions are loaded from jStorage and displayed in
       a natural language form, with a button in order to check
       if the user wants to the change that specific answer and
       a button at the bottom of the page to send the answers to
       the database
     */


    for (var index = 1; index < 25; index++) {
        questions.push($.jStorage.get("question" + index));
        if (index == 4) {
            var temp = $.jStorage.get("question" + index + "a");
            questions.push(temp);
        }
        if (index == 16) {
            questions.push($.jStorage.get("question" + index + "a"));
            questions.push($.jStorage.get("question" + index + "b"));
        }
        if (index == 17) {
            questions.push($.jStorage.get("question" + index + "a"));
            questions.push($.jStorage.get("question" + index + "b"));
            questions.push($.jStorage.get("question" + index + "c"));
            questions.push($.jStorage.get("question" + index + "d"));
            questions.push($.jStorage.get("question" + index + "e"));
            questions.push($.jStorage.get("question" + index + "f"));
            questions.push($.jStorage.get("question" + index + "g"));
            questions.push($.jStorage.get("question" + index + "h"));

        }
        if (index == 23) {
            questions.push($.jStorage.get("question" + index + "a"));
        }

    }

    for (var index = 0; index < questions.length; index++) {


        if (questions[index].chosenAnswer != "N/A") {
            console.log(questions[index]);
            if (questions[index].possibleAnswers == "text") {
                $('#resultDisplay').append("<h2>"+questions[index].NLquestion+questions[index].chosenAnswer+"</h2>");
            }
            else if (questions[index].chosenAnswer == "Yes") {
                $('#resultDisplay').append("<h2>"+questions[index].NLanswer[0]+" " + questions[index].NLquestion + "</h2>");
            }
            else {
                $('#resultDisplay').append("<h2>"+questions[index].NLanswer[1]+ " " + questions[index].NLquestion + "</h2>");
            }
            $('#resultDisplay').append("<input type = 'image' src='../img/change.png' id = 'qbutton" + questions[index].questionNumber + "'/>");
            $('#qbutton' + questions[index].questionNumber).on('click', {number: questions[index].questionNumber}, reviewPageButton);
            $('#resultDisplay').append("<br> <hr> <br>");
        }
    }



    $('#reviewsubmit').click(sendToServer);

}


function reviewPageButton(event) {

    /* Links the user back to the specific question
       page after changing the review in the object
       to yes
     */
    var number = event.data.number;
    console.log($.jStorage.get("question1"));
    console.log(number);
    console.log($.jStorage.get("question" + number));
    var specificquestion = $.jStorage.get("question" + number);
    console.log(specificquestion);
    specificquestion.reviewed = "Yes";
    $.jStorage.set("question" + number, specificquestion);
    window.open("../src/questionpage" + number + ".php", "_self");

}


function sendToServer() {


    /* Determines the status of the patient based on
       the answers to the questions they have given.
       Combines this status with the answers they
       have provided and sends the information via
       an AJAX call to a PHP form
     */

    var patientstatus = "Green";
    for (index = 0; index < questions.length; index++) {
        if (questions[index].questionColour == "Red" && questions[index].chosenAnswer == "Yes") {
            patientstatus = "Red";
        }
        else if (questions[index].questionColour == "Amber" && patientstatus != "Red" && questions[index].chosenAnswer == "Yes") {
            patientstatus = "Amber";
        }
    }

    var dataToSend = 'q1=' + questions[0].chosenAnswer + '&q2=' + questions[1].chosenAnswer + '&q3=' + questions[2].chosenAnswer + '&q4=' + questions[3].chosenAnswer +
        '&q4a=' + questions[4].chosenAnswer + '&q5=' + questions[5].chosenAnswer + '&q6=' + questions[6].chosenAnswer + '&q7=' + questions[7].chosenAnswer +
        '&q8=' + questions[8].chosenAnswer + '&q9=' + questions[9].chosenAnswer + '&q10=' + questions[10].chosenAnswer + '&q11=' + questions[11].chosenAnswer +
        '&q12=' + questions[12].chosenAnswer + '&q13=' + questions[13].chosenAnswer + '&q14=' + questions[14].chosenAnswer + '&q15=' + questions[15].chosenAnswer +
        '&q16=' + questions[16].chosenAnswer + '&q16a=' + questions[17].chosenAnswer + '&q16b=' + questions[18].chosenAnswer + '&q17=' + questions[19].chosenAnswer +
        '&q17a=' + questions[20].chosenAnswer + '&q17b=' + questions[21].chosenAnswer + '&q17c=' + questions[22].chosenAnswer + '&q17d=' + questions[23].chosenAnswer +
        '&q17e=' + questions[24].chosenAnswer + '&q17f=' + questions[25].chosenAnswer + '&q17g=' + questions[26].chosenAnswer + '&q17h=' + questions[27].chosenAnswer +
        '&q18=' + questions[28].chosenAnswer + '&q19=' + questions[29].chosenAnswer + '&q20=' + questions[30].chosenAnswer + '&q21=' + questions[31].chosenAnswer +
        '&q22=' + questions[32].chosenAnswer + '&q23=' + questions[33].chosenAnswer + '&q23a=' + questions[34].chosenAnswer + '&q24=' + questions[35].chosenAnswer + '&status=' + patientstatus;

    $.ajax({
        type: "POST",
        url: "../src/submittoserver.php",
        data: dataToSend,
        cache: false,
        success: function (result) {

            window.open("../src/patientend.html", "_self");
        }
    })


}

function createClinicWelcome() {

    /* Creates the Patient Analysis welcome page.
       Creates a table for the conditions and
       uses an AJAX call to retrieve patients
       for the patient table.
     */

    var conditions = getConditionsForTable();
    for (i in conditions) {

        var data = "<tr> <td>" + conditions[i] + "</td><td> <a id = 'cbutton"+i+"'>View</a></td></tr>";
        $('#conditionTable').append(data);
        $('#cbutton' + i).on("click", {condition: conditions[i]}, checkConditionAnswers);
    }

    $.ajax({
        url: "../src/getpatientforclinic.php",
        data: "",
        dataType: "json",
        success: function (rows) {

            for (i in rows) {
                row = rows[i];

                var data = "<tr> <td>" + row[0] + "</td><td>"+row[1]+"</td><td> <a id = 'vbutton"+i+"'>View</a></td></tr>";
                $('#dataTable').append(data);
                if (row[1] != 'Not completed') {
                    $('#vbutton' + i).on("click", {patientname: row[0]}, checkPatientAnswers);
                }
            }
        }


    })







}

function checkConditionAnswers(event) {

    /* Retrieves all the patients who are suffering
       from the condition specified in currentcondition
       via an AJAX call to a PHP page.
     */

    var currentcondition = event.data.condition;
    $.jStorage.set("Condition", currentcondition);
    var dataToSend = "conditionname=" + currentcondition;

    $.ajax ({
        type: "POST",
        url: "getselectedcondition.php",
        data: dataToSend,
        cache: false,
        dataType: "json",
        success: function(result) {
            createConditionPage(result);
        }


    })


}


function createConditionPage(retrievedarray) {

    $.jStorage.set("conditionArray", retrievedarray);
    window.open("../src/conditionreview.php", "_self");
}

function fillConditionPage() {

    /* Creates a different table depending on the currentcondition
       and fills it with the information retrieved from the database.
     */

    var currentcondition = $.jStorage.get("Condition");
    var patientanswers = $.jStorage.get("conditionArray");
    $('#conditionheader').append("<h1>" + currentcondition + "</h1>");


    /* Singular conditions
     Hypertension
     Angina
     Kidney disease
     Cerebrovascular disease
     Epilepsy
     Thyroid disease
     Liver disease/jaundice
     Heart failure
     Asthma
     Dialysis
     Slow heart beat
     Pacemaker
     Bronchitis

     */

    if (currentcondition == "Hypertension" || currentcondition == "Angina" || currentcondition == "Angina" || currentcondition == "Kidney Disease" || currentcondition == "Cerebrovascular Disease"
        || currentcondition == "Epilepsy" || currentcondition == "Thyroid Disease" || currentcondition == "Liver Disease/Jaundice" || currentcondition == "Heart failure" || currentcondition == "Asthma"
        || currentcondition == "Dialysis" || currentcondition == "Slow heart beat" || currentcondition == "Pacemaker" || currentcondition == "Low Blood/Anemia" || currentcondition == "Bronchitis") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patients with condition</th></tr></thead><tbody>";


        for (i in patientanswers) {
            html += "<tr>";
            html += "<td>" + patientanswers[i] + "</td>";
            html += "</tr>";
        }

        html += "</tbody>";

        $('#conditionTable').append(html);


    }

    /*
     Multiple conditions
     Coronary Artery Disease - chest pain/pressure, angina, heart attack + last six months
     Heart attack - last 6 months
     Renal Disease - kidney disease, kidneys not working, dialysis
     Anaesthetic - family has, individual has
     Arrhythmia - irregular heartbeat, slow heartbeat, pacemaker
     COPD/Asthma - asthma, bronchitis
     Diabetes - treatment
     Previous heart surgery - type, date, complications
     Previous brain surgery - type, date, complications
     Abnormal platelet count - high/low
     */

    if (currentcondition == "Coronary Artery Disease") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Chest Pain/Pressure</th><th>Angina</th><th>Heart Attack</th><th>Heart Attack in Last Six Months</th></tr></thead><tbody>";
        for ( i in patientanswers) {

            if (patientanswers[i][4] == "N/A") {
                patientanswers[i][4] = "No";
            }
            console.log(patientanswers[i]);
            html += "<tr>";
            html += "<td>" + patientanswers[i][0] + "</td><td>" + patientanswers[i][1] + "</td><td>" + patientanswers[i][2] + "</td><td>" + patientanswers[i][3] + "</td><td>" + patientanswers[i][4] + "</td>";
            html += "</tr>";
        }
        html += "</tbody>";

        $('#conditionTable').append(html);

    }

    if (currentcondition == "Heart Attack") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>In the last six months</th></tr></thead><tbody>";

        for(i in patientanswers) {

            if (patientanswers[i][1] == "N/A") {
                patientanswers[i][1] = "No";
            }
            html += "<tr>";
            html += "<td>" + patientanswers[i][0] + "</td><td>" + patientanswers[i][1] + "</td>";
            html += "</tr>";

        }

        html += "</tbody>";

        $('#conditionTable').append(html);

    }

    if (currentcondition == "Renal Disease") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Kidney Disease</th><th>Kidneys Not Working Properly</th><th>On Dialysis</th></tr></thead><tbody>";

        for (i in patientanswers) {

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+patientanswers[i][1]+"</td><td>"+patientanswers[i][2]+"</td><td>"+patientanswers[i][3]+"</td>";
            html += "</tr>";

        }

        html += "</tbody>";

        $('#conditionTable').append(html);
    }

    if (currentcondition == "Anaesthetic") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Previous Problems with Anaesthetic</th><th>Family Problems with Anaesthetic</th></tr></thead><tbody>";

        for (i in patientanswers) {

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+patientanswers[i][2]+"</td><td>"+patientanswers[i][1]+"</td>";
            html += "</tr>";

        }

        html += "</tbody>";

        $('#conditionTable').append(html);
    }

    if (currentcondition == "Arrhythmia") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Irregular Heartbeat</th><th>Slow Heartbeat</th><th>Has Pacemaker</th></tr></thead><tbody>";

        for (i in patientanswers) {

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+patientanswers[i][1]+"</td><td>"+patientanswers[i][2]+"</td><td>"+patientanswers[i][3]+"</td>";
            html += "</tr>";
        }

        html += "</tbody>";

        $('#conditionTable').append(html);

    }

    if (currentcondition == "COPD/Asthma") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Asthma</th><th>Bronchitis</th></tr></thead><tbody>";

        for (i in patientanswers) {

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+patientanswers[i][1]+"</td><td>"+patientanswers[i][2]+"</td>";
            html += "</tr>";
        }

        html += "</tbody>";

        $('#conditionTable').append(html);
    }

    if (currentcondition == "Diabetes") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Treatment</th></tr></thead><tbody>";
        var treatment = "";
        for (i in patientanswers) {

            if (patientanswers[i][1] == "Yes") {
                treatment = "Insulin";
            }
            else if (patientanswers[i][2] == "Yes") {
                treatment = "Tablets only";
            }
            else {
                treatment = "Patient has not specified treatment"
            }

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+treatment+"</td>";
            html += "</tr>";

        }

        html += "</tbody>";

        $('#conditionTable').append(html);



    }

    if (currentcondition == "Previous Heart Surgery") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Operation(s)</th><th>Date(s) of Surgery</th><th>Complications</th></tr></thead>";

        for (i in patientanswers) {

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+patientanswers[i][1]+"</td><td>"+patientanswers[i][2]+"</td><td>"+patientanswers[i][3]+"</td>";
            html += "</tr>";

        }

        html += "</tbody>";

        $('#conditionTable').append(html);
    }

    if (currentcondition == "Previous Brain Surgery") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Operation(s)</th><th>Date(s) of Surgery</th><th>Complications</th></tr></thead>";

        for (i in patientanswers) {

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+patientanswers[i][1]+"</td><td>"+patientanswers[i][2]+"</td><td>"+patientanswers[i][3]+"</td>";
            html += "</tr>";

        }

        html += "</tbody>";

        $('#conditionTable').append(html);
    }

    if (currentcondition == "Abnormal Platelet Count") {

        var html = "<table class = 'table table-striped'><thead><tr><th>Patient Name</th><th>Platelet Count</th></tr></thead><tbody>";

        for (i in patientanswers) {

            html += "<tr>";
            html += "<td>"+patientanswers[i][0]+"</td><td>"+patientanswers[i][1]+"</td>";
        }

        html += "</tbody>";

        $('#conditionTable').append(html);
    }


}


function getConditionsForTable() {

    /* Returns all the possible conditions
       to be used in the condition table
     */

    var conditions = [];
    conditions.push("Hypertension");
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
    conditions.push("Bronchitis");

    return conditions;
}


function ClinicQuestion (questionText, status, category, condition) {
    this.questionText = questionText;
    this.status = status;
    this.category = category;
    this.condition = condition;
}

function getQuestionsForClinic() {

    /* Creates and returns a ClinicQuestion object
       for each of the possible questions
     */

    var clinicquestions = [];

    clinicquestions.push(new ClinicQuestion("Do you have or are you being treated for high blood pressure?","Red", "Hypertension", "Hypertension"));
    clinicquestions.push(new ClinicQuestion("Within the last year, have you had chest pain or pressure with activity such as walking or climbing stairs?","Amber", "Coronary Artery Disease", "chest pain/pressure"));
    clinicquestions.push(new ClinicQuestion("Do you currently take medication to prevent or reduce angina?","Amber","Coronary Artery Disease","Angina"));
    clinicquestions.push(new ClinicQuestion("Have you ever had a heart attack?","Amber","Coronary Artery Disease","previous heart attack"));
    clinicquestions.push(new ClinicQuestion("Have you had a heart attack in the last six months?","Red", "Coronary Artery Disease","Last six months"));
    clinicquestions.push(new ClinicQuestion("Do you have kidney disease?","Red","Renal Disease","Kidney Disease"));
    clinicquestions.push(new ClinicQuestion("Has anyone in your family (blood relatives) had a problem following an anaesthetic?","Amber", "Anaesthetic", "their family has previous problems with anaesthetic"));
    clinicquestions.push(new ClinicQuestion("Have you ever been diagnosed with an irregular heartbeat?","Red", "Arrhythmia", "Irregular Heartbeat"));
    clinicquestions.push(new ClinicQuestion("Have you ever had a stroke?","Amber", "Cerebrovascular Disease", "Stroke"));
    clinicquestions.push(new ClinicQuestion("If you have been put to sleep for an operation, were there any anaesthetic problems?","Red", "Anaesthetic", "they have had previous problems with anaesthetic"));
    clinicquestions.push(new ClinicQuestion("Do you suffer from epilepsy or seizures?","Green", "Epilepsy", "Epilepsy or seizures"));
    clinicquestions.push(new ClinicQuestion("Do you have any problems with pain, stiffness or arthritis in your neck or jaw?","Green", "Pain/Arthritis"));
    clinicquestions.push(new ClinicQuestion("Do you have thyroid disease?","Amber","Thyroid Disease", "Thyroid Disease"));
    clinicquestions.push(new ClinicQuestion("Do you have liver disease or jaundice?","Amber", "Liver Disease", "Liver Disease/Jaundice"));
    clinicquestions.push(new ClinicQuestion("Have you ever been diagnosed with heart failure?","Red", "Congestive Heart Failure", "Heart failure"));
    clinicquestions.push(new ClinicQuestion("Do you suffer from asthma?","Green", "COPD/Asthma", "Asthma"));
    clinicquestions.push(new ClinicQuestion("Do you have diabetes?","Red","Diabetes","Diabetes"));
    clinicquestions.push(new ClinicQuestion("Do you have diabetes that requires insulin?", "", "Diabetes", "requires treatment with insulin"));
    clinicquestions.push(new ClinicQuestion("Do you have diabetes that requires tablets only?", "", "Diabetes", "requires treatment with tablets"));
    clinicquestions.push(new ClinicQuestion("Have you ever had surgery?","Green","Surgery","Previous surgery"));
    clinicquestions.push(new ClinicQuestion("Have you ever had heart surgery?","Amber", "Heart Surgery", "Heart surgery"));
    clinicquestions.push(new ClinicQuestion("Which operation did you have?", "", "Heart Surgery", "Operation(s)"));
    clinicquestions.push(new ClinicQuestion("When did the operation take place?", "", "Heart Surgery" , "Dates"));
    clinicquestions.push(new ClinicQuestion("Was there any complications during or after the surgery?", "", "Heart Surgery", "Complications"));
    clinicquestions.push(new ClinicQuestion("Have you ever had brain surgery?","Amber", "Brain Surgery", "Brain surgery"));
    clinicquestions.push(new ClinicQuestion("Which operation did you have?", "", "Brain Surgery", "Operation(s)"));
    clinicquestions.push(new ClinicQuestion("When did the operation take place?", "", "Brain Surgery", "Dates"));
    clinicquestions.push(new ClinicQuestion("Was there any complications during or after the surgery?", "", "Brain Surgery", "Complications"));
    clinicquestions.push(new ClinicQuestion("Have you ever been told by a doctor that your kidneys don't work properly?","Red","Renal Disease", "their kidneys do not work properly"));
    clinicquestions.push(new ClinicQuestion("Are you on dialysis?", "Red", "Renal Disease", "they are on dialysis"));
    clinicquestions.push(new ClinicQuestion("Have you ever had an abnormally slow heart beat?","Red","Arrhythmia", "abnormally slow heart beat"));
    clinicquestions.push(new ClinicQuestion("Do you have a pacemaker?","Red","Arrhythmia", "they have a pacemaker"));
    clinicquestions.push(new ClinicQuestion("Do you have low blood or anemia?","Red","Anemia", "Low blood/Anemia"));
    clinicquestions.push(new ClinicQuestion("Have you ever been told that you have an abnormally low or high platelet count?","Amber","Bleeding disorder", "Platelet Count"));
    clinicquestions.push(new ClinicQuestion("Is your platelet count high or low?","Amber", "Bleeding Disorder", "High/Low"));
    clinicquestions.push(new ClinicQuestion("Do you suffer from bronchitis?","Green", "COPD/Asthma", "Bronchitis"));


    return clinicquestions;


}

function checkPatientAnswers(event) {

    /* Gathers the information of a specified patient
       via an AJAX call to a PHP form.
     */

    var currentpatient = event.data.patientname;


    var dataToSend = 'patientname=' + currentpatient;
    var array = [];


    $.ajax({
        type: "POST", //Has posted as the session variable is updated.
        url: "../src/getselectedpatient.php",
        data: dataToSend,
        cache: false,
        dataType: "json",
        success: function (result) {

            array = result;
            createPatientPage(result);

        }
    })


}

function createPatientPage(array) {

    $.jStorage.set("answerArray", array);
    window.open("../src/clinicreview.php", "_self");
    //  $(win.document).load(buildReview());


}

function splitArray(keyword, questionarray, answerarray) {

    /* Used to split the ClinicQuestion objects dependant on
       what condition they are
     */

    var split = [];

    for (i in questionarray) {

        if(keyword == "Surgery"){
            if (keyword == questionarray[i].category && answerarray[i]!= "N/A"){
                split.push(answerarray[i]);
            }
        }
        if (keyword == "Heart Surgery" || keyword == "Brain Surgery") {
            if (keyword == questionarray[i].category && answerarray[i]!= "N/A") {
                split.push(answerarray[i]);
            }
        }
        if (keyword == "Bleeding Disorder") {
            if (keyword == questionarray.category && answerarray[i] == "Yes") {
                split.push(questionarray[i].condition);
            }
            if (answerarray[i] == "Low" || answerarray[i] == "High") {
                split.push(answerarray[i]);
            }
        }
        if (keyword == questionarray[i].category && answerarray[i] == "Yes") {
            split.push(questionarray[i].condition);
        }
    }
    return split;


}









function buildReview() {

    /* Creates a natural language paragraph depicting the
       health status of the current patient as well as displays
       each health problem in a clear format and displays each of the
       patients answers into a table
     */

    var answers = $.jStorage.get("answerArray");

    var clinicquestions = getQuestionsForClinic();
    console.log("this is the value of answers =");
    console.log(answers);
    var diabetesNL = splitArray("Diabetes", clinicquestions, answers);
    var hypertensionNL = answers[0];
    var cadNL = splitArray("Coronary Artery Disease", clinicquestions, answers);
    var renalNL = splitArray("Renal Disease", clinicquestions, answers);
    var anaestheticNL = splitArray("Anaesthetic", clinicquestions, answers);
    var arrhythmiaNL = splitArray("Arrhythmia", clinicquestions, answers);
    var cerebrovascularNL = splitArray("Cerebrovascular Disease", clinicquestions, answers);
    var painNL = splitArray("Pain/Arthritis", clinicquestions, answers);
    var copdasthmaNL = splitArray("COPD/Asthma", clinicquestions, answers);
    var anemiaNL = splitArray("Anemia", clinicquestions, answers);
    var bleedNL = splitArray("Bleeding Disorder", clinicquestions, answers);
    var thyroidNL = splitArray("Thyroid Disease", clinicquestions, answers);
    var liverNL = splitArray("Liver Disease", clinicquestions, answers);
    var surgeryNL = splitArray("Previous Surgery", clinicquestions, answers);
    var heartNL = splitArray("Heart Surgery", clinicquestions, answers);
    var brainNL = splitArray("Brain Surgery", clinicquestions, answers);
    var name = answers[(answers.length-1)];
    var age = answers[(answers.length-2)];

    $('#analysis').append("<br> <br>");

    $('#analysis').append("<strong> The patient " + name + " is " + age + " years old. </strong>");

    console.log(renalNL);
    if(hypertensionNL == "Yes") {
        $('#analysis').append("<strong> The patient has responded positively to having hypertension. </strong>");
    }

    console.log(cadNL);
    if (cadNL.length > 0){



        if (cadNL.length == 1) {
            $('#analysis').append("<strong> The patient has 1 problem relating to Coronary Artery Disease, which is </strong>");
            $('#analysis').append("<strong>" + cadNL + "</strong>");
        }
        else {
            $('#analysis').append("<strong> The patient has " + cadNL.length + " problems relating to Coronary Artery Disease, which are </strong>");
            for (i in cadNL) {
                if (cadNL[i] == "Last six months") {
                    $('#analysis').append("<strong> which occurred in the last six months </strong>");
                }
                else if (cadNL[i] == "<strong> previous heart attack </strong>") {
                    $('#analysis').append("and a " + cadNL[i] + " ");
                }
                else if (i < cadNL.length - 1) {
                    $('#analysis').append("<strong>" +cadNL[i] + ", </strong>");
                } else {
                    $('#analysis').append("<strong>and " + cadNL[i]+"</strong>");

                }
            }
        }
        $('#analysis').append("<strong>. </strong>");


    }

    if (renalNL.length > 0) {

        if (renalNL.length == 1) {
            $('#analysis').append("<strong> The patient has 1 problem relating to Renal Disease, which is </strong>");
            $('#analysis').append("<strong>"+renalNL+"</strong>");
        }
        else {
            $('#analysis').append("<strong>The patient has " + renalNL.length + " problems relating to Renal Disease, which are </strong>");

            for (i in renalNL) {
                if (i < renalNL.length - 1) {
                    $('#analysis').append("<strong>"+renalNL[i] + ", </strong>");
                }
                else {
                    $('#analysis').append("<strong>and " + renalNL[i]+"</strong>");
                }


            }
        }
        $('#analysis').append("<strong>. </strong>");


    }

    if (anaestheticNL.length >0) {

        $('#analysis').append("<strong>The patient may have anaesthetic problems as </strong>");

        if (anaestheticNL.length > 1) {
            $('#analysis').append("<strong>"+anaestheticNL[0] + " and </strong>");
            $('#analysis').append("<strong>"+anaestheticNL[1] + ". </strong>");
        }
        else {
            $('#analysis').append("<strong>"+anaestheticNL + ". </strong>");
        }

    }

    if (arrhythmiaNL.length > 0) {

        if(arrhythmiaNL.length == 1){

            $('#analysis').append("<strong>The patient has 1 problem relating to Arrhythmia, which is </strong>");
            $('#analysis').append("<strong>"+arrhythmiaNL + ". </strong>");
        }



        else if (arrhythmiaNL.length > 0) {

            $('#analysis').append("<strong>The patient has "  + arrhythmiaNL.length + " problems relating to Arrhythmia, which are </strong>");
            for (i in arrhythmiaNL) {
                if (i < arrhythmiaNL.length-1) {
                    $('#analysis').append("<strong>"+arrhythmiaNL[i] + ", <strong>");
                }
                else {
                    $('#analysis').append("<strong>and " + arrhythmiaNL[i]+"</strong>");
                }
            }

        }
        $('#analysis').append("<strong>. </strong>");
    }

    if (cerebrovascularNL.length > 0) {

        $('#analysis').append("<strong>The patient has had a stroke previously. </strong>");

    }

    if (painNL.length > 0) {

        $('#analysis').append("<strong>This patient has pain/arthritis in the neck or jaw. </strong>");
    }



    if (diabetesNL.length > 0) {
        console.log(diabetesNL);
        $('#analysis').append("<strong>The patient has diabetes, which " + diabetesNL[1] + ". </strong>");
    }

    if (copdasthmaNL.length > 0) {

        if (copdasthmaNL.length == 2) {
            $('#analysis').append("<strong>The patient has 2 problems relating to COPD/Asthma, which are " + copdasthmaNL[0] + " and " + copdasthmaNL[1] + ". </strong>");
        }
        else {
            $('#analysis').append("<strong>The patient has 1 problem relating to COPD/Asthma which is " + copdasthmaNL + ". </strong>");
        }
    }

    if (anemiaNL.length > 0) {
        $('#analysis').append("<strong>The patient has Anemia. </strong>");
    }

    if (bleedNL.length > 0) {
        $('#analysis').append("<strong>The patient has an abnormal platelet count as their count is " + bleedNL[0].toLowerCase() + ". </strong>");
    }

    if (thyroidNL.length > 0) {
        $('#analysis').append("<strong>The patient has Thyroid Disease. </strong>");
    }

    if (liverNL.length > 0) {
        $('#analysis').append("<strong>The patient has Liver Disease. </strong>");
    }

    if (surgeryNL.length > 0) {
        $('#analysis').append("<strong>The patient has had surgery previously. <strong>");
    }

    if(heartNL.length > 1) {
        $('#analysis').append("<strong>The patient has had previous heart surgery.  They had " + heartNL[2] + " on the date " + heartNL[3] + " and had these complications: " + heartNL[4] + ". </strong>");
    }

    if(brainNL.length > 1) {
        $('#analysis').append("<strong>The patient has had previous brain surgery.  They had " + brainNL[2] + " on the date " + brainNL[3] + " and had these complications: " + brainNL[4] + ". </strong>");
    }











    var red = 0;
    var amber = 0;
    var green = 0;
    var bhighorlow = "";



    for (i in clinicquestions) { //here can just say if answer != undefined or whatever it's going to save as.. for conditional branching
        if(answers[i] != "N/A") {
            var data = "<tr><td>" + clinicquestions[i].questionText + "</td><td>" +answers[i]+"</td></tr>";
            $('#dataTable').append(data);
            console.log(data);
            if(clinicquestions[i].status == "Red" && answers[i] == "Yes") {
                red++;
            }
            if(clinicquestions[i].status == "Amber" && answers[i] == "Yes") {
                amber++;
            }
            if(clinicquestions[i].status == "Green" && answers[i] == "Yes") {
                green++;
            }

            if(clinicquestions[i].category == "Platelet Count") {
                bhighorlow = answers[i];
            }

        }

    }
    if (answers[(answers.length-3)] == 'unknown') {
        answers[(answers.length-3)] = "Not completed questionnaire.";
    }
    $('#conditions').append("<h1> The status of this patient is: " + answers[(answers.length-3)] + "</h1>");
    $('#conditions').append("<hr>");
    $('#conditions').append("<h3> The patient answered " + red + " red questions positively </h3>");
    $('#conditions').append("<hr>");
    $('#conditions').append("<h3> The patient answered " + amber + " amber questions positively </h3>");
    $('#conditions').append("<hr>");
    $('#conditions').append("<h3> The patient answered " + green + " green questions positively </h3>");
    $('#conditions').append("<hr>");

    if (hypertensionNL.length > 0) {
        $('#conditions').append("<h3> This partient has hypertension </h3>");
        $('#conditions').append("<hr>");
    }
    if (cadNL.length > 0) {
        $('#conditions').append("<h3> This patient responded positively to " + cadNL.length + " question(s) for Coronary Heart Disease </h3>");
        $('#conditions').append("<hr>");
    }
    if(renalNL.length > 0) {
        $('#conditions').append("<h3> This patient responded positively to " + renalNL.length + " question(s) for Renal Disease </h3>");
        $('#conditions').append("<hr>");
    }
    if (anaestheticNL.length > 0) {
        $('#conditions').append("<h3> This patient may have problems with anaesthetic </h3>");
        $('#conditions').append("<hr>");
    }
    if (arrhythmiaNL.length > 0) {
        $('#conditions').append("<h3> This patient answered positively to " + arrhythmiaNL.length + " question(s) for Arrhythmia </h3>");
        $('#conditions').append("<hr>");
    }
    if (cerebrovascularNL.length > 0) {
        $('#conditions').append("<h3> This patient answered positively to Cerebrovascular Disease </h3>");
        $('#conditions').append("<hr>");
    }
    if (painNL.length > 0) {
        $('#conditions').append("<h3> This patient has problems with neck/jaw pain or arthritis");
        $('#conditions').append("<hr>");
    }
    if (copdasthmaNL.length > 0) {
        $('#conditions').append("<h3> This patient responded positively to " + copdasthmaNL.length + " question(s) for COPD/Asthma </h3>");
        $('#conditions').append("<hr>");
    }
    if (anemiaNL.length > 0) {
        $('#conditions').append("<h3> This patient has anemia </h3>");
        $('#conditions').append("<hr>");
    }
    if (bleedNL.length > 0) {
        $('#conditions').append("<h3> This patient has a " + bhighorlow + " platelet count </h3>");
        $('#conditions').append("<hr>");
    }
    if (thyroidNL.length > 0) {
        $('#conditions').append("<h3> This patient has thyroid disease </h3>");
        $('#conditions').append("<hr>");
    }
    if (liverNL.length > 0) {
        $('#conditions').append("<h3> This patient has liver disease </h3>");
        $('#conditions').append("<hr>");
    }

    if (diabetesNL.length > 0) {
        $('#conditions').append("<h3> This patient has diabetes </h3>");
        $('#conditions').append("<hr>");
    }



}



function createNewLogin() {

    /* Saves all the information entered by the user
       and sends the information to the database to
       add a new patient user.
     */

    var name = $('#patientname').val();
    var password = $('#patientpassword').val();
    var user = $('#patientuser').val();
    var age = $('#patientage').val();
    var nurse = $('#patientnurse').val();
    console.log(name);

    if(name != "" && password != "" && user != "" && age != "" && nurse != "") {

        var dataToSend = "pname="+name+"&pass="+password+"&puser="+user+"&page="+Number(age)+"&pnurse="+nurse;

        $.ajax({
            type: "POST",
            url: "../src/sendlogintoserver.php",
            data: dataToSend,
            cache: false,
            success: function(result) {
                alert(result);
                window.open("../src/loginsuccess.html", "_self");
            }

        });




    } else {
        alert("Please enter all the details.");
    }
}











