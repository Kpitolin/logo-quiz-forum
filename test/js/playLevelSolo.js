
/**
 * Classe de préchargement de tous les éléments du jeu
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */

 //group variables
var groupAnswers;
var groupAnswerText;
const nb_answers = 3;
const delay = 6;
var  validation_button;
var button;
var selectedAnswers = [];
var selectedAnswerText;
var logo_image ;
var gameActive = false;


//Timer Variables
var selectTimer = 0; 
var timer;
var gameTimer = 0;
var txtTime;


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
    game.stage.backgroundColor = '#ffffff';  // backgroundColor


    /** 
      Choose a Logo to display randomly
    */

    if (game.global.displayeLogos===undefined){
      game.global.displayeLogos = new Array();
    }

    var numLogo;
    do{
            numLogo = game.rnd.integerInRange(0, 100);

    }
    while (numLogo === undefined ||  game.global.displayeLogos.contains(numLogo));
    game.global.currentLogo = numLogo; //the logo asked is random (challenge the user memory)



},

preload: function() {

// We load the images and other objects from the assets

game.load.image('logo', this.logoToLoad(),100,32); // 100,32
game.load.image('valid_button', 'assets/green-button-hi.png',100,32); // 100,32
game.load.image('normal_button', 'assets/blue-button-hi.png',100,32); // 100,32
game.load.image('invalid_button', 'assets/red-button-hi.png',100,32); // 100,32
game.load.spritesheet('answerSheet', 'assets/cadre.png', 200, 50); //100,32 spritesheet-answer.png


	
},


create: function () 
{

    game.global.displayeLogos.push(game.global.currentLogo);
	
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

    //Add Animations 'nom', 'couleurclignote','secondepourclignotement'
    itemAnswer.animations.add('correct', [2, 0], 4, true); 
    itemAnswer.animations.add('false', [2, 1], 4, true);
    itemAnswer.animations.add('hover', [2], 4, true);
    itemAnswer.animations.add('showcorrect', [0], 4, true);
    // itemAnswer.animations.add('answerA', [2], 0, true); // OSEF
    // itemAnswer.animations.add('answerB', [2], 0, true); // OSEF
    itemAnswer.animations.add('answerC', [2], 4, true); // NORMAL AVEC SELECTION
    itemAnswer.animations.add('answerD', [3], 4, true); // NORMAL SANS SELECTION
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

    // Timer text creation
    txtTime = game.add.text(20,20 , "Temps écoulé : 0", { font: "15px Arial", fill: "black" });
    txtScore = game.add.text(20,40 , "Score : " + game.global.score, { font: "15px Arial", fill: "black" });
    gameActive = true;

    //  Set a TimerEvent to occur after 3 seconds
    timer = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTimerCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.

    gameTimer = 0;
    gameActive = true;


    },

/**
 * Clic on validation button
 * 
 * 
 * @param  {[type]} button [description]
 * @return {[type]}        [description]
 */
 update:function(){



        // Optimize this with a timer

        selectTimer += 1;

        if(selectTimer > 60*delay && !gameActive){
          this.next();
        }

        // if(!gameActive){
          
        //   var once = game.time.events.add(60*delay, this.next(), this);


        // }



 },
  validationClic:function(button)

  {
        gameActive = false;


      if (selectedAnswers.length == 1 && this.correct(selectedAnswers))
      {
        groupAnswers.getAt(selectedAnswers).animations.play('correct');

      }
      else if (selectedAnswers.length !=0 )
      {
        groupAnswers.getAt(selectedAnswers).animations.play('false');

      }else

      this.stop();

        
  },

  updateTimerCounter:function() {
    if (gameActive)
        gameTimer++;

    txtTime.setText('Temps écoulé : ' + gameTimer);

  },

  stop:function(){

      gameActive = false;


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
      


  },

  updateAnswerTexts:function(){

    var itemAnswer;

    for (var i = groupAnswers.length - 1; i >= 0; i--) {
             var style = { font: "15px Times New Roman", fill: 'black'};

            itemAnswer = groupAnswers.getAt(i);
            text = game.add.text(0, 0,getGameContent(game.global.currentLevel)[game.global.currentLogo][this.answerIdGen(i)], style);
            text.wordWrap = true;
            text.wordWrapWidth = itemAnswer.width;
            itemAnswer.addChild(text);
            text.position = getCenteredPosition(itemAnswer.getBounds().width, itemAnswer.getBounds().height, text.getBounds().width, text.getBounds().height);

    };
  },

  answerIdGen:function(index){
    var num = 1+index*1;
    return "answer"+num;
  },

  logoToLoad:function(){


    return "assets/" + getGameContent(game.global.currentLevel)[game.global.currentLogo]["img_src"];
  },  

  correct:function(index){

   if (getGameContent(game.global.currentLevel)[game.global.currentLogo][this.answerIdGen(index)]
    == getGameContent(game.global.currentLevel)[game.global.currentLogo]["correct-answer"])
    {
      game.global.score++;
     return true;
    }
    if(game.global.score>0)
      game.global.score--;
   return false; 
  },


  findCorrect:function(){

    for (var i = groupAnswers.length - 1; i >= 0; i--) {

     if (getGameContent(game.global.currentLevel)[game.global.currentLogo][this.answerIdGen(i)]
      == getGameContent(game.global.currentLevel)[game.global.currentLogo]["correct-answer"])
      {
        return i;
      }


    }
    return -1;



  },
  next:function(){

    txtTime.text = 'Temps écoulé : '+0;

    selectTimer = 0;

    for (var i = groupAnswers.length - 1; i >= 0; i--) {

        groupAnswers.getAt(i).animations.play('answerB');

    };   


    game.global.currentLogo ++;

    logo_image.destroy();

    game.state.start('PlayLevelSolo'); 

    currentProgress ++;



  }









}

