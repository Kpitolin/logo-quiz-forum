/**
 *  Score Presentation class
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */


score = {


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

        back_button = game.add.button(0,0, 'back_button', this.back_action, this);
        back_button.position = getCenteredPosition(game.world.width,game.world.height, back_button_button.getBounds().width, back_button_button.getBounds().height);

        try_again_button = game.add.button(0,0, 'try_again_button', this.try_again_action, this);
        try_again_button.position = getCenteredPosition(game.world.width,game.world.height, try_again_button.getBounds().width, try_again_button.getBounds().height);


        /*
        We define the style of the text which we will add to the buttons
        */

        var style_textbutton = { font: "bold 12px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: back_button.getBounds().width, align: "center" };
    	back_text = game.add.text(0,0, "Retour au menu principal", style_textbutton);
        try_again_text = game.add.text(0,0, "Recommencer", style_textbutton);






    	/*We add the text to the buttons (we will use the local coordinate system for now on)*/

        back_button.addChild(back_text);
        try_again_button.addChild(try_again_text);



        /*Text positionning*/

        back_text.position = getCenteredPosition( back_button.getBounds().width, back_button.getBounds().height, back_text.getBounds().width, back_text.getBounds().height);
        try_again_text.position = getCenteredPosition( try_again_button.getBounds().width, try_again_button.getBounds().height, try_again_text.getBounds().width, try_again_text.getBounds().height);


    },

        try_again_action:function(button)
    {
        game.state.start("PlayLevelSolo");

    },

        back_action:function(button)
    {
        game.state.start("LevelSelect");

    }





}

