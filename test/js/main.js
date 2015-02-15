


/**
 * Les variables du jeu
 * 
 */

var game; 

var gWidth = 800;
var gHeight = 600;


document.addEventListener("DOMContentLoaded", Main, false); // appel au chargement de la page







/**
* Main function (loaded at the beginning)
*/
function Main()
{

    game = new Phaser.Game(gWidth, gHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });


    /**
    *
    * Global variables
    *
    */

    // game.global{
    // score: 0,
    // bestScore: 100
    // }


        // adding all the game screens
    game.state.add("GameTitle", gameTitle);
    game.state.add("LevelSelect", levelSelect);
    game.state.add("PlayLevelSolo", playLevelSolo);    
    // game.state.add("PlayMulti", multi);
    // game.state.add("Stats", stats);
    // game.state.add("Options", options);




    // Start the first screen (chargement en cours)
    game.state.start("GameTitle");
}

/**
 * Préchargement des éléments du jeu
 * 
 * @return {[type]} [description]
 */
function preload()
{ 
}



/**
 * Création de la scène du jeu,
 * mise en place des graphismes...
 * 
 * @return {[type]} [description]
 */
function create() 
{
}


/**
 * Appelée en continu pendant le jeu
 * 
 * @return {[type]} [description]
 */
function update() 
{
}

