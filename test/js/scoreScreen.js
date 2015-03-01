/**
 *  Score Presentation class
 * 
 * @param  {[type]} game [description]
 * @return {[type]}      [description]
 */

var offset_x;

scoreScreen  = {


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

    },

    preload: function() {

    //We load the images and other objects from the assets

    game.load.image('logo', 'assets/fra_logo.png',100,32);
    game.load.image('button', 'assets/blue-button-hi.png',100,32);


    	
    },

    create: function () 
    {

        offset_y = const_offset_y_perc*game.world.height/100;
        offset_x = const_offset_x_perc*game.world.width/100;



       logo_image = game.add.image(0,0,'logo');
       logo_image.position = getCenteredPosition(game.world.width,game.world.height, logo_image.getBounds().width, logo_image.getBounds().height);
       logo_image.position.y -= 3.5*offset_y;
    	

     	/*
        Button Creation and placement
        */

        back_button = game.add.button(0,0, 'button', this.back_action, this);
        back_button.position = getCenteredPosition(game.world.width,game.world.height, back_button.getBounds().width, back_button.getBounds().height);
        back_button.position.x -= back_button.getBounds().width/2 + offset_x;

        try_again_button = game.add.button(0,0, 'button', this.try_again_action, this);
        try_again_button.position = getCenteredPosition(game.world.width,game.world.height, try_again_button.getBounds().width, try_again_button.getBounds().height);
        try_again_button.position.x += back_button.getBounds().width/2 + offset_x;


        /*
        We define the style of the text which we will add to the buttons
        */

        var style_textbutton = { font: "bold 12px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: back_button.getBounds().width, align: "center" };
    	back_text = game.add.text(0,0, "Retour au menu", style_textbutton);
        try_again_text = game.add.text(0,0, "Recommencer", style_textbutton);


        // Score text

        this.best_score_action();









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
        game.state.start("GameTitle");

    },

    best_score_action:function(){

        if (game.global.score > game.global.best_score) {

        // Best Score text


        score_text = game.add.text(0,0, this.catch_up_phase()+ game.global.score+" points", { font: "bold 15px Arial", fill: "black", align: "center" });
        score_text.position = getCenteredPosition(game.world.width,game.world.height, score_text.getBounds().width, score_text.getBounds().height);
        score_text.position.y = logo_image.position.y + logo_image.getBounds().height +0.5 * offset_y;


        best_score_text = game.add.text(0,0,  "Votre ancien maximum : "+ game.global.best_score+" points", { font: "bold 15px Arial", fill: "black", align: "center" });
        best_score_text.position = getCenteredPosition(game.world.width,game.world.height, best_score_text.getBounds().width, best_score_text.getBounds().height);
        best_score_text.position.y =  score_text.position.y +  score_text.getBounds().height + 0.5 * offset_y;

        // Change the best score
        game.global.best_score = game.global.score ;


        // Call the server to update ranking

        } 
        else
        {

        // Classic Score text

        score_text = game.add.text(0,0, "Score final : " + game.global.score, { font: "bold 15px Arial", fill: "black", align: "center" });
        score_text.position = getCenteredPosition(game.world.width,game.world.height, score_text.getBounds().width, score_text.getBounds().height);
        score_text.position.y = logo_image.position.y + logo_image.getBounds().height + offset_y;


        }


        // Send info to server

        get_ranking(game.global.mail, game.global.score,urlOfServer); // synchronize best score with server

        // Reset the score and progress
        game.global.score = 0;

        game.global.currentProgress = 0;


    },

    catch_up_phase:function(){

        var catch_up_array = ["Vous vous êtes dépassé : ","Vous êtes prêt pour le salon : ","La NASA a appelé,\nElle recherche ses fusées : "];



        return catch_up_array[game.rnd.integerInRange(0, catch_up_array.length-1)];
    }







}

