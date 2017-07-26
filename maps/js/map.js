/**
map.js 
-Main js file for all maps(except main grounds map). 
*/

/**
map.js 
-Main js file for main map
*/

/** turn on logging */
var logmode = false;



$( document ).ready(function(){
  var coords;


 	var map = L.map('map').setView([-65, 0], 0);

	  L.tileLayer('images/{z}/{x}/{y}.png', {
	            minZoom: 0,
	            maxZoom: 4,
	            attribution: '&copy; Janna Group',
	            tms: true,
              noWrap: true
	        }).addTo(map);

	  /*Set bounds*/

   var southWest = L.latLng(-84.93996, -180.83496);
       northEast = L.latLng(84.83422, 171.29883)
       bounds = L.latLngBounds(southWest, northEast);
    //   map.setMaxBounds(bounds);
 

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
			icon: icon, prefix: 'fa', markerColor: 'darkgreen', //spin:true
			});
 		L.marker(coords, {icon: redMarker}, {
            clickable: true
       	 }).addTo(map).bindPopup(html);
   		} 

	}

  //for generating navigation
  if ( typeof _navigation_items !== 'undefined'){
      if ( _navigation_items.length > 0 ){
          $( "<select>" )
          .attr("id","navigation")
          .html('<option value="">Select Floor</option>')
          .appendTo("body")
          .change(function function_name ( ) {
            if ($(this). val() != "" ){
              window.location.href = $(this).val() ;
            }

          });


          for( var x = 0; x < _navigation_items.length; x++ ){

              $("<option>")
              .attr( "value" , _navigation_items[x].url )
              .text( _navigation_items[x].name)
              .appendTo("#navigation");

          }

      }


  }

      if( window.location.hash.length > 0 ){ 
               coords = window.location.hash.substr(1).split(",");
       
               map.setView( L.latLng(coords[0], coords[1]));
                       map.setZoom(4);
               //event for searching in offiz
              }


                  $("#centermap").click(function(){
          map.fitBounds(bounds);
    });
});//document.ready()

