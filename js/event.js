
$(document).ready(function() {

    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=" + getParameterByName('usernameValue') + "&api_key=6df5baf8c242a7d5eef05774443864a3&limit=10&format=json&callback=?", function(json) {
        var html = '';
        var counter = 0;
        $.each(json.toptracks.track, function(i, item) {
            if(counter == 10){
                return false;
            }
            else{
            html += "<h4><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></h4><hr>";
            counter++;
            console.log(counter);
            }


        });
        $('#andrew-top').append(html);
    }); /*
		$.getJSON('https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=10&format=json&callback=?', function(data) {
    *///data is the JSON string

});


var map;
function initMap() {
  // Creating a new map
    map = new google.maps.Map(document.getElementById('map'), {

      center: {lat:32.8801, lng:-117.2340},
      zoom: 15,
      scrollwheel: false,
      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      // https://snazzymaps.com/style/15/subtle-grayscale
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
  });

    infoWindow = new google.maps.InfoWindow;


    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

                  var locationSearch = '';
                  $.getJSON("https://ws.audioscrobbler.com/2.0/?method=track.search&track=San%20Diego&api_key=6df5baf8c242a7d5eef05774443864a3&limit=3&format=json&callback=?", function(json) {
                      locationSearch += "<h1>Tracks related to \"San Diego\":</h1>";
                      $.each(json.results.trackmatches.track, function(i, item) {
                          locationSearch += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " +  item.artist + "</a></p>";
                      });
                  });
                  $.getJSON("https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=San%20Diego&api_key=6df5baf8c242a7d5eef05774443864a3&limit=3&format=json&callback=?", function(json) {
                      locationSearch += "<h1>Artists related to \"San Diego\":</h1>";
                      $.each(json.results.artistmatches.artist, function(i, item) {
                          locationSearch += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Listeners : " + item.listeners + "</a></p>";
                      });
                  });
                  $.getJSON("https://ws.audioscrobbler.com/2.0/?method=album.search&album=San%20Diego&api_key=6df5baf8c242a7d5eef05774443864a3&limit=3&format=json&callback=?", function(json) {
                      locationSearch += "<h1>Albums related to \"San Diego\":</h1>";
                      $.each(json.results.albummatches.album, function(i, item) {
                          locationSearch += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " +  item.artist + "</a></p>";
                      });
                  });

                  var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
                  });


                  google.maps.event.addListener(marker, "click", function(e) {
                    infoWindow.setContent(locationSearch);
                    infoWindow.open(map, marker, locationSearch);
                  });


                  // Add the circle with a radius of 1 mile to the current location.
            			/*var largeCircle = new google.maps.Circle({
            				strokeColor: '#FF0000',
            				strokeOpacity: 0.8,
            				strokeWeight: 4, /*
            				fillColor: '#FF0000',
            				fillOpacity: 0.35,
            				map: map,
            				center: pos,
            				clickable: true,
            				radius: 1609.34
            			}); */

                  // Add the circle with a radius of 1 mile to the current location.
            	/*		var mediumCircle = new google.maps.Circle({
            				strokeColor: '#FF0000',
            				strokeOpacity: 0.8,
            				strokeWeight: 3, /*
            				fillColor: '#FF0000',
            				fillOpacity: 0.35,
            				map: map,
            				center: pos,
            				clickable: true,
            				radius: 965.606
            			}); */


                  // Add the circle with a radius of 1 mile to the current location.
            			var smallCircle = new google.maps.Circle({
            				strokeColor: '#FF0000',
            				strokeOpacity: 0.8,
            				strokeWeight: 2, /*
            				fillColor: '#FF0000',
            				fillOpacity: 0.35, */
            				map: map,
            				center: pos,
            				clickable: true,
            				radius: 482.803,
                    editable: true
            			});


                  // change smallCircle if you want markers on a different location
                  // Getting the boundaries of the map
                  var bounds = smallCircle.getBounds();

                  // Getting the corners of the map
                  var southWest = bounds.getSouthWest();
                  var northEast = bounds.getNorthEast();

                  // Calculating the distance from the top to the bottom of the map
                  var latSpan = northEast.lat() - southWest.lat();

                  // Calculating the distance from side to side
                  var lngSpan = northEast.lng() - southWest.lng();

                  // Creating a loop
                  for (var i = 0; i < 7; i++) {

                  // Creating a random position
                  var lat = southWest.lat() + latSpan * Math.random();
                  var lng = southWest.lng() + lngSpan * Math.random();
                  var latlng = new google.maps.LatLng(lat, lng);

                  // Adding a marker to the map
                  new google.maps.Marker({
                  position: latlng,
                  map: map,
                  icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
                  });
                  console.log(i);
                }

              /*    largeCircle.bindTo(marker); */
             //     mediumCircle.bindTo(marker);
                  smallCircle.bindTo(marker);

                  infoWindow.setContent('You are here.');
        					infoWindow.setPosition(pos);
        					infoWindow.open(map);
        					map.setCenter(pos);
        				}, function() {
        					handleLocationError(true, infoWindow, map.getCenter());
        				});
        			} else {
        				// Browser doesn't support Geolocation
        				handleLocationError(false, infoWindow, map.getCenter());
        			}


            // Creating the JSON data
            var json = [
            {
              "city": "San Diego, CA",
              "lat": 32.8801,
              "lng": -117.2340,
              "artist": "Justin Timberlake",
              "listeners": 2646775,
              "description": "blank"
            }

            ]


            var citymap = {
            	sandiego: {
            	  center: {lat: 32.8801, lng: -117.2340},
            		listens: 1
            	}
            };


        		var infoWindow = new google.maps.InfoWindow();

        		// Looping through the JSON data
        		for (var i = 0, length = json.length; i < length; i++) {

        			var data = json[i],
        				latLng = new google.maps.LatLng(data.lat, data.lng);


        				// Creating a marker and putting it on the map
        				var markers = new google.maps.Marker({
        					position: latLng,
        					map: map,
        					title: city,
                  icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        				});


        			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
        			(function(markers, data) {
        				var andrewHtml = '';
        			    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=5&format=json&callback=?", function(json) {
        			        $.each(json.toptracks.track, function(i, item) {
        			            andrewHtml += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
        			        });
        			    });

        				// Attaching a click event to the current marker
        				google.maps.event.addListener(markers, "click", function(e) {
        					if (data.city == "Chicago, IL") {
        						infoWindow.setContent("chicagoooooo");
        						infoWindow.open(map, markers);
        					}
        					if (data.city == "San Diego, CA") {
        						infoWindow.setContent("<div class=info-box><h2> Andrew's Top Tracks</h2>" + andrewHtml);
        						infoWindow.open(map, markers);
        					}
                  else{
        					infoWindow.setContent('<div class="info-box"><h2>' + data.city + '</h2>'+ data.artist + '</br>' + data.listeners + " listeners");
        					infoWindow.open(map, markers, contentString);
                }
        				});

        			})(markers, data);


        		}

                //Cynthia's last.fm pin
                       for (var i = 0, length = json.length; i < length; i++) {

        			var data = json[i],
        				cynthialatLng = {
                            lat: 32.8858961,
                            lng: -117.2434672
                        }



        				// Creating a marker and putting it on the map
        				var markers = new google.maps.Marker({
        					position: cynthialatLng,
        					map: map,
        					title: city,
                  icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        				});


        			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
        			(function(markers, data) {
        				var cynthiaHTML = '';
        			    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=cynthiahong&api_key=6df5baf8c242a7d5eef05774443864a3&limit=5&format=json&callback=?", function(json) {
        			        $.each(json.toptracks.track, function(i, item) {
        			            cynthiaHTML += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
        			        });
        			    });

        				// Attaching a click event to the current marker
        				google.maps.event.addListener(markers, "click", function(e) {
        					if (data.city == "Chicago, IL") {
        						infoWindow.setContent("chicagoooooo");
        						infoWindow.open(map, markers);
        					}
        					if (data.city == "San Diego, CA") {
        						infoWindow.setContent("<div class=info-box><h2> Cynthia's Top Tracks</h2>" + cynthiaHTML);
        						infoWindow.open(map, markers);
        					}
                  else{
        					infoWindow.setContent('<div class="info-box"><h2>' + data.city + '</h2>'+ data.artist + '</br>' + data.listeners + " listeners");
        					infoWindow.open(map, markers, contentString);
                }
        				});

        			})(markers, data);

        		}

                //tyler's last.fm pin
                for (var i = 0, length = json.length; i < length; i++) {

        			var data = json[i],
        				tylerlatLng = {
                            lat: 32.8829164,
                            lng: -117.2350471
                        }



        				// Creating a marker and putting it on the map
        				var markers = new google.maps.Marker({
        					position: tylerlatLng,
        					map: map,
        					title: city,
                  icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        				});


        			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
        			(function(markers, data) {
        				var tylerHtml = '';
        			    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=ctsorensen&api_key=6df5baf8c242a7d5eef05774443864a3&limit=5&format=json&callback=?", function(json) {
        			        $.each(json.toptracks.track, function(i, item) {
        			            tylerHtml += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
        			        });
        			    });

        				// Attaching a click event to the current marker
        				google.maps.event.addListener(markers, "click", function(e) {
        					if (data.city == "Chicago, IL") {
        						infoWindow.setContent("chicagoooooo");
        						infoWindow.open(map, markers);
        					}
        					if (data.city == "San Diego, CA") {
        						infoWindow.setContent("<div class=info-box><h2> Tyler's Top Tracks</h2>" + tylerHtml);
        						infoWindow.open(map, markers);
        					}
                  else{
        					infoWindow.setContent('<div class="info-box"><h2>' + data.city + '</h2>'+ data.artist + '</br>' + data.listeners + " listeners");
        					infoWindow.open(map, markers, contentString);
                }
        				});

        			})(markers, data);

        		}


        		// Construct the circle for each value in citymap.
        		// places the other user pins
        		for (var city in citymap) {

        			console.log(city);

        		}



        	}

/* opens map in the accordian */
initMap();
$('#map').on('hidden.bs.collapse', function () {
  initMap();
})
$('#map').on('shown.bs.collapse', function () {
  initMap();
})

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/* animation for the accordian */
$(document).ready(function() {

$(".map-button").click(function(e){
  $($(e.target).find('.fa.fa-plus').toggleClass('open'));
$(".accordian ul ul").slideUp();
  if ($(this).next().is(":hidden")){
  $(this).next().slideDown();
  }
});

});
