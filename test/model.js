

var game = new Phaser.Game(600, 750, Phaser.AUTO, 'gameFrame', { preload: preload, create: create, update: update });
var questions = [];
var ResultPercent = 0;
var myQuandle;
var AppId = 2;
var MemberId;
var QuandleId;


function preload() {

    //Hide popup elements
    $("#popupLogin").hide(); //div in Usercontrol Login.ascx
    $("#popupRegistration").hide();  //div in Usercontrol Regsitration.ascx
    $("#popupSaveResult").hide(); //div in Usercontrol SaveResultPopUp.ascx
    $("#popupShowNewPosition").hide(); //div in Usercontrol SaveResultPopUp.ascx
    $("#popupNotLoggedInQuestion").hide(); //div in Usercontrol SaveResultPopUp.ascx
    $('#popupLowerScore').hide(); //div in Usercontrol SaveResultPopUp.ascx
    

    //Show popup with loader Image
    $("#imgLoader").show();   
    $("#q-Loader").show();
    
    //load images
    game.load.image('questionImage', 'assets/question.png');
    game.load.image('imgbtnGo', 'assets/btnGo.png');
    game.load.image('titleImage', 'assets/quiz-title.png');
    game.load.image('errorsImage', 'assets/errors.png');
    game.load.image('togoImage', 'assets/togo.png');
    game.load.image('timeImage', 'assets/time.png');
    game.load.image('scoreImage', 'assets/score.png');
    game.load.image('startImage', 'assets/start.png');
    game.load.spritesheet('answerSheet', 'assets/spritesheet-answer.png', 260, 150);
    game.load.spritesheet('avaterSheet', 'assets/spritesheet-avater2.png', 200, 250);
    game.load.audio('lowDown', 'assets/audio/lowDown.ogg');
    game.load.audio('threeTone2', 'assets/audio/threeTone2.ogg');

    MemberId = $('#hfMemberId').val();
    QuandleId = $('#hfQuandleId').val();

   
   //get questions json object
   
    $.ajax({
        type: "POST",
        url: "../../../ws_4499/WebService.asmx/GetListQA",
        data: "{'QuandleId':" + QuandleId + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { questions = data.d; },
        failure: function () { alert("Sorry"); }
    });

    //get quandle json object
     $.ajax({
         type: "POST",
         url: "../../../ws_4499/WebService.asmx/getQuandleItem",
         data: "{'QuandleId':" + QuandleId + "}",
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function (data) { myQuandle = data.d; },
         failure: function () { alert("Sorry"); }
     });

   


     //hide popup after loading
     $("#imgLoader").hide();
     $("#q-Loader").fadeOut('slow');

 
}

var Results = {
    ResultId: 0,
    MemberId: 0,
    AppId: 2,
    QuandleId: 0,
    Percentage: 0,
    Score: 0,
    Time: 0,
    Errorlist: ''
};

//sprite variables
var imgQuestion;

//animation variables
var animAnswerA;
var animAnswerB;
var animAnswerC;
var animAnswerD;

//text variables
var textQuestion;
var textA;
var textB;
var textC;
var textD;

var txtA;
var txtB;
var txtC;
var txtD;

//Text for the Name of the Counters
var txtToGo;
var txtErrors;
var txtTime;
var txtScore;

var textErrorCounter;
var textCorrectcounter;
var txtQuestionsLeft;
var textResult;
var txtTime;

var answerLength = 120;
var questionLength = 150;

var txtResultIntro;
var txtTimeIntro;

//button variables
var btnStart;

var gameActive = false;


//Languages variables
var txtList_en = ["Score", "Errors", "To go", "Time"];
var txtList_de = ["Score", "Fehler", "Offenstehend", "Zeit"];
var txtList_nl = ["Score", "Fouten", "Resterend", "Tijd"];
var txtList;



//Timer Variables
var select; //schakel het selecteren van de antwoorden aan of uit
var selectTimer = 0; // als select is of laat de timer lopen totdat dezer weer aan gaat.
var questionSlidein;
var gameTimer = 0;


var language = "en";

//group variables
var groupAnswers;
var avater;
var groupAnswerText;

// game variables
var speed;
var gameActive = false;
var errorCounter;
var correctCounter;
var starOffsetX = 1200;
var questionIndex;
var correctAnswer; //willekeurige waarde 1 tot en met 4
var gameTimer = 0;
var firstGame = true; //boolean voor controle of het spel de eerste keer wordt opgestart
var questionsPassed; //variabele voor het aantal vragen die zijn geweest

var btnGo;

//sound variables
var errorSound;
var correctSound;

var imgCounter1;
var imgCounter2;
var imgCounter3;
var imgCounter4;
var imgTimer;
var itemAnswer;
var itemText;

var timer;
var imgTitle;

//Quandle varriables


