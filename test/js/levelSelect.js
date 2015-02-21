/**
 * Level select class
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */


levelSelect = {


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

   // game.stage.backgroundColor = '#cccccc';// la couleur de fond du jeu
},

preload: function() {

//We load the images and other objects from the assets

game.load.image('logo', 'assets/fra_logo.png',100,32);
game.load.image('button', 'assets/blue-button-hi.png',100,32);


	
},

create: function () 
{

    offset_y = const_offset_y_perc*game.world.height/100;

	

 	/*
    Button Creation and placement
    */

    solo_button = game.add.button(0,0, 'button', this.debutant, this);
    solo_button.position = getCenteredPosition(game.world.width,game.world.height, solo_button.getBounds().width, solo_button.getBounds().height);

    multi_button = game.add.button(0,0, 'button', this.intermediaire, this);
    multi_button.position = new PIXI.Point(solo_button.position.x,solo_button.position.y + offset_y);

    ranking_button = game.add.button(0,0, 'button', this.expert, this);
    ranking_button.position = new PIXI.Point(solo_button.position.x,solo_button.position.y + 2* offset_y);   


    /*
    We define the style of the text which we will add to the buttons
    */

    var style_textbutton = { font: "bold 12px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: solo_button.getBounds().width, align: "center" };
	solo_text = game.add.text(0,0, "Débutant", style_textbutton);
	multi_text = game.add.text(0,0, "Intermédiaire", style_textbutton);
	ranking_text = game.add.text(0,0, "Expert", style_textbutton);




	/*We add the text to the buttons (we will use the local coordinate system for now on)*/

    solo_button.addChild(solo_text);
    multi_button.addChild(multi_text);
    ranking_button.addChild(ranking_text);

    /*Text positionning*/

    solo_text.position = getCenteredPosition( solo_button.getBounds().width, solo_button.getBounds().height, solo_text.getBounds().width, solo_text.getBounds().height);
    multi_text.position = getCenteredPosition( multi_button.getBounds().width, multi_button.getBounds().height, multi_text.getBounds().width, multi_text.getBounds().height);
    ranking_text.position = getCenteredPosition( ranking_button.getBounds().width, ranking_button.getBounds().height, ranking_text.getBounds().width, ranking_text.getBounds().height);



    },

    /**
     * Action when you click on a level button
     * Prépare l'interface "niveau en cours de jeu"
     * 
     * @param  {[type]} button [description]
     * @return {[type]}        [description]
     */


    debutant:function(button)
    {
        game.global.currentLevel = 1;
        game.global.answer_delay = 15;
        game.state.start("PlayLevelSolo");

    },
    intermediaire:function(button)
    {
        game.global.currentLevel = 2;
        game.global.answer_delay = 10;
        game.state.start("PlayLevelSolo");

    },
    expert:function(button)
    {
        game.global.currentLevel = 3;
        game.global.answer_delay = 5;
        game.state.start("PlayLevelSolo");

    }



}

