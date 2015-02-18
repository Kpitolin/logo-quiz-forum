
/**
 * Classe de préchargement de tous les éléments du jeu
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */

 //group variables
var groupAnswers;
var avater;
var groupAnswerText;
const nb_answers = 3;
var  validation_button;
var button;
var selectedAnswers = [];
var selectedAnswerText;



playLevelSolo = {


/**
 * Methods
 * 
 * @type {Object}
 */

/**
 * Appel automatique lors de l'instanciation
 * Initialisation de l'objet
 * 
 * @return {[type]} [description]
 */
init: function()
{
    //show the screen in full screen 
    /*
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize(true);*/
    game.stage.backgroundColor = '#ffffff';

    //game.stage.backgroundColor = '#cccccc';// la couleur de fond du jeu
},

preload: function() {

//We load the images and other objects from the assets

game.load.image('logo', this.logoToLoad(),100,32);
game.load.image('valid_button', 'assets/green-button-hi.png',100,32);
game.load.image('normal_button', 'assets/blue-button-hi.png',100,32);
game.load.image('invalid_button', 'assets/red-button-hi.png',100,32);
game.load.spritesheet('answerSheet', 'assets/spritesheet-answer.png', 100, 69);


	
},

create: function () 
{


	
	/*
    Header Creation and placement
    */
   

     logo_image = game.add.image(0,0,'logo');
     logo_image.position = getCenteredPosition(game.world.width,game.world.height, logo_image.getBounds().width, logo_image.getBounds().height);
     logo_image.position.y -= 4*offset_y;
     var style = { font: "20px Arial", fill: "#182d3b"};
	   header_text = game.add.text(0,0, "A quelle entreprise correspond ce logo ?", style);
	   header_text.position.y = logo_image.position.y + 2*offset_y;
     header_text.position.x = game.world.width/2-header_text.width/2;

 	  /*
    Answer Buttons Creation and placement
    */


    //Place answer sprites
    groupAnswers = game.add.group(); //Create group for answer sprites 


 
    var i = 0;

  while (i<nb_answers){

    itemAnswer = groupAnswers.create(0,0, 'answerSheet', 0);

     switch (i)

    {
      case 0 :
      case 2 : 
        itemAnswer.position = new PIXI.Point(game.world.width/2-itemAnswer.width/2,header_text.position.y+(2*i+1)*offset_y);
      break;
      case 1:
        itemAnswer.position = new PIXI.Point(game.world.width/2-itemAnswer.width/2,header_text.position.y+(2+i)*offset_y);
      break;


    };

    text = game.add.text(0, 0, '', { font: "18px Arial", fill: 'white' });
    text.wordWrap = true;
    text.wordWrapWidth = itemAnswer.width;
    text.font = ("Times New Roman");
    itemAnswer.addChild(text);
    text.position = getCenteredPosition(itemAnswer.getBounds().width, itemAnswer.getBounds().height, text.getBounds().width, text.getBounds().height);


    // Enable input
    itemAnswer.inputEnabled = true;
    itemAnswer.input.start(0, true);
    itemAnswer.events.onInputDown.add(this.select);

    //Add Animations
    itemAnswer.animations.add('correct', [1, 4], 4, true);
    itemAnswer.animations.add('false', [1, 5], 4, true);
    itemAnswer.animations.add('hover', [1], 4, true);
    itemAnswer.animations.add('showcorrect', [4], 4, true);
    itemAnswer.animations.add('answerA', [0], 4, true);
    itemAnswer.animations.add('answerB', [1], 4, true);
    itemAnswer.animations.add('answerC', [2], 4, true);
    itemAnswer.animations.add('answerD', [3], 4, true);
     i++;


  }
    


  this.updateAnswerTexts();



  /*
    Validation Button Creation and placement
    */


  validation_button = game.add.button(0,0, 'normal_button', this.validationClic, this);
  validation_button.position = new PIXI.Point(solo_button.position.x,solo_button.position.y + 4* offset_y);  // here use the position of the n element of the group  


  /*
  We define the style of the text which we will add to the buttons
  */

  var style_textbutton = { font: "bold 12px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: solo_button.getBounds().width, align: "center" };

	validation_text = game.add.text(0,0, "Valider", style_textbutton);

	/*We add the text to the buttons (we will use the local coordinate system for now on)*/

  validation_button.addChild(validation_text);

  /*Text positionning*/

  validation_text.position = getCenteredPosition( validation_button.getBounds().width, validation_button.getBounds().height, validation_text.getBounds().width, validation_text.getBounds().height);



    },

/**
 * Clic on validation button
 * 
 * 
 * @param  {[type]} button [description]
 * @return {[type]}        [description]
 */
  validationClic:function(button)

  {

    // alert(getGameContent(game.global.currentLevel)[0]["img_src"]);
      var item = groupAnswers.getAt(selectedAnswers);


      if (this.correct(selectedAnswers))
      {
        item.animations.play('correct');

      }
      else
      {
        item.animations.play('false');
       // groupAnswers.getAt(i).animations.play('showcorrect');

      }



    //validation_text.setText("Suivant"); 

    //logo_image.kill();
    //game.state.start("GameTitle");

    // game.add.tween(logo).to({x:500}, 400).start(); //change player.x to 500 over 400ms

        
  },

  select:function(item, pointer) {


    /**
    *  Deselect the old answers
    */

    if (isNotEmpty(selectedAnswers))
    {

      for (var i = selectedAnswers.length - 1; i >= 0; i--) {
        groupAnswers.getAt(selectedAnswers[i]).play('answerD');
        selectedAnswers.splice(i,1);
        alert(selectedAnswers[i]);

      };

    }

    /**
    *  select animation for the answer 
    */

        item.animations.play('answerC');
        /**
        * Save selected answer
        */

        selectedAnswers.push(groupAnswers.getIndex(item));       

      



    // /**
    // *  select animation for the answer 
    // */
    //   if(selectedAnswers.contains(groupAnswers.getIndex(item)+1))
    //   {
    //     item.animations.play('answerD');

    //     selectedAnswers.splice(groupAnswers.getIndex(item),1);
    //     alert("we remove "+selectedAnswers[i]);
    //   }
    //   else
    //   {
    //     item.animations.play('answerC');
    //     /**
    //     * Save selected answer
    //     */

    //     selectedAnswers.push(groupAnswers.getIndex(item));       

    //   }


  },

  updateAnswerTexts:function(){

    var itemAnswer;

    for (var i = groupAnswers.length - 1; i >= 0; i--) {
             var style = { font: "15px Times New Roman", fill: 'white'};

            itemAnswer = groupAnswers.getAt(i);
            text = game.add.text(0, 0,getGameContent(game.global.currentLevel)[game.global.currentLogo][this.answerIdGen(i)], style);
            text.wordWrap = true;
            text.wordWrapWidth = itemAnswer.width;
            itemAnswer.addChild(text);
            text.position = getCenteredPosition(itemAnswer.getBounds().width, itemAnswer.getBounds().height, text.getBounds().width, text.getBounds().height);

    };
  },

  answerIdGen:function(index){

    if(typeof index=="number")
    num = 1+index;
    return "answer"+num;
  },

  logoToLoad:function(){


    return "assets/" + getGameContent(game.global.currentLevel)[game.global.currentLogo]["img_src"];
  },  

  correct:function(index){


    alert(getGameContent(game.global.currentLevel)[game.global.currentLogo][this.answerIdGen(index)]);
   if (getGameContent(game.global.currentLevel)[game.global.currentLogo][this.answerIdGen(index)]
    == getGameContent(game.global.currentLevel)[game.global.currentLogo]["correct-answer"])
    {
     return true;
    }
   return false; 
  },

  next:function(){

    // //Variabelen voor de selectie van het antwoord op 0 stellen
    // select = true;
    // selectTimer = 0;



    // //Zet alle antwoord animaties weer op normaal

    // groupAnswers.getAt(0).animations.play('answerB');
    // groupAnswers.getAt(1).animations.play('answerB');
    // groupAnswers.getAt(2).animations.play('answerB');
    // groupAnswers.getAt(3).animations.play('answerB');

    // correctAnswer = game.rnd.integerInRange(1, 4);

    // var tempQuestionsList = [];
    // var tempQuestionsListIndex;
    // var falseAnswersList = [];
    // var falseAnswersListIndex = 0;


    // //Fill tempQuestionsList
    // for (index = 0; index < questions.length; index++) {
    //     tempQuestionsList[index] = index;
    // }


    // tempQuestionsList.splice(questionIndex, 1); //verwijder de huidige vraag van de indexlist  

    // var string = questions[questionIndex].Question1;
    // string = trimString(string, questionLength);
    // textQuestion.text = string;
    // textQuestion.fontSize = setFontsize(string.length);

    // //Fill falseAnswersList
    // for (index = 0; index < 3; index++) {
    //     var ListLength = tempQuestionsList.length - 1;
    //     var indexrandom = game.rnd.integerInRange(0, ListLength);
    //     var pickAnswer = tempQuestionsList[indexrandom];
    //     tempQuestionsList.splice(indexrandom, 1)
    //     falseAnswersList[index] = pickAnswer;
    // }

    // if (correctAnswer == 1) {
    //     string = questions[questionIndex].Answer1;
    // }
    // else {
    //     string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;
    //     falseAnswersListIndex += 1;
    // }

    // string = trimString(string, answerLength);
    // textA.text = string;
    // textA.fontSize = setFontsize(string.length);

    // if (correctAnswer == 2) {
    //     string = questions[questionIndex].Answer1;
    //     string = trimString(string, answerLength);
    //     textB.text = string;
    // }
    // else {
    //     string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;

    //     falseAnswersListIndex += 1;
    // }

    // string = trimString(string, answerLength);
    // textB.text = string;
    // textB.fontSize = setFontsize(string.length);

    // if (correctAnswer == 3) {
    //     string = questions[questionIndex].Answer1;
    // }
    // else {
    //     string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;
    //     falseAnswersListIndex += 1;
    // }

    // string = trimString(string, answerLength);
    // textC.text = string;
    // textC.fontSize = setFontsize(string.length);


    // if (correctAnswer == 4) {
    //     string = questions[questionIndex].Answer1;
    // }
    // else {
    //     string = questions[falseAnswersList[falseAnswersListIndex]].Answer1;
    //     falseAnswersListIndex += 1;
    // }

    // string = trimString(string, answerLength);
    // textD.text = string;
    // textD.fontSize = setFontsize(string.length);

    // questionSlidein = true;

    // questionIndex += 1;
    // var rest = questions.length - questionIndex;
    // rest += 1;
    // txtQuestionsLeft.text = rest;


    // if (questionsPassed != 0) {
    //     var TotalCorrect = questionsPassed - errorCounter;
    //     ResultPercent = (TotalCorrect / questionsPassed) * 100;
    //     ResultPercent = Math.round(ResultPercent);
    //     textResult.text = ResultPercent + "%";

    // }
    // questionsPassed += 1;

    // //controleer of er nog vragen zijn
    // var questionsleft = questions.length - questionIndex;

    // //if (questionsleft == 0)
    // //    stop();




  }







}