function create() {



   
    switch (language) {
        case 'de':
            txtList = txtList_de;
            break;
        case 'nl':
            txtList = txtList_nl;
            break;
        default:
            txtList = txtList_en;
    }

    //add sounds
    errorSound = game.add.audio('lowDown', 1, true);
    correctSound = game.add.audio('threeTone2', 1, true);


    game.stage.backgroundColor = '#ffffff';

    //Place question sprite 
    imgQuestion = game.add.sprite(100, 20, 'questionImage');
    imgCounter1 = game.add.sprite(20, 600, 'togoImage');
    imgCounter2 = game.add.sprite(160, 600, 'errorsImage');
    imgCounter3 = game.add.sprite(300, 600, 'scoreImage');
    imgCounter4 = game.add.sprite(440, 600, 'timeImage');

    imgTitle = game.add.sprite(90, 50, 'titleImage');
    //   imgTimer = game.add.sprite(20, 600, 'timerImage');
    //   imgTimer.scale.x = 1;

    //Place answer sprites
    groupAnswers = game.add.group(); //Create group for answer sprites 
    groupAnswerText = game.add.group();

    textQuestion = game.add.text(120, 40, '', { font: "64px Times New Roman", fill: 'white', align: 'center' });
    textQuestion.wordWrap = true;
    textQuestion.wordWrapWidth = 380;
    textQuestion.font = ("Times New Roman");

    txtA = game.add.text(140, 265, 'A', { font: "24px Arial", fill: 'white' });
    txtB = game.add.text(420, 265, 'B', { font: "24px Arial", fill: 'white' });
    txtC = game.add.text(140, 435, 'C', { font: "24px Arial", fill: 'white' });
    txtD = game.add.text(420, 435, 'D', { font: "24px Arial", fill: 'white' });

    textA = game.add.text(30, 290, '', { font: "18px Arial", fill: 'white' });
    textA.wordWrap = true;
    textA.wordWrapWidth = 230;
    textA.font = ("Times New Roman");

    textB = game.add.text(310, 290, '', { font: "18px Arial", fill: 'white' });
    textB.wordWrap = true;
    textB.wordWrapWidth = 230;
    textB.font = ("Times New Roman");

    textC = game.add.text(30, 460, '', { font: "18px Arial", fill: 'white' });
    textC.wordWrap = true;
    textC.wordWrapWidth = 230;
    textC.font = ("Times New Roman");

    textD = game.add.text(310, 460, '', { font: "18px Arial", fill: 'white' });
    textD.wordWrap = true;
    textD.wordWrapWidth = 230;
    textD.font = ("Times New Roman");

    txtResultIntroName = game.add.text(300, 350, txtList[0], { font: "24px Arial", fill: '#034888' });
    txtResultIntroName.fontWeight = 'bold';


    txtTimeIntroName = game.add.text(300, 450, txtList[3], { font: "24px Arial", fill: '#034888' });
    txtTimeIntroName.fontWeight = 'bold';

    txtResultIntroName.visible = false;
    txtTimeIntroName.visible = false;


    txtResultIntro = game.add.text(300, 400, '', { font: "24px Arial", fill: '#034888' });
    txtTimeIntro = game.add.text(300, 500, '', { font: "24px Arial", fill: '#034888' });

    avater = game.add.sprite(100, 330, 'avaterSheet');
    avater.animations.add('avater01', [0], 4, true);
    avater.animations.add('avater02', [1], 4, true);
    avater.animations.add('avater03', [2], 4, true);
    avater.animations.add('avater04', [3], 4, true);
    avater.animations.add('avater05', [4], 4, true);
    avater.animations.add('avater06', [5], 4, true);
    avater.animations.add('avater07', [6], 4, true);
    avater.animations.play('avater01');

    for (var y = 0; y < 2; y++) {
        for (var x = 0; x < 2; x++) {

            itemAnswer = groupAnswers.create(20 + 280 * x, 260 + 170 * y, 'answerSheet', 0);

            // Enable input.
            itemAnswer.inputEnabled = true;
            itemAnswer.input.start(0, true);
            itemAnswer.events.onInputDown.add(select);

            //Add Animations
            itemAnswer.animations.add('correct', [1, 4], 4, true);
            itemAnswer.animations.add('false', [1, 5], 4, true);
            itemAnswer.animations.add('hover', [1], 4, true);
            itemAnswer.animations.add('showcorrect', [4], 4, true);
            itemAnswer.animations.add('answerA', [0], 4, true);
            itemAnswer.animations.add('answerB', [1], 4, true);
            itemAnswer.animations.add('answerC', [2], 4, true);
            itemAnswer.animations.add('answerD', [3], 4, true);
            itemAnswer.animations.play('answerB');
            // itemAnswer.animations.play('answerB');
        }
    }

    //Place Names for Counters
    txtToGo = game.add.text(40, 610, txtList[2], { font: "20px Arial", fill: "white" });
    txtErrors = game.add.text(170, 610, txtList[1], { font: "20px Arial", fill: 'white' });
    txtScore = game.add.text(310, 610, txtList[0], { font: "20px Arial", fill: "white" });
    txtTime = game.add.text(450, 610, txtList[3], { font: "20px Arial", fill: "white" });

    //Place Counter Objects
    txtQuestionsLeft = game.add.text(40, 640, "0", { font: "20px Arial", fill: "white" });
    textErrorCounter = game.add.text(170, 640, "0", { font: "20px Arial", fill: 'white' });
    textResult = game.add.text(310, 640, "100%", { font: "20px Arial", fill: "white" });
    txtTime = game.add.text(450, 640, "0", { font: "20px Arial", fill: "white" });

    //btnFullscreen = game.add.button(750, 365, 'imgFullscreen', setFullscreen, this, 2, 1, 0);
    //btnGo = game.add.button(350, 300, 'imgbtnGo', start, this, 2, 1, 0);


    //game.time.events.loop(Phaser.Timer.SECOND, updateTimerCounter, this);
    //game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    toggleVisibilityGame();
    // toggleVisibilityIntro();

    game.time.events.loop(100, updateTimerCounter, this);


    btnStart = game.add.button(240, 600, 'startImage', start, this, 2, 1, 0);


}

