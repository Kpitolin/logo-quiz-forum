
/**
* Constants
*/

const const_offset_y_perc =10;
const const_offset_x_perc =5;

var isActive;


// game.load.text('assetList','path/to/file.json') 
// JSON.parse(game.cache.getText('assetList')); 

/**
*
* VJson objects
*
*/

var debutant = 
 [

	{
		"logo-id":"",
		"img_src":"abmi.PNG",
		"answer1":"Axon",
		"answer2":"Abmi",
		"answer3":"Ausy",
		"correct-answer":"Abmi"
	},
	{
		"logo-id":"",
		"img_src":"advansgroup.PNG",
		"answer1":"Advans",
		"answer2":"Ekium",
		"answer3":"Arcelormittal",
		"correct-answer":"Advans"
	},
	
	{
		"logo-id":"",
		"img_src":"alanallman.PNG",
		"answer1":"Alan Allman",
		"answer2":"Areva",
		"answer3":"Avanade",
		"correct-answer":"Alan Allman"
	},

	{
		"logo-id":"",
		"img_src":"alten.PNG",
		"answer1":"ANSSI",
		"answer2":"Elis",
		"answer3":"Alten",
		"correct-answer":"Alten"
	},

	{
		"logo-id":"",
		"img_src":"anrt.PNG",
		"answer1":"SEB",
		"answer2":"ANRT",
		"answer3":"Hardis",
		"correct-answer":"ANRT"
	},

	{
		"logo-id":"",
		"img_src":"anssi.PNG",
		"answer1":"ANSSI",
		"answer2":"Egis",
		"answer3":"Gemalto",
		"correct-answer":"ANSSI"
	},

	{
		"logo-id":"",
		"img_src":"arcelormittal.PNG",
		"answer1":"Safran",
		"answer2":"Alan Allman",
		"answer3":"Arcelormittal",
		"correct-answer":"Arcelormittal"
	},

	{
		"logo-id":"",
		"img_src":"areva.PNG",
		"answer1":"ANRT",
		"answer2":"Alan Allman",
		"answer3":"Areva",
		"correct-answer":"Areva"
	},

	{
		"logo-id":"",
		"img_src":"arkema.PNG",
		"answer1":"Arkema",
		"answer2":"Reel",
		"answer3":"Qualiconsult",
		"correct-answer":"Arkema"
	},

	{
		"logo-id":"",
		"img_src":"assystem.PNG",
		"answer1":"Plastic Omnium",
		"answer2":"Assystem",
		"answer3":"Ekium",
		"correct-answer":"Assystem"
	},

	{
		"logo-id":"",
		"img_src":"asymptote.PNG",
		"answer1":"Asymptote",
		"answer2":"Allan Allaman",
		"answer3":"Ausy",
		"correct-answer":"Asymptote"
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
		"img_src":"ausy.PNG",
		"answer1":"Ausy",
		"answer2":"Axon",
		"answer3":"Sii",
		"correct-answer":"Ausy"
	},

	{
		"logo-id":"",
		"img_src":"avanade.PNG",
		"answer1":"ANRT",
		"answer2":"Alan Allman",
		"answer3":"Avanade",
		"correct-answer":"Avanade"
	},

	{
		"logo-id":"",
		"img_src":"axon.PNG",
		"answer1":"Vulcain Ingénierie",
		"answer2":"Crédit Agricole Du Maroc",
		"answer3":"Axon",
		"correct-answer":"Axon"
	},
	{
		"logo-id":"",
		"img_src":"beijaflore.PNG",
		"answer1":"EDHEC",
		"answer2":"Beijaflore",
		"answer3":"Solvay",
		"correct-answer":"Beijaflore"
	},
	{
		"logo-id":"",
		"img_src":"blueinfinty.PNG",
		"answer1":"Blue Infinity",
		"answer2":"Chec",
		"answer3":"GFI Informatique",
		"correct-answer":"Blue Infinity"
	},
	{
		"logo-id":"",
		"img_src":"bobst.PNG",
		"answer1":"Groupe Atlantic",
		"answer2":"Bobst",
		"answer3":"Euro Information",
		"correct-answer":"Bobst"
	},
	{
		"logo-id":"",
		"img_src":"broccard.PNG",
		"answer1":"Capgemini",
		"answer2":"Dimogestion",
		"answer3":"Brocard",
		"correct-answer":"Broccard"
	},
	{
		"logo-id":"",
		"img_src":"bottomline.PNG",
		"answer1":"Bottom Line",
		"answer2":"Bureau Alpes Controles",
		"answer3":"Link",
		"correct-answer":"Bottom Line"
	},
	{
		"logo-id":"",
		"img_src":"bouyguescontruction.PNG",
		"answer1":"Fiducial",
		"answer2":"Ikos",
		"answer3":"Bouygues Contruction",
		"correct-answer":"Bouygues Construction"
	},

	{
		"logo-id":"",
		"img_src":"bureaualpescontroles.PNG",
		"answer1":"Bureau Alpes Controles",
		"answer2":"ABMI",
		"answer3":"Advans",
		"correct-answer":"Bureau Alpes Controles"
	},

	{
		"logo-id":"",
		"img_src":"bureauveritas.PNG",
		"answer1":"Emerson",
		"answer2":"Royal Air Maroc",
		"answer3":"Bureau Veritas",
		"correct-answer":"Bureau Veritas"
	},
	{
		"logo-id":"",
		"img_src":"capgemini.PNG",
		"answer1":"EDF",
		"answer2":"Murex",
		"answer3":"Capgemini",
		"correct-answer":"Capgemini"
	},
	{
		"logo-id":"",
		"img_src":"chec.PNG",
		"answer1":"Renault Truck",
		"answer2":"Chec",
		"answer3":"Elis",
		"correct-answer":"Chec"
	},
	{
		"logo-id":"",
		"img_src":"CreditAgricolDuMaroc.PNG",
		"answer1":"Vulcain Ingénierie",
		"answer2":"Crédit Agricole Du Maroc",
		"answer3":"Setec",
		"correct-answer":"Crédit Agricole Du Maroc"
	},
	{
		"logo-id":"",
		"img_src":"dimogestion.PNG",
		"answer1":"Solutec",
		"answer2":"Dimo Gestion",
		"answer3":"ANSSI",
		"correct-answer":"Dimo Gestion"
	},
	{
		"logo-id":"",
		"img_src":"EDF.PNG",
		"answer1":"EM Lyon",
		"answer2":"Generali",
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
	},
	{
		"logo-id":"",
		"img_src":"eiffage.PNG",
		"answer1":"Eiffage",
		"answer2":"Schneider Electric",
		"answer3":"Setec",
		"correct-answer":"Eiffage"
	},
	{
		"logo-id":"",
		"img_src":"ekium.PNG",
		"answer1":"Groupe Atlantic",
		"answer2":"Crédit Agricole Du Maroc",
		"answer3":"Ekium",
		"correct-answer":"Ekium"
	},
	{
		"logo-id":"",
		"img_src":"elsi.PNG",
		"answer1":"Segula Technologies",
		"answer2":"Michelin",
		"answer3":"Elis",
		"correct-answer":"Elis"
	},
	{
		"logo-id":"",
		"img_src":"em lyon.PNG",
		"answer1":"EM Lyon",
		"answer2":"Hardis",
		"answer3":"Sii",
		"correct-answer":"EM Lyon"
	},

	{
		"logo-id":"",
		"img_src":"emerson.PNG",
		"answer1":"Novo Nordisk",
		"answer2":"Emerson",
		"answer3":"ESCP Europe",
		"correct-answer":"Emerson"
	},

	{
		"logo-id":"",
		"img_src":"ENSAM.PNG",
		"answer1":"Assystem",
		"answer2":"Sonovision Group",
		"answer3":"ENSAM",
		"correct-answer":"ENSAM"
	},

	{
		"logo-id":"",
		"img_src":"espceurope.PNG",
		"answer1":"ESPC Europe",
		"answer2":"Telindus",
		"answer3":"Swissquote",
		"correct-answer":"ESPC Europe"
	},

	{
		"logo-id":"",
		"img_src":"essec.PNG",
		"answer1":"Technord",
		"answer2":"ESSEC",
		"answer3":"Groupe 3F",
		"correct-answer":"ESSEC"
	},

	{
		"logo-id":"",
		"img_src":"EuroInformation.png",
		"answer1":"IE Business School",
		"answer2":"Ensam",
		"answer3":"Euro Information",
		"correct-answer":"Euro Information"
	},

	{
		"logo-id":"",
		"img_src":"Fiducial.PNG",
		"answer1":"Ausy",
		"answer2":"Solutec",
		"answer3":"Fiducial",
		"correct-answer":"Fiducial"
	},


	{
		"logo-id":"",
		"img_src":"Gemalto.PNG",
		"answer1":"Gemalto",
		"answer2":"Orange",
		"answer3":"Grenoble EM",
		"correct-answer":"Gemalto"
	},

	{
		"logo-id":"",
		"img_src":"GeneralElectric.PNG",
		"answer1":"EDF",
		"answer2":"General Electric",
		"answer3":"Sopra Steria",
		"correct-answer":"General Electric"
	},

	{
		"logo-id":"",
		"img_src":"Generali.PNG",
		"answer1":"Setec",
		"answer2":"Total",
		"answer3":"Generali",
		"correct-answer":"Generali"
	},

	{
		"logo-id":"",
		"img_src":"GFIInformatique.PNG",
		"answer1":"GFI Informatique",
		"answer2":"SPC Consultants",
		"answer3":"Tata Consultancy Services",
		"correct-answer":"GFI Informatique"
	},

	{
		"logo-id":"",
		"img_src":"GrenobleEM.PNG",
		"answer1":"Generali",
		"answer2":"Gemalto",
		"answer3":"Grenoble EM",
		"correct-answer":"Grenoble EM"
	},

	{
		"logo-id":"",
		"img_src":"Groupe3F.PNG",
		"answer1":"Ikos",
		"answer2":"Groupe 3F",
		"answer3":"It Link",
		"correct-answer":"Groupe 3F"
	},

	{
		"logo-id":"",
		"img_src":"GroupeAtlantic.PNG",
		"answer1":"Broccard",
		"answer2":"Atlantic",
		"answer3":"Blue Infinity",
		"correct-answer":"Atlantic"
	},

	{
		"logo-id":"",
		"img_src":"GroupeNGE.PNG",
		"answer1":"NGE",
		"answer2":"National Instrument",
		"answer3":"Vinci",
		"correct-answer":"NGE"
	},

	{
		"logo-id":"",
		"img_src":"GroupeRoyalAirMaroc.PNG",
		"answer1":"Asymptote",
		"answer2":"Royal Air Maroc",
		"answer3":"Attijariwafa Bank",
		"correct-answer":"Aussy"
	},

	{
		"logo-id":"",
		"img_src":"GroupeSeb.PNG",
		"answer1":"Seb",
		"answer2":"Solucom",
		"answer3":"Sopra Steria",
		"correct-answer":"Seb"
	},

	{
		"logo-id":"",
		"img_src":"RenaultTrucks.PNG",
		"answer1":"Safran",
		"answer2":"Renault Trucks",
		"answer3":"Veolia",
		"correct-answer":"Renault Trucks"
	},

	{
		"logo-id":"",
		"img_src":"Hardis.PNG",
		"answer1":"Telindus",
		"answer2":"Ubifrance",
		"answer3":"Hardis",
		"correct-answer":"Hardis"
	},

	{
		"logo-id":"",
		"img_src":"IEBusinessSchool.PNG",
		"answer1":"IE Business School",
		"answer2":"Mi-GSO",
		"answer3":"ITLink",
		"correct-answer":"IE Business School"
	},

	{
		"logo-id":"",
		"img_src":"IkosRA.PNG",
		"answer1":"IE Business School",
		"answer2":"It Link",
		"answer3":"Ikos RA",
		"correct-answer":"Ikos RA"
	},

	{
		"logo-id":"",
		"img_src":"ITLink.PNG",
		"answer1":"Chec",
		"answer2":"Viveris",
		"answer3":"IT Link",
		"correct-answer":"IT Link"
	},

	{
		"logo-id":"",
		"img_src":"Michelin.PNG",
		"answer1":"Michelin",
		"answer2":"Egis",
		"answer3":"Beijaflore",
		"correct-answer":"Michelin"
	},
      
	{
		"logo-id":"",
		"img_src":"Mi-Gso.PNG",
		"answer1":"Michelin",
		"answer2":"Alten",
		"answer3":"Mi-GSO",
		"correct-answer":"Mi-GSO"
	},

	{
		"logo-id":"",
		"img_src":"Murex.PNG",
		"answer1":"Murex",
		"answer2":"Bouygues Construction",
		"answer3":"Ubifrance",
		"correct-answer":"Murex"
	},

	{
		"logo-id":"",
		"img_src":"NationalInstruments.PNG",
		"answer1":"Novo Nordisk",
		"answer2":"National Instruments",
		"answer3":"EM Lyon",
		"correct-answer":"National Instruments"
	},

	{
		"logo-id":"",
		"img_src":"NovoNordisk.PNG",
		"answer1":"Reel",
		"answer2":"Fiducial",
		"answer3":"Novo Nordisk",
		"correct-answer":"Novo Nordisk"
	},

	{
		"logo-id":"",
		"img_src":"PlasticOmnium.PNG",
		"answer1":"Plastic Omnium",
		"answer2":"Qualiconsult",
		"answer3":"Bobst",
		"correct-answer":"Plastic Omnium"
	},

	{
		"logo-id":"",
		"img_src":"Qualiconsult.PNG",
		"answer1":"General Electric",
		"answer2":"Qualiconsult",
		"answer3":"Socotec",
		"correct-answer":"Qualiconsult"
	},
	
	{
		"logo-id":"",
		"img_src":"Reel.PNG",
		"answer1":"Viveris",
		"answer2":"Renault Trucks",
		"answer3":"Reel",
		"correct-answer":"Reel"
	},

	{
		"logo-id":"",
		"img_src":"Safran.PNG",
		"answer1":"Safran",
		"answer2":"Solvay",
		"answer3":"Segula Technologies",
		"correct-answer":"Safran"
	},

	{
		"logo-id":"",
		"img_src":"SaintGobain.PNG",
		"answer1":"EICESI",
		"answer2":"Eiffage",
		"answer3":"Saint Gobain",
		"correct-answer":"Saint Gobain"
	},

	{
		"logo-id":"",
		"img_src":"SchneiderElectric.PNG",
		"answer1":"Setec",
		"answer2":"Schneider Electric",
		"answer3":"Solucom",
		"correct-answer":"Schneider Electric"
	},

	{
		"logo-id":"",
		"img_src":"SegulaTechnologies.PNG",
		"answer1":"Segula Technologies",
		"answer2":"Hardis",
		"answer3":"Bureau Alpes Controles",
		"correct-answer":"Segula Technologies"
	},

	{
		"logo-id":"",
		"img_src":"Setec.PNG",
		"answer1":"Solutec",
		"answer2":"Setec",
		"answer3":"Schneider Electric",
		"correct-answer":"Setec"
	},

	{
		"logo-id":"",
		"img_src":"Sii.PNG",
		"answer1":"Sii",
		"answer2":"Sopra Steria",
		"answer3":"Swissquote",
		"correct-answer":"Sii"
	},

	{
		"logo-id":"",
		"img_src":"Socotec.PNG",
		"answer1":"Solutec",
		"answer2":"Socotec",
		"answer3":"Solvay",
		"correct-answer":"Socotec"
	},

	{
		"logo-id":"",
		"img_src":"Solucom.PNG",
		"answer1":"Solucom",
		"answer2":"Solutec",
		"answer3":"Seb",
		"correct-answer":"Solucom"
	},

	{
		"logo-id":"",
		"img_src":"Solutec.PNG",
		"answer1":"SPC Consultants",
		"answer2":"ESPC Europe",
		"answer3":"Solutec",
		"correct-answer":"Solutec"
	},

	{
		"logo-id":"",
		"img_src":"Solvay.PNG",
		"answer1":"Setec",
		"answer2":"Saint Gobain",
		"answer3":"Solvay",
		"correct-answer":"Solvay"
	},

	{
		"logo-id":"",
		"img_src":"SonovisionGroup.PNG",
		"answer1":"Sonovision Group",
		"answer2":"Technord",
		"answer3":"Total",
		"correct-answer":"Sonovision Group"
	},

	{
		"logo-id":"",
		"img_src":"SopraSteria.PNG",
		"answer1":"Bottom line",
		"answer2":"Sopra Steria",
		"answer3":"Bureau Verit",
		"correct-answer":"Sopra Steria"
	},

	{
		"logo-id":"",
		"img_src":"SPCConsultants.PNG",
		"answer1":"SPC Consultants",
		"answer2":"Axon",
		"answer3":"EDF",
		"correct-answer":"SPC Consultants"
	},

	{
		"logo-id":"",
		"img_src":"Swissquote.PNG",
		"answer1":"Swissquote",
		"answer2":"Dimogestion",
		"answer3":"Mi-GSO",
		"correct-answer":"Swissquote"
	},

	{
		"logo-id":"",
		"img_src":"TataConsultancyServices.PNG",
		"answer1":"ESSEC",
		"answer2":"Murex",
		"answer3":"Tata Consultancy",
		"correct-answer":"Tata Consultancy"
	},

	{
		"logo-id":"",
		"img_src":"Technord.PNG",
		"answer1":"Bobst",
		"answer2":"Technord",
		"answer3":"NGE",
		"correct-answer":"Technord"
	},
	{
		"logo-id":"",
		"img_src":"Telindus.PNG",
		"answer1":"Avanade",
		"answer2":"Telindus",
		"answer3":"Elis",
		"correct-answer":"Telindus"
	},
	{
		"logo-id":"",
		"img_src":"Total.PNG",
		"answer1":"Total",
		"answer2":"Solucom",
		"answer3":"Telindus",
		"correct-answer":"Total"
	},

	{
		"logo-id":"",
		"img_src":"Ubifrance.PNG",
		"answer1":"EDHEC",
		"answer2":"Egis",
		"answer3":"Ubifrance",
		"correct-answer":"Ubifrance"
	},

	{
		"logo-id":"",
		"img_src":"Veolia.PNG",
		"answer1":"Veolia",
		"answer2":"Gemalto",
		"answer3":"Arcelormittal",
		"correct-answer":"Veolia"
	},

	{
		"logo-id":"",
		"img_src":"Vinci.PNG",
		"answer1":"Eiffage",
		"answer2":"Vinci",
		"answer3":"Bouygues Construction",
		"correct-answer":"Vinci"
	},

	{
		"logo-id":"",
		"img_src":"Viveris.PNG",
		"answer1":"Viveris",
		"answer2":"Telindus",
		"answer3":"Technord",
		"correct-answer":"Viveris"
	},
	{
		"logo-id":"",
		"img_src":"VulcainIngénierie.PNG",
		"answer1":"Veolia",
		"answer2":"Vinci",
		"answer3":"Vulcain Ingénierie",
		"correct-answer":"Vulcain Ingénierie"
	},
	{
		"logo-id":"",
		"img_src":"accenture.PNG",
		"answer1":"Accenture",
		"answer2":"Solucom",
		"answer3":"Cap Gemini",
		"correct-answer":"Accenture"
	},
	{
		"logo-id":"",
		"img_src":"amaris.PNG",
		"answer1":"Bobst",
		"answer2":"Amaris",
		"answer3":"Vinci",
		"correct-answer":"Amaris"
	},
	{
		"logo-id":"",
		"img_src":"apave.PNG",
		"answer1":"Apave",
		"answer2":"Colas",
		"answer3":"Telindus",
		"correct-answer":"Apave"
	},
	{
		"logo-id":"",
		"img_src":"atos.PNG",
		"answer1":"Axa Assurance Maroc",
		"answer2":"Atos",
		"answer3":"Casino",
		"correct-answer":"Atos"
	},
	{
		"logo-id":"",
		"img_src":"axaassurancemaroc.PNG",
		"answer1":"Axa Assurance Maroc",
		"answer2":"Viveris",
		"answer3":"Apave",
		"correct-answer":"Axa Assurance Maroc"
	},
	{
		"logo-id":"",
		"img_src":"casino.PNG",
		"answer1":"Atos",
		"answer2":"Casino",
		"answer3":"Colas",
		"correct-answer":"Casino"
	},
	{
		"logo-id":"",
		"img_src":"clubfrancemaroc.PNG",
		"answer1":"GCC",
		"answer2":"EY",
		"answer3":"Club France Maroc",
		"correct-answer":"Club France Maroc"
	},
	{
		"logo-id":"",
		"img_src":"dcns.PNG",
		"answer1":"DCNS",
		"answer2":"Decathlon",
		"answer3":"Viveris",
		"correct-answer":"DCNS"
	},
	{
		"logo-id":"",
		"img_src":"decathlon.PNG",
		"answer1":"EY",
		"answer2":"Decathlon",
		"answer3":"Mars",
		"correct-answer":"Decathlon"
	},
	{
		"logo-id":"",
		"img_src":"ey.PNG",
		"answer1":"EY",
		"answer2":"IAE Lyon",
		"answer3":"GDF SUEZ",
		"correct-answer":"EY"
	},
	{
		"logo-id":"",
		"img_src":"fmc.PNG",
		"answer1":"FMC",
		"answer2":"Neo Soft",
		"answer3":"Club France Maroc",
		"correct-answer":"FMC"
	},
	{
		"logo-id":"",
		"img_src":"gdfsuez.PNG",
		"answer1":"GSE GROUP",
		"answer2":"GDF Suez",
		"answer3":"IAE Lyon",
		"correct-answer":"GDF Suez"
	},
	{
		"logo-id":"",
		"img_src":"gsegroup.PNG",
		"answer1":"GSE GROUP",
		"answer2":"Schlumberger",
		"answer3":"CGI",
		"correct-answer":"GSE GROUP"
	},
	{
		"logo-id":"",
		"img_src":"hec.PNG",
		"answer1":"Decathlon",
		"answer2":"Schlumberger",
		"answer3":"HEC",
		"correct-answer":"HEC"
	},
	{
		"logo-id":"",
		"img_src":"iae_lyon.PNG",
		"answer1":"IAE Lyon",
		"answer2":"SMAC",
		"answer3":"INSA",
		"correct-answer":"IAE Lyon"
	},
	{
		"logo-id":"",
		"img_src":"infologic.PNG",
		"answer1":"GSE Group",
		"answer2":"Intitek",
		"answer3":"Infologic",
		"correct-answer":"Infologic"
	},
	{
		"logo-id":"",
		"img_src":"icrc.PNG",
		"answer1":"ICRC",
		"answer2":"Lombard Odier",
		"answer3":"Leon Grosse",
		"correct-answer":"ICRC"
	},
	{
		"logo-id":"",
		"img_src":"ifp.PNG",
		"answer1":"IFP",
		"answer2":"HEC",
		"answer3":"INSA",
		"correct-answer":"IFP"
	},
	{
		"logo-id":"",
		"img_src":"insa.PNG",
		"answer1":"INSA",
		"answer2":"Infologic",
		"answer3":"MBDA",
		"correct-answer":"INSA"
	},
	{
		"logo-id":"",
		"img_src":"intitek.PNG",
		"answer1":"Amaris",
		"answer2":"Intitek",
		"answer3":"ICRC",
		"correct-answer":"Intitek"
	},
	{
		"logo-id":"",
		"img_src":"loreal.PNG",
		"answer1":"Orange",
		"answer2":"L'Oreal",
		"answer3":"Leon Grosse",
		"correct-answer":"L'Oreal"
	},
	{
		"logo-id":"",
		"img_src":"mars.PNG",
		"answer1":"Lombard Odier",
		"answer2":"Mars",
		"answer3":"MBDA",
		"correct-answer":"Mars"
	},
	{
		"logo-id":"",
		"img_src":"mbda.PNG",
		"answer1":"GDF Suez",
		"answer2":"DCNS",
		"answer3":"MBDA",
		"correct-answer":"MBDA"
	},
	{
		"logo-id":"",
		"img_src":"neosoft.PNG",
		"answer1":"NTN SNR",
		"answer2":"Neo Soft",
		"answer3":"Sword",
		"correct-answer":"Neo Soft"
	},
	{
		"logo-id":"",
		"img_src":"ntnsnr.PNG",
		"answer1":"Suez Environnement",
		"answer2":"NTN SNR",
		"answer3":"Orange",
		"correct-answer":"NTN SNR"
	},
	{
		"logo-id":"",
		"img_src":"orange.PNG",
		"answer1":"RTE",
		"answer2":"Orange",
		"answer3":"GSE Group",
		"correct-answer":"Orange"
	},
	{
		"logo-id":"",
		"img_src":"prysmian.PNG",
		"answer1":"IFP",
		"answer2":"Prysmian",
		"answer3":"GPE GROUP",
		"correct-answer":"Prysmian"
	},
	{
		"logo-id":"",
		"img_src":"rte.PNG",
		"answer1":"RTE",
		"answer2":"Thales",
		"answer3":"NTN SNR",
		"correct-answer":"RTE"
	},
	{
		"logo-id":"",
		"img_src":"schlumberger.PNG",
		"answer1":"Smac",
		"answer2":"Schlumberger",
		"answer3":"Sword",
		"correct-answer":"Schlumberger"
	},
	{
		"logo-id":"",
		"img_src":"smac.PNG",
		"answer1":"Smac",
		"answer2":"SNCF",
		"answer3":"Sword",
		"correct-answer":"Smac"
	},
	{
		"logo-id":"",
		"img_src":"sncf.PNG",
		"answer1":"Suez Environnement",
		"answer2":"SNCF",
		"answer3":"COLAS",
		"correct-answer":"SNCF"
	},
	{
		"logo-id":"",
		"img_src":"suezenvironnement.PNG",
		"answer1":"Suez Environnement",
		"answer2":"Sword",
		"answer3":"Thales",
		"correct-answer":"Suez Environnement"
	},
	{
		"logo-id":"",
		"img_src":"sword.PNG",
		"answer1":"SNCF",
		"answer2":"Sword",
		"answer3":"CEA",
		"correct-answer":"Sword"
	},
	{
		"logo-id":"",
		"img_src":"thales.PNG",
		"answer1":"Valeo",
		"answer2":"Thales",
		"answer3":"AKKA",
		"correct-answer":"Thales"
	},
	{
		"logo-id":"",
		"img_src":"valeo.PNG",
		"answer1":"Valeo",
		"answer2":"Murex",
		"answer3":"Orange",
		"correct-answer":"Valeo"
	},
	{
		"logo-id":"",
		"img_src":"colas.PNG",
		"answer1":"Amadeus",
		"answer2":"Colas",
		"answer3":"Solucom",
		"correct-answer":"Colas"
	},
	{
		"logo-id":"",
		"img_src":"gcc.PNG",
		"answer1":"CEA",
		"answer2":"GCC",
		"answer3":"Solutec",
		"correct-answer":"GCC"
	},
	{
		"logo-id":"",
		"img_src":"cea.PNG",
		"answer1":"CEA",
		"answer2":"Orange",
		"answer3":"Amadeus",
		"correct-answer":"CEA"
	},
	{
		"logo-id":"",
		"img_src":"akka.PNG",
		"answer1":"Amaris",
		"answer2":"Akka",
		"answer3":"Amadeus",
		"correct-answer":"Akka"
	},
	{
		"logo-id":"",
		"img_src":"Amadeus.PNG",
		"answer1":"Amaris",
		"answer2":"Orange",
		"answer3":"Amadeus",
		"correct-answer":"Amadeus"
	},
	{
		"logo-id":"",
		"img_src":"cgi.PNG",
		"answer1":"CGI",
		"answer2":"CEA",
		"answer3":"GCC",
		"correct-answer":"CGI"
	},
	{
		"logo-id":"",
		"img_src":"altran.PNG",
		"answer1":"CGI",
		"answer2":"Altran",
		"answer3":"Akka",
		"correct-answer":"Altran"
	},	
	{
		"logo-id":"",
		"img_src":"leongrosse.PNG",
		"answer1":"Orange",
		"answer2":"L'Oreal",
		"answer3":"Leon Grosse",
		"correct-answer":"Leon Grosse"
	},
	{
		"logo-id":"",
		"img_src":"volvo.PNG",
		"answer1":"Vinci",
		"answer2":"Valeo",
		"answer3":"Volvo",
		"correct-answer":"Volvo"
	},
	{
		"logo-id":"",
		"img_src":"iae_aix.PNG",
		"answer1":"IFP School",
		"answer2":"IAE Lyon",
		"answer3":"IAE AIX",
		"correct-answer":"IAE AIX"
	},

		{
		"logo-id":"",
		"img_src":"lilly.PNG",
		"answer1":"Lilly",
		"answer2":"Lexsi",
		"answer3":"IFP",
		"correct-answer":"Lilly"
	},
	{
		"logo-id":"",
		"img_src":"lexsi.PNG",
		"answer1":"Lilly",
		"answer2":"Lexsi",
		"answer3":"HEC",
		"correct-answer":"Lexsi"
	}

	];



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
		// return JSON.parse(game.cache.getText('assetList'));
		//var Deb = game.load.json('assetList','assets/complete.json',false);

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


// setInterval(function () {
//   alert(window.isActive ? 'active' : 'La page se recharge après une inactivité longue.');
//   $('#hello').append(isActive + '<br/>');
// }, 6000);





