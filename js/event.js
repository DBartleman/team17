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
            "artist": "Lady Gaga",
            "listeners": 3603012,
		        "description": "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json"
		    },
		    {
		        "city": "Los Angeles, CA",
		        "lat": 34.052,
		        "lng": -118.243,
            "artist": "Katy Perry",
            "listeners": 3547124,
		        "description": "blank"
		    },
		    {
		        "city": "San Diego, CA",
		        "lat": 32.8801,
		        "lng": -117.2340,
            "artist": "Justin Timberlake",
            "listeners": 2646775,
		        "description": "blank"
		    },
				{
						"city": "New York, NY",
						"lat": 40.714,
						"lng": -74.005,
            "artist": "Kelly Clarkson",
            "listeners": 2284482,
						"description": "blank"
				},
        {
            "city": "San Francisco, CA",
            "lat": 37.773972,
            "lng":  -122.431297,
            "artist": "Coldplay",
            "listeners": 5184204,
            "description": "blank"
        },
        {
            "city": "Miami, FL",
            "lat": 25.761681,
            "lng": -80.191788,
            "artist": "Fergie",
            "listeners": 1713443,
            "description": "blank"
        },
        {
            "city": "Austin, TX",
            "lat": 30.307182,
            "lng": -97.755996,
            "artist": "Backstreet Boys",
            "listeners": 1277381
        },
        {
            "city": "Kansas City, MO",
            "lat": 39.114171,
            "lng": -94.627457,
            "artist": "Taylor Swift",
            "listeners": 1940646
        },
        {
            "city": "Washington, DC, USA",
            "lat": 38.889931,
            "lng": -77.009003,
            "artist": "Alicia Keys",
            "listeners": 2209946
        },
        {
            "city": "Atlanta, GA",
            "lat": 33.7490,
            "lng": -84.3880,
            "artist": "Janet Jackson",
            "listeners": 1216405
        },
        {
            "city": "Seattle, WA",
            "lat": 47.6062,
            "lng": -122.3321,
            "artist": "Bruno Mars",
            "listeners": 1629847
        },
        {
            "city": "Denver, CO",
            "lat": 39.7392,
            "lng": -104.9903,
            "artist": "Michelle Branch",
            "listeners": 739935
        },
        {
            "city": "Las Vegas, NV",
            "lat": 36.1699,
            "lng": -115.1398,
            "artist": "Michael Buble",
            "listeners": 1692724
        }
		]


		var citymap = {
			chicago: {
				center: {lat: 41.878, lng: -87.629},
				listens: 3603012
			},
			losangeles: {
				center: {lat: 34.052, lng: -118.243},
				listens: 3547124
			},
			sandiego: {
			  center: {lat: 32.8801, lng: -117.2340},
				listens: 2646775
			},
			newyork: {
				center: {lat: 40.714, lng: -74.005},
				listens: 2284482
			},
      sanfrancisco:{
        center: {lat: 37.773972, lng:  -122.431297},
        listens: 5184204
      },
      miami:{
        center: {lat: 25.761681, lng: -80.191788},
        listens: 1713443
      },
      austin:{
        center: {lat: 30.307182, lng: -97.755996},
        listens: 1277381
      },
      kansascity:{
        center: {lat: 39.114171, lng: -94.627457},
        listens: 1940646
      },
      washingtondc:{
        center: {lat: 38.889931, lng: -77.009003},
        listens: 2209946
      },
      atlanta:{
        center: {lat: 33.7490, lng: -84.3880},
        listens: 1216405
      },
      seattle:{
        center: {lat: 47.6062, lng: -122.3321},
        listens: 1629847
      },
      denver:{
        center: {lat: 39.7392, lng: -104.9903},
        listens: 739935
      },
      lasvegas:{
        center: {lat: 36.1699, lng: -115.1398},
        listens: 1692724
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
				var andrewHtml = '';
			    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=5&format=json&callback=?", function(json) {
			        $.each(json.toptracks.track, function(i, item) {
			            andrewHtml += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
			        });
			    });
				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function(e) {
					if (data.city == "Chicago, IL") {
						infoWindow.setContent("chicagoooooo");
						infoWindow.open(map, marker);
					}
					if (data.city == "Los Angeles, CA") {
						infoWindow.setContent("<div class=info-box><h2> Andrew's Top Tracks</h2>" + andrewHtml);
						infoWindow.open(map, marker);
					}
          else{
					infoWindow.setContent('<div class="info-box"><h2>' + data.city + '</h2>'+ data.artist + '</br>' + data.listeners + " listeners");
					infoWindow.open(map, marker, contentString);
        }
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
				radius: Math.sqrt(citymap[city].listens) * 100
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
