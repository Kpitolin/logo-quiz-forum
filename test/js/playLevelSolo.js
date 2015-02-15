
/**
 * Classe de préchargement de tous les éléments du jeu
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */
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
game.load.image('button', 'assets/green-button-hi.png',100,32);


	
},

create: function () 
{


	
	/*
    Header Creation and placement
    */
   

       logo_image = game.add.image(0,0,'logo');
       logo_image.position = getCenteredPosition(game.world.width,game.world.height, logo_image.getBounds().width, logo_image.getBounds().height);
       logo_image.position.y -= offset_y;
       var style = { font: "20px Arial", fill: "#182d3b"};
	   header_text = game.add.text(0,0, "A quelle entreprise correspond ce logo ?", style);
	   header_text.position.y = logo_image.position.y + 2*offset_y;
       header_text.position.x = game.world.width/2-header_text.width/2;

 	/*
    Button Creation and placement
    */


    ranking_button = game.add.button(0,0, 'button', this.btnLevelClic, this);
    ranking_button.position = new PIXI.Point(solo_button.position.x,solo_button.position.y + 2* offset_y);   

    /**
   *
   *
   */


    /*
    We define the style of the text which we will add to the buttons
    */

    var style_textbutton = { font: "bold 12px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: solo_button.getBounds().width, align: "center" };

	ranking_text = game.add.text(0,0, "Valider", style_textbutton);




	/*We add the text to the buttons (we will use the local coordinate system for now on)*/


    ranking_button.addChild(ranking_text);

    /*Text positionning*/

  	ranking_text.position = getCenteredPosition( ranking_button.getBounds().width, ranking_button.getBounds().height, ranking_text.getBounds().width, ranking_text.getBounds().height);



    },

    /**
     * Clic sur un niveau
     * Prépare l'interface "niveau en cours de jeu"
     * 
     * @param  {[type]} button [description]
     * @return {[type]}        [description]
     */
    btnLevelClic:function(logo)
    {
	    game.state.start("GameTitle");


       // game.add.tween(logo).to({x:500}, 400).start(); //change player.x to 500 over 400ms

        
    }



// //Three types of timers: looping, one time event, repeat.
// var looping = game.time.events.loop(delay, callback, context);
// var once = game.time.events.add(delay, callback, context);
// var repeat = game.time.events.repeat(delay, repeatCount, callback, context);
// //You can also pass one last argument with the callback arguments

// game.time.events.pause(loopingTimer);
// game.time.events.remove(once);

}

