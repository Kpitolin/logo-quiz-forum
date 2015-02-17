
/**
 * Classe de préchargement de tous les éléments du jeu
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */
const nb_answers = 3;
var  validation_button;
var button;



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

game.load.image('logo', 'assets/fra_logo.png',100,32);
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
    groupAnswerText = game.add.group();


 
    var i = nb_answers;

    while (i>0){

          
           if (i==0) {
            itemAnswer = groupAnswers.create(0,0, 'answerSheet', 0);
            itemAnswer.position = new PIXI.Point(game.world.width/2-itemAnswer.width/2,header_text.position.y+0.25*offset_y);
            
          } else
          {
            itemAnswer = groupAnswers.create(0,0, 'answerSheet', 0);
            itemAnswer.position = new PIXI.Point(game.world.width/2-itemAnswer.width/2,header_text.position.y+1.5*i*offset_y);

          }


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
           // itemAnswer.animations.play('answerB');
             i--;


        }
    






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

    alert('ihi');
    groupAnswers.getAt(0).animations.play('showcorrect');

    //validation_text.setText("Suivant"); 

    //logo_image.kill();
    //game.state.start("GameTitle");

    // game.add.tween(logo).to({x:500}, 400).start(); //change player.x to 500 over 400ms

        
  },

  select:function(item, pointer) {
        item.animations.play('answerB');

  },







}

