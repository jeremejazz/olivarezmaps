/**
map.js 
-Main js file for main map
*/

/** turn on logging */
var logmode = false;

var map;

$( document ).ready(function(){

 	  map = L.map('map').setView([-65, 0], 0);

	  L.tileLayer('images/{z}/{x}/{y}.png', {
	            minZoom: 0,
	            maxZoom: 5,
	            attribution: '&copy; Janna Group',
              removeAttribution: true,
	            tms: true,
              noWrap: true
	        }).addTo(map);

	  /*Set bounds*/

	  var southWest = L.latLng(-89.85191, -451.40625);
        northEast = L.latLng(89.77524, 417.65625)
         bounds = L.latLngBounds(southWest, northEast);
         map.fitBounds(bounds);
        //map.setMaxBounds(bounds);
   

	  if( logmode ){
	  	  map.on('click', function(e) {
	             
	            console.log("[coordinates: " + e.latlng.toString() + "]");
                 var popup = L.popup();
                      popup
                      .setLatLng(e.latlng)
                      .setContent( e.latlng.lat + ', ' + e.latlng.lng )
                      .openOn(map);
         
	  
	          });

	  }


	  /*coordinates plotting*/
	 if ( typeof plotMarkers == 'function' ) { 
   		
   		var markers = plotMarkers();

   		for(x = 0; x < markers.length; x++){
   			var coords = markers[x].coords;
   			var icon = markers[x].icon;
   			var name = markers[x].name;
   			var description = markers[x].description;
        var link = markers[x].link  ? '<p class="navlink"><a href="' + markers[x].link + '" >Go to this Area</a></p>' : '';
        var image = markers[x].image ? '<img class="imgpreview" src="' + markers[x].image + '" alt="' + name +'" />' : '';
     
   			var html = '<div class="infowindow"  >' + 
   						'<h2>' + name + '</h2>' +
   						description +
              image +
              link +
   						'</div>';
 
   			if(!icon){
   				icon = 'home';
   			}
   			var redMarker = L.AwesomeMarkers.icon({
			icon: icon, prefix: 'fa', markerColor: 'green', //spin:true
			});
 		L.marker(coords, {icon: redMarker}, {
            clickable: true
       	 }).addTo(map).bindPopup(html);
   		} 

	}

    $("#centermap").click(function(){
          map.fitBounds(bounds);
    });

});//document.ready()




 