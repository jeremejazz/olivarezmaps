
function plotMarkers( ){
/*
name,
coords[],
description
image

		{
			name: "Chowking Area",
			coords: [73.42842, -63.28125],
			description: "lorem ipsum dolor sit amet",
			image: '#',
			icon: 'cutlery',
			link: '#'

		} 

*/

	var markers = 
	[
		{
			name: "Indoor Swimming Pool",
			coords: [73.87372, -100.89844],
			description: "Indoor swimming pool/<br/>P.E department/Dance Room/Gym",
			image: "images/s.png",
			icon: 'info',
			link: '../pe_bldg/pe_bldg.html'

		},{
			name: "Coliseum ",
			coords: [73.87372, -50.27344],
			description: " ",
			image: "images/coliseum.png",
			icon: 'info',
			link: null

		},{
			name: "Aurelio De Leon <br/>Hall",
			coords: [39.77477, -29.00391],
			description: " ",
			image: "images/hrm.png",
			icon: 'info',
			link: '../aurelio_bldg/1f/aurelio_bldg.html'

		}, {
			name: "Dra. Rosario De Leon Olivarez Hall",
			coords: [77.69287, -5.44922],
			description: "Basic Education Building ",
			image: "images/bed.png",
			icon: 'info',
			link: '../rosario_de_leon_bldg/1f/rosario_de_leon_bldg.html'

		}, {
			name: "Encarnacion R. Olivarez Hall",
			coords: [-26.43123, 3.16406],
			description: " ",
			image: "images/7.png",
			icon: 'info',
			link: '../encarnacion_bldg/1f/encarnacion_bldg.html'

		}, {
			name: "GYMNASIUM",
			coords: [-15.623036831528264, -23.5546875],
			description: " ",
			image: "images/gym.png",
			icon: 'circle',
			link: null

		}, {
			name: "Bowling Center",
			coords: [75.342281944273, 152.75390624999997],
			description: "Bowling and Billiards ",
			image: null,
			icon: 'circle',
			link: null

		}, {
			name: "Badminton Court",
			coords: [55.727110085045986, -42.626953125],
			description: "",
			image: 'images/bad.png',
			icon: 'circle',
			link: null

		},{
			name: "O.C Resort",
			coords: [44.213709909702054, -128.49609375],
			description: "",
			image: 'images/resort.png',
			icon: 'circle',
			link: null

		},{
			name: "Tennis Court",
			coords: [39.90973623453719, 148.359375],
			description: "",
			image: 'images/tennis.png',
			icon: 'circle',
			link: null

		},{
			name: "Olivarez General Hospital",
			coords: [-19.973348786110602, 102.65625],
			description: "",
			image: null,
			icon: 'h-square',
			link: null

		},{
			name: "Olivarez General Hospital",
			coords: [-59.08573856981949, 103.71093749999999],
			description: "",
			image: null,
			icon: 'h-square',
			link: null

		},{
			name: "Sport Center",
			coords: [-33.13755119234615, 149.765625],
			description: "Tennis Court",
			image: 'images/sport.png',
			icon: 'circle',
			link: null

		},
		{
			name: "Primo Olivarez Hall",
			coords: [-82.21421714106773, 142.20703125],
			description: "",
			image: 'images/crim.png',
			icon: 'info',
			link: '../primo_olivarez/2f/primo_olivarez.html'

		},{
			name: "O.C Entrance",
			coords: [-70.72897946208788, 168.046875],
			description: "",
			image: 'images/en.png',
			icon: 'circle',
			link: null

		},{
			name: "O.C Stage",
			coords: [54.546579538405034, 42.802734375],
			description: "",
			image: 'images/stage.png',
			icon: 'circle',
			link: null

		},{
			name: "Botanical Garden",
			coords: [77.19617635994676, 27.94921875],
			description: "Play Ground",
			image: null,
			icon: 'circle',
			link: null

		},{
			name: "Outdoor Tennis Court",
			coords: [79.6240562918881, 103.0078125],
			description: "",
			image: null,
			icon: 'circle',
			link: null

		}, {
			name: "Saturnina de Leon Hall",
			coords: [47.87214396888731, -87.01171875],
			description: "-Dean’s  of CASE & CBALTCH Office <br/>-College of Computer Studies<br/>-Information Resource Center<br/>-Center for research & publication strategic planning, & development office ",
			image: null,
			icon: 'info',
			link:'../saturnina_bldg/1f/saturnina.html'

		}, {
			name: "Dr. Pablo L. Olivarez Hall",
			coords: [64.88626540914477, 43.06640625],
			description: "Main building ",
			image: 'images/old.png',
			icon: 'info',
			link:'../dr_pablo_olivarez_bldg/1f/dr_pablo_olivarez.html'

		}, {
			name: "Memorial",
			coords: [55.178867663281984, 17.9296875],
			description: "student lounge",
			image: 'images/me.png',
			icon: 'circle'
			

		}, {
			name: "LRT",
			coords: [-77.82332314521399, 68.466796875],
			description: "Waiting Area",
			image: 'images/lrt.png',
			icon: 'circle'
			

		}, {
			name: "Oli's Den",
			coords: [48.45835188280866, 120.9375],
			description: "Canteen",
			image: 'images/oli.png',
			icon: 'cutlery'
			

		}, {
			name: "Le Cafe",
			coords: [37.96152331396616, 119.4873046875],
			description: "",
			image: 'images/le.png',
			icon: 'cutlery'
			

		}, 
	];


	return markers;


}