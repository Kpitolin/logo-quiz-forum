
/**
* Constants
*/

const const_offset_y_perc = 10;



/**
*
* Variables
*
*/
var offset_y;



function getCenteredPosition(contWidth,contHeight,width,height){
	
	
	 var p =  new PIXI.Point();
	 p.set(contWidth/2 - width/2,contHeight/2 - height/2);

	 return p;

}

function getCenteredDimension(dimension1,dimension2){
	
	 return dimension1/2-dimension2/2;

}