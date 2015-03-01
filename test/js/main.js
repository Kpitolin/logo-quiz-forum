


/**
 * Les variables du jeu
 * 
 */

var game; 

var gWidth = screen.width;
var gHeight = screen.height;


document.addEventListener("DOMContentLoaded", Main, false); // appel au chargement de la page







/**
* Main function (loaded at the beginning)
*/
function Main()
{

    game = new Phaser.Game(gWidth, gHeight, Phaser.CANVAS, '', { preload: preload, create: create, update: update });


    /**
    *
    * Global variables
    *
    */

    game.global = {
    mail: '',
    rank:0,
    score: 0,
    best_score: 0,
    currentLevel:0,
    currentLogo:0,
    displayedLogos: [],
    currentProgress:0,
    answer_delay:0
    };


        // adding all the game screens
    game.state.add("GameTitle", gameTitle);
    game.state.add("LevelSelect", levelSelect);
    game.state.add("PlayLevelSolo", playLevelSolo);    
    game.state.add("ScoreScreen", scoreScreen);
    game.state.add("Ranking", ranking);

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

