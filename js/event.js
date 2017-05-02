$(document).ready(function() {
    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=10&format=json&callback=?", function(json) {
        var html = '';
        $.each(json.toptracks.track, function(i, item) {
            html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
        });
        $('#andrew-top').append(html);
    }); /*
		$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=10&format=json&callback=?', function(data) {
    *///data is the JSON string
		console.log(data);
});



(function() {

	window.onload = function() {

		// Creating a new map
			map = new google.maps.Map(document.getElementById('map'), {
				/*
				center: {lat: 32.8801, lng: -117.2340} */
				center: {lat:39, lng:-95},
				zoom: 4,
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
					infoWindow.setPosition(pos);
					infoWindow.setContent('i see you.');
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
		        "city": "Chicago, IL",
		        "lat": 41.878,
		        "lng": -87.629,
						"artist": " ",
		        "description": "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json"
		    },
		    {
		        "city": "Los Angeles, CA",
		        "lat": 34.052,
		        "lng": -118.243,
		        "description": "blank"
		    },
		    {
		        "city": "San Diego, CA",
		        "lat": 32.8801,
		        "lng": -117.2340,
		        "description": "blank"
		    },
				{
						"city": "New York, NY",
						"lat": 40.714,
						"lng": -74.005,
						"description": "blank"
				}
		]


		var citymap = {
			chicago: {
				center: {lat: 41.878, lng: -87.629},
				population: 2714856
			},
			losangeles: {
				center: {lat: 34.052, lng: -118.243},
				population: 3857799
			},
			sandiego: {
			  center: {lat: 32.8801, lng: -117.2340},
				population: 603502
			},
			newyork: {
				center: {lat: 40.714, lng: -74.005},
				population: 8405837
			}
		};


var contentString = "hello world";
		// Creating a global infoWindow object that will be reused by all markers
		/* var infowindow = new google.maps.InfoWindow({
	    content: contentString,
			maxWidth: 500
	  }); */

		var infoWindow = new google.maps.InfoWindow();

		// Looping through the JSON data
		for (var i = 0, length = json.length; i < length; i++) {
			console.log(json.length);
			var data = json[i],
				latLng = new google.maps.LatLng(data.lat, data.lng);



				// Creating a marker and putting it on the map
				var marker = new google.maps.Marker({
					position: latLng,
					map: map,
					title: city
				});


			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {

				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function(e) {
					infoWindow.setContent(data.city + data.artist);
					infoWindow.open(map, marker, contentString);
				});


			})(marker, data);

		}
		// Construct the circle for each value in citymap.
		// Note: We scale the area of the circle based on the population.
		for (var city in citymap) {

			console.log(city);


			// Add the circle for this city to the map.
			var cityCircle = new google.maps.Circle({
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
				map: map,
				center: citymap[city].center,
				clickable: true,
				radius: Math.sqrt(citymap[city].population) * 100
			});
		}
		cityCircle.bindTo('center',marker,'position');
    console.log(citymap[city].center);


	}

})();


/*
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
												'Error: The Geolocation service failed.' :
												'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
*/