function toggleVisibilityGame() {
    groupAnswers.visible = !groupAnswers.visible;
    textA.visible = !textA.visible;
    textB.visible = !textB.visible;
    textC.visible = !textC.visible;
    textD.visible = !textD.visible;
    txtA.visible = !txtA.visible;
    txtB.visible = !txtB.visible;
    txtC.visible = !txtC.visible;
    txtD.visible = !txtD.visible;
    imgQuestion.visible = !imgQuestion.visible;
    txtToGo.visible = !txtToGo.visible;
    txtErrors.visible = !txtErrors.visible;
    txtScore.visible = !txtScore.visible;
    txtTime.visible = !txtTime.visible;
    textQuestion.visible = !textQuestion.visible;
    textResult.visible = !textResult.visible;
    textErrorCounter.visible = !textErrorCounter.visible;
    txtQuestionsLeft.visible = !txtQuestionsLeft.visible;
    imgCounter1.visible = !imgCounter1.visible;
    imgCounter2.visible = !imgCounter2.visible;
    imgCounter3.visible = !imgCounter3.visible;
    imgCounter4.visible = !imgCounter4.visible;


}

function toggleVisibilityIntro() {
    imgTitle.visible = !imgTitle.visible;
    avater.visible = !avater.visible;
    btnStart.visible = !btnStart.visible;
    txtResultIntro.visible = !txtResultIntro.visible;
    txtTimeIntro.visible = !txtTimeIntro.visible;

}

function start() {
 
    toggleVisibilityGame();
    toggleVisibilityIntro();
    ResultPercent = 0;
    questionIndex = 0;
    questionSlidein = false;
    questionsPassed = 0;
    gameTimer = 0;
    gameActive = true;
    //Error Counter
    errorCounter = 0;
    textErrorCounter.text = errorCounter;
    txtResultIntroName.visible = false;
    txtTimeIntroName.visible = false;
    nextQuestion();
}

function stop() {

    toggleVisibilityGame();
    toggleVisibilityIntro();
    txtResultIntroName.visible = true;
    txtTimeIntroName.visible = true;
    gameActive = false;


   


    if (ResultPercent > -1 && ResultPercent < 30) {
        avater.animations.play('avater07');
    }

    if (ResultPercent > 29 && ResultPercent < 60) {
        avater.animations.play('avater06');
    }

    if (ResultPercent > 59 && ResultPercent < 80) {
        avater.animations.play('avater05');
    }

    if (ResultPercent > 79 && ResultPercent < 100) {
        avater.animations.play('avater02');
    }

    if (ResultPercent == 100) {
        avater.animations.play('avater03');
    }

   
   

    txtResultIntro.text = ResultPercent + "%";
    txtTimeIntro.text = gameTimer;
    txtTime.text = 0;


    if (myQuandle.Challenge!= 1)
    {
        showSaveResultPopUp(); // /LoggedIn/Apps/js/SaveResultPopup.js
    }

}



