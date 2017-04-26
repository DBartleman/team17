// MAPS api key: AIzaSyB3jzZQx9KgOlNtQ9tDU2ty0BIYcC5mwGk


console.log("map load");


var bubble_map = new Datamap({
  element: document.getElementById("bubbles"),
  scope: 'usa',
  geographyConfig: {
    dataUrl: null, // If not null, datamaps will fetch the map JSON (currently only supports topojson)
     hideAntarctica: true,
     hideHawaiiAndAlaska : false,
     borderWidth: 1,
     borderOpacity: 1,
     borderColor: '#FDFDFD',
     popupOnHover: false, // True to show the popup while hovering
     highlightOnHover: false,
     highlightFillColor: '#FC8D59',
     highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
     highlightBorderWidth: 2,
     highlightBorderOpacity: 1
  },
  bubblesConfig: {
      borderWidth: 2,
      borderOpacity: 1,
      borderColor: '#FFFFFF',
      popupOnHover: true, // True to show the popup while hovering
      radius: null,
      popupTemplate: function(geography, data) { // This function should just return a string
        return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
      },
      fillOpacity: 0.75,
      animate: true,
      highlightOnHover: true,
      highlightFillColor: '#FC8D59',
      highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
      highlightBorderWidth: 2,
      highlightBorderOpacity: 1,
      highlightFillOpacity: 0.85,
      exitDelay: 100, // Milliseconds
      key: JSON.stringify
    },
        fills: {
            'USA': '#1f77b4',
            defaultFill: '#EDDC4E',
            HIGH: '#afafaf',
            LOW: '#123456',
            MEDIUM: 'blue',
            UNKNOWN: 'rgb(0,0,0)'
        },
        data: {
            'USA': {fillKey: 'USA'}
        }
    });

         var city = [{
           name: 'San Diego, California',
           latitude: 32.8801,
           longitude: -117.2340,
           /* can change the radius size, maybe *5 the # of listens will display the radius size? */
           radius:5,
           fill: '#000'
         },
         {
           name: 'Los Angeles, California',
           latitude: 34.0522,
           longitude: -118.243662,
           radius: 10,
           fill: '#123'
         },
         {
           name: 'New York City, New York',
           latitude: 40.7128,
           longitude: -74.0059,
           radius: 10,
           fill: '123'
         }
        ];
    //draw bubbles for map
    bubble_map.bubbles(city, {
        popupTemplate: function (geo, data) {
                return ['<div class="hoverinfo">' +  data.name,
                '<br/>latitude: ' +  data.latitude + '',
                '<br/>longitude:' + data.longitude +'',
                '<br/>radius: ' +  data.radius + '',
                '</div>'].join('');
        }
    });
    d3.selectAll(".datamaps-bubble").on('click', function(bubble) {
        console.log(bubble);
    });


/* this creates a marker and circle for Google Maps */

        function initMap() {
          var uluru = {lat: 32.8801, lng: -117.2340};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru,
            radius: 25
          });

          var contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
              'sandstone rock formation in the southern part of the '+
              'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
              'south west of the nearest large town, Alice Springs; 450&#160;km '+
              '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
              'features of the Uluru - Kata Tjuta National Park. Uluru is '+
              'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
              'Aboriginal people of the area. It has many springs, waterholes, '+
              'rock caves and ancient paintings. Uluru is listed as a World '+
              'Heritage Site.</p>'+
              '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
              'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
              '(last visited June 22, 2009).</p>'+
              '</div>'+
              '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            title: 'Uluru (Ayers Rock)'

          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          // This example creates circles on the map, representing populations in North
          // America.

          // First, create an object containing LatLng and population for each city.
          var citymap = {
            chicago: {
              center: {lat: 41.878, lng: -87.629},
              population: 2714856
            },
            newyork: {
              center: {lat: 40.714, lng: -74.005},
              population: 8405837
            },
            losangeles: {
              center: {lat: 34.052, lng: -118.243},
              population: 3857799
            },
            sandiego: {
              center: {lat: 32.8801, lng: -117.2340},
              population: 603502
            }
          };


            // Construct the circle for each value in citymap.
            // Note: We scale the area of the circle based on the population.
            for (var city in citymap) {
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


        }
