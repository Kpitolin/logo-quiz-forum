



/**
 * Game title class
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */

var background;
var solo_button;
var solo_text;
var multi_button;
var multi_text;
var ranking_button;
var ranking_text;
var options_button;
var options_text;

var timerShowButtons;


gameTitle = {


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
    
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize(true);
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
    Header Creation and placement
    */
   

       logo_image = game.add.image(0,0,'logo');
       logo_image.position = getCenteredPosition(game.world.width,game.world.height, logo_image.getBounds().width, logo_image.getBounds().height);
       logo_image.position.y -= 3.5*offset_y;
       var style = { font: "bold 30px Arial", fill: "#182d3b"};
	   header_text = game.add.text(0,0, "LOGO QUIZZ", style);
	   header_text.position.y = logo_image.position.y + 2*offset_y;
       header_text.position.x = game.world.width/2-header_text.width/2;

    timer2 = this.game.time.events.loop(Phaser.Timer.SECOND , this.showButtons , this);

    





    },

    /**
     * Clic sur un niveau
     * Prépare l'interface "niveau en cours de jeu"
     * 
     * @param  {[type]} button [description]
     * @return {[type]}        [description]
     */


    btnLevelClic:function(button)
    {

            game.state.start("LevelSelect"); // lance l'interface "niveau en cours de jeu"

        
    },

    /**
     * Clic sur le classement
     * @param  {[type]} button [description]
     * @return {[type]}        [description]
     */


    rankingClic:function(button)
    {
        game.state.start("Ranking"); 

        
    },
    showButtons:function(){

        if (loggedIn)
        {

                document.getElementById('connexion-elements').style.display = 'none';

            /*
                Button Creation and placement
            */
            
            solo_button = game.add.button(0,0, 'button', this.btnLevelClic, this);
            solo_button.position = getCenteredPosition(game.world.width,game.world.height, solo_button.getBounds().width, solo_button.getBounds().height);

            // multi_button = game.add.button(0,0, 'button', this.btnLevelClic, this);
            // multi_button.position = new PIXI.Point(solo_button.position.x,solo_button.position.y + offset_y);

            ranking_button = game.add.button(0,0, 'button', this.rankingClic, this);
            ranking_button.position = new PIXI.Point(solo_button.position.x,solo_button.position.y + offset_y);   

            // options_button = game.add.button(0,0, 'button', this.btnLevelClic, this);
            // options_button.position = new PIXI.Point(solo_button.position.x,solo_button.position.y + 3* offset_y); 

            /*
            We define the style of the text which we will add to the buttons
            */

            var style_textbutton = { font: "bold 12px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: solo_button.getBounds().width, align: "center" };
            solo_text = game.add.text(0,0, "Solo", style_textbutton);
            // multi_text = game.add.text(0,0, "Multijoueur", style_textbutton);
            ranking_text = game.add.text(0,0, "Classement", style_textbutton);
            // options_text = game.add.text(0,0, "Options", style_textbutton);  

                /*We add the text to the buttons (we will use the local coordinate system for now on)*/

            solo_button.addChild(solo_text);
            // multi_button.addChild(multi_text);
            ranking_button.addChild(ranking_text);
            // options_button.addChild(options_text);

            /*Text positionning*/

            solo_text.position = getCenteredPosition( solo_button.getBounds().width, solo_button.getBounds().height, solo_text.getBounds().width, solo_text.getBounds().height);
            // multi_text.position = getCenteredPosition( multi_button.getBounds().width, multi_button.getBounds().height, multi_text.getBounds().width, multi_text.getBounds().height);
            ranking_text.position = getCenteredPosition( ranking_button.getBounds().width, ranking_button.getBounds().height, ranking_text.getBounds().width, ranking_text.getBounds().height);
            // options_text.position = getCenteredPosition( options_button.getBounds().width, options_button.getBounds().height, options_text.getBounds().width, options_text.getBounds().height);


        }


    }, 




}

    