function nextQuestion() {

    //Variabelen voor de selectie van het antwoord op 0 stellen
    select = true;
    selectTimer = 0;



    //Zet alle antwoord animaties weer op normaal

    groupAnswers.getAt(0).animations.play('answerB');
    groupAnswers.getAt(1).animations.play('answerB');
    groupAnswers.getAt(2).animations.play('answerB');
    groupAnswers.getAt(3).animations.play('answerB');

    correctAnswer = game.rnd.integerInRange(1, 4);

    var tempQuestionsList = [];
    var tempQuestionsListIndex;
    var falseAnswersList = [];
    var falseAnswersListIndex = 0;


    //Fill tempQuestionsList
    for (index = 0; index < questions.length; index++) {
        tempQuestionsList[index] = index;
    }


    tempQuestionsList.splice(questionIndex, 1); //verwijder de huidige vraag van de indexlist  

    var string = questions[questionIndex].Question1;
    string = trimString(string, questionLength);
    textQuestion.text = string;
    textQuestion.fontSize = setFontsize(string.length);

    //Fill falseAnswersList
    for (index = 0; index < 3; index++) {
        var ListLength = tempQuestionsList.length - 1;
        var indexrandom = game.rnd.integerInRange(0, ListLength);
        var pickAnswer = tempQuestionsList[indexrandom];
        tempQuestionsList.splice(indexrandom, 1)
        falseAnswersList[index] = pickAnswer;
    }

    if (correctAnswer == 1) {
        string = questions[questionIndex].Answer1;
    }
    else {
        string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;
        falseAnswersListIndex += 1;
    }

    string = trimString(string, answerLength);
    textA.text = string;
    textA.fontSize = setFontsize(string.length);

    if (correctAnswer == 2) {
        string = questions[questionIndex].Answer1;
        string = trimString(string, answerLength);
        textB.text = string;
    }
    else {
        string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;

        falseAnswersListIndex += 1;
    }

    string = trimString(string, answerLength);
    textB.text = string;
    textB.fontSize = setFontsize(string.length);

    if (correctAnswer == 3) {
        string = questions[questionIndex].Answer1;
    }
    else {
        string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;
        falseAnswersListIndex += 1;
    }

    string = trimString(string, answerLength);
    textC.text = string;
    textC.fontSize = setFontsize(string.length);


    if (correctAnswer == 4) {
        string = questions[questionIndex].Answer1;
    }
    else {
        string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;
        falseAnswersListIndex += 1;
    }

    string = trimString(string, answerLength);
    textD.text = string;
    textD.fontSize = setFontsize(string.length);

    questionSlidein = true;

    questionIndex += 1;
    var rest = questions.length - questionIndex;
    rest += 1;
    txtQuestionsLeft.text = rest;


    if (questionsPassed != 0) {
        var TotalCorrect = questionsPassed - errorCounter;
        ResultPercent = (TotalCorrect / questionsPassed) * 100;
        ResultPercent = Math.round(ResultPercent);
        textResult.text = ResultPercent + "%";

    }
    questionsPassed += 1;

    //controleer of er nog vragen zijn
    var questionsleft = questions.length - questionIndex;

    //if (questionsleft == 0)
    //    stop();




}

function update() {

    if (!select) {

        if (questionsPassed == questions.length) {
            gameActive = false;
        }


       
        selectTimer += 1;
        

        if (selectTimer > 60) {
            textQuestion.x += -40;
            imgQuestion.x += -40;

            if (imgQuestion.x < -800) {
                imgQuestion.x = 800;
                textQuestion.x = 820;

                if (questionsPassed == questions.length) {
                    select = true;
                    stop();
                }
                else {
                    nextQuestion();
                }
            }
        }
    }

    if (questionSlidein) {


        if (imgQuestion.x > 100) {
            textQuestion.x += -40;
            imgQuestion.x += -40;
        }
        else {
            questionSlidein = false;
        }


    }
}

function updateTimerCounter() {
    if (gameActive)
        gameTimer++;

    txtTime.setText(gameTimer);
}

function select(item, pointer) {
    var selectedAnswer = groupAnswers.getIndex(item) + 1;

    if (select) {
        if (correctAnswer == selectedAnswer) {
            item.animations.play('correct');
            correctSound.play('', 0, 1, false);
        }
        else {
            item.animations.play('false');
            errorSound.play('', 0, 1, false);
            var itemCorrect = correctAnswer - 1;
            errorCounter += 1;
            textErrorCounter.text = errorCounter;

            groupAnswers.getAt(itemCorrect).animations.play('showcorrect');
        }

        select = false;
    }

}

function retrieveQuerystring(name) {
    name = name.replace(/[\[]/, "--- \\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var myQueryString = regex.exec(window.location.href);
    if (myQueryString == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function trimString(textString, textStringLength) {
    if (textString.length > textStringLength) {
        textString = textString.substring(0, textStringLength);
        textString += "...";
    }
    return textString;
}

function setFontsize(textLength) {

    var fontSize = 70 - textLength;

    if (fontSize < 18) {
        fontSize = 18;
    }

    if (fontSize > 35) {
        fontSize = 35;
    }

    return fontSize;
}



  