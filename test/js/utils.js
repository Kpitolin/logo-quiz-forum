
/**
* Constants
*/

const const_offset_y_perc =10;


// game.load.text('assetList','path/to/file.json') 
// JSON.parse(game.cache.getText('assetList')); 

/**
*
* VJson objects
*
*/

var debutant = [
	{
		"logo-id":"",
		"img_src":"anrt.png",
		"answer1":"SEB",
		"answer2":"ANRT",
		"answer3":"Hardis",
		"correct-answer":"ANRT"
	},

	{
		"logo-id":"",
		"img_src":"anssi.png",
		"answer1":"ANSSI",
		"answer2":"Egis",
		"answer3":"Gemalto",
		"correct-answer":"ANSSI"
	},

	{
		"logo-id":"",
		"img_src":"arcelormittal.png",
		"answer1":"Safran",
		"answer2":"Allan Allaman",
		"answer3":"Arcelormittal",
		"correct-answer":"Arcelormittal"
	},

	{
		"logo-id":"",
		"img_src":"areva.png",
		"answer1":"ANRT",
		"answer2":"Allan Allaman",
		"answer3":"Areva",
		"correct-answer":"Areva"
	},
		{
		"logo-id":"",
		"img_src":"asymptote.PNG",
		"answer1":"Asymptote",
		"answer2":"Allan Allaman",
		"answer3":"Ausy",
		"correct-answer":"Asymptote",
	},

	{
		"logo-id":"",
		"img_src":"attijariwafabank.PNG",
		"answer1":"Attijariwafa bank",
		"answer2":"Saint Gobain",
		"answer3":"National Instruments",
		"correct-answer":"Attijariwafa bank"
	},
	{
		"logo-id":"",
		"img_src":"EDF.PNG",
		"answer1":"EM Lyon",
		"answer2":"Generaldi",
		"answer3":"EDF",
		"correct-answer":"EDF"
	},
	{
		"logo-id":"",
		"img_src":"EDHEC.PNG",
		"answer1":"Dimo Gestion",
		"answer2":"EDHEC",
		"answer3":"Socotec",
		"correct-answer":"EDHEC"
	},
	{
		"logo-id":"",
		"img_src":"egis.PNG",
		"answer1":"Egis",
		"answer2":"Ekium",
		"answer3":"Emerson",
		"correct-answer":"Egis"
	},
	{
		"logo-id":"",
		"img_src":"eicesi.PNG",
		"answer1":"ESSEC",
		"answer2":"EICESI",
		"answer3":"NGE",
		"correct-answer":"EICESI"
	}
];

// var intermediaire = [

// 	{
// 		"logo-id":"",
// 		"img_src":"abmi.PNG",
// 		"answer1":"Axon",
// 		"answer2":"Abmi"
// 		"answer3":"Ausy"
// 		"correct-answer":"Abmi"
// 	},
// 	{
// 		"logo-id":""
// 		"img_src":"advansgroup.PNG"
// 		"answer1":"Advans"
// 		"answer2":"Ekium"
// 		"answer3":"Arcelormittal"
// 		"correct-answer":"Advans"
// 	},
	
// 	{
// 		"logo-id":""
// 		"img_src":"allanallaman.PNG"
// 		"answer1":"Allan Allaman"
// 		"answer2":"Areva"
// 		"answer3":"Avanade"
// 		"correct-answer":"Allan Allaman"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"alten.PNG"
// 		"answer1":"ANSSI"
// 		"answer2":"Elis"
// 		"answer3":"Alten"
// 		"correct-answer":"Alten"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"anrt.PNG"
// 		"answer1":"SEB"
// 		"answer2":"ANRT"
// 		"answer3":"Hardis"
// 		"correct-answer":"ANRT"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"anssi.PNG"
// 		"answer1":"ANSSI"
// 		"answer2":"Egis"
// 		"answer3":"Gemalto"
// 		"correct-answer":"ANSSI"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"arcelormittal.PNG"
// 		"answer1":"Safran"
// 		"answer2":"Allan Allaman"
// 		"answer3":"Arcelormittal"
// 		"correct-answer":"Arcelormittal"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"areva.PNG"
// 		"answer1":"ANRT"
// 		"answer2":"Allan Allaman"
// 		"answer3":"Areva"
// 		"correct-answer":"Areva"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"arkema.PNG"
// 		"answer1":"Arkema"
// 		"answer2":"Reel"
// 		"answer3":"Qualiconsult"
// 		"correct-answer":"Arkema"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"assystem.PNG"
// 		"answer1":"Plastic Omnium"
// 		"answer2":"Assystem"
// 		"answer3":"Ekium"
// 		"correct-answer":"Assystem"
// 	}
// ];

// var expert = [

// 	{
// 		"logo-id":""
// 		"img_src":"abmi.PNG"
// 		"answer1":"Axon"
// 		"answer2":"Abmi"
// 		"answer3":"Ausy"
// 		"correct-answer":"Abmi"
// 	},
// 	{
// 		"logo-id":""
// 		"img_src":"advansgroup.PNG"
// 		"answer1":"Advans"
// 		"answer2":"Ekium"
// 		"answer3":"Arcelormittal"
// 		"correct-answer":"Advans"
// 	},
	
// 	{
// 		"logo-id":""
// 		"img_src":"allanallaman.PNG"
// 		"answer1":"Allan Allaman"
// 		"answer2":"Areva"
// 		"answer3":"Avanade"
// 		"correct-answer":"Allan Allaman"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"alten.PNG"
// 		"answer1":"ANSSI"
// 		"answer2":"Elis"
// 		"answer3":"Alten"
// 		"correct-answer":"Alten"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"anrt.PNG"
// 		"answer1":"SEB"
// 		"answer2":"ANRT"
// 		"answer3":"Hardis"
// 		"correct-answer":"ANRT"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"anssi.PNG"
// 		"answer1":"ANSSI"
// 		"answer2":"Egis"
// 		"answer3":"Gemalto"
// 		"correct-answer":"ANSSI"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"arcelormittal.PNG"
// 		"answer1":"Safran"
// 		"answer2":"Allan Allaman"
// 		"answer3":"Arcelormittal"
// 		"correct-answer":"Arcelormittal"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"areva.PNG"
// 		"answer1":"ANRT"
// 		"answer2":"Allan Allaman"
// 		"answer3":"Areva"
// 		"correct-answer":"Areva"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"arkema.PNG"
// 		"answer1":"Arkema"
// 		"answer2":"Reel"
// 		"answer3":"Qualiconsult"
// 		"correct-answer":"Arkema"
// 	},

// 	{
// 		"logo-id":""
// 		"img_src":"assystem.PNG"
// 		"answer1":"Plastic Omnium"
// 		"answer2":"Assystem"
// 		"answer3":"Ekium"
// 		"correct-answer":"Assystem"
// 	}
// ];

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


function getGameContent(level){

	if(level == 1)
	{
		return debutant;
	}
	else if(level == 2)
	{
		return intermediaire;
	}
	else if(level == 3)
	{
		return expert;
	}
	else{
		return debutant;
	}
}

function isNotEmpty(array){
	return array != "undefined" && array != null && array.length > 0;
}

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}
