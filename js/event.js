/*

users:
https://www.last.fm/user/cheshire-fox
https://www.last.fm/user/yelling-at-cats
https://www.last.fm/user/Luftroehren-Joe
https://www.last.fm/user/Red-Rog
https://www.last.fm/user/Hot-Dog



*/


$(document).ready(function() {

    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=10&format=json&callback=?", function(json) {
        var html = '';
        $.each(json.toptracks.track, function(i, item) {
            html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
        });
        $('#andrew-top').append(html);
    }); /*
		$.getJSON('https://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=10&format=json&callback=?', function(data) {
    *///data is the JSON string
		console.log(data);

});



(function() {

	window.onload = function() {

		// Creating a new map
			map = new google.maps.Map(document.getElementById('map'), {
				/*
				center: {lat: 32.8801, lng: -117.2340} */
				center: {lat:32.8801, lng:-117.2340},
				zoom: 15,
				scrollwheel: false,
				// How you would like to style the map.
				// This is where you would paste any style found on Snazzy Maps.
				// https://snazzymaps.com/style/15/subtle-grayscale
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
      });

			infoWindow = new google.maps.InfoWindow;


			// Try HTML5 geolocation.
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};

          var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });


          // Add the circle with a radius of 1 mile to the current location.
    			var largeCircle = new google.maps.Circle({
    				strokeColor: '#FF0000',
    				strokeOpacity: 0.8,
    				strokeWeight: 4, /*
    				fillColor: '#FF0000',
    				fillOpacity: 0.35,*/
    				map: map,
    				center: pos,
    				clickable: true,
    				radius: 1609.34
    			});

          // Add the circle with a radius of 1 mile to the current location.
    			var mediumCircle = new google.maps.Circle({
    				strokeColor: '#FF0000',
    				strokeOpacity: 0.8,
    				strokeWeight: 3, /*
    				fillColor: '#FF0000',
    				fillOpacity: 0.35,*/
    				map: map,
    				center: pos,
    				clickable: true,
    				radius: 965.606
    			});


          // Add the circle with a radius of 1 mile to the current location.
    			var smallCircle = new google.maps.Circle({
    				strokeColor: '#FF0000',
    				strokeOpacity: 0.8,
    				strokeWeight: 2, /*
    				fillColor: '#FF0000',
    				fillOpacity: 0.35,*/
    				map: map,
    				center: pos,
    				clickable: true,
    				radius: 482.803
    			});

          largeCircle.bindTo(marker);
          mediumCircle.bindTo(marker);
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
/*		    {
		        "city": "Chicago, IL",
		        "lat": 41.878,
		        "lng": -87.629,
            "artist": "Lady Gaga",
            "listeners": 3603012,
		        "description": "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json"
		    },
		    {
		        "city": "Los Angeles, CA",
		        "lat": 34.052,
		        "lng": -118.243,
            "artist": "Katy Perry",
            "listeners": 3547124,
		        "description": "blank"
		    },*/
		    {
		        "city": "San Diego, CA",
		        "lat": 32.8801,
		        "lng": -117.2340,
            "artist": "Justin Timberlake",
            "listeners": 2646775,
		        "description": "blank"
		    } /*,
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
        }*/
		]


		var citymap = {
      /*
			chicago: {
				center: {lat: 41.878, lng: -87.629},
				listens: 3603012
			},
			losangeles: {
				center: {lat: 34.052, lng: -118.243},
				listens: 3547124
			},*/
			sandiego: {
			  center: {lat: 32.8801, lng: -117.2340},
				listens: 1
			} /*,
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
      }*/
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
				var markers = new google.maps.Marker({
					position: latLng,
					map: map,
					title: city,
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
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
		// Construct the circle for each value in citymap.
		// Note: We scale the area of the circle based on the population.
		for (var city in citymap) {

			console.log(city);

			// Add the circle for this city to the map.
	/*		var cityCircle = new google.maps.Circle({
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
				map: map,
				center: citymap[city].center,
				clickable: true,
				radius: 1609.34
			}); */
		}
		/*cityCircle.bindTo('center',markers,'position'); */
    console.log(citymap[city].center);


	}
  function small() {
    smallCircle.setMap(map);
    mediumCircle.setMap(null);
    largeCircle.setMap(null);
  }

  function medium() {
    mediumCircle.setMap(map);
    smallCircle.setMap(null);
    largeCircle.setMap(null);
  }

  function large(){
    largeCircle.setMap(map);
    smallCircle.setMap(null);
    mediumCircle.setMap(null);
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
