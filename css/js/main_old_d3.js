/* Create a cache object
var cache = new LastFMCache(); */

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : '6df5baf8c242a7d5eef05774443864a3',
  apiSecret : '04135ec6373e4f80b6ffa500c1cada6c'
/*  cache     : cache */
});

/* Load some artist info. This does nothing, so far. */
lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
  console.log(data);
  /* Use data. */
}, error: function(code, message){
  /* Show error message. */
}});

$(document).ready(function() {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getToptracks&user=Essychu&api_key=6df5baf8c242a7d5eef05774443864a3&limit=10&format=json&callback=?", function(json) {
        var html = '';
        $.each(json.toptracks.track, function(i, item) {
            html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
        });
        $('#andrew-top').append(html);
    });
});

$(document).ready(function() {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=6df5baf8c242a7d5eef05774443864a3&format=json", function(json) {
        var html = '';
        $.each(json.tracks.track, function(i, item) {
            html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
        });
        $('#top').append(html);
    });
});
/*

$(document.ready(function(){
  $.getJSON("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=6df5baf8c242a7d5eef05774443864a3&format=json",function(json){
    chart.getToptracks();
    $('#map').append(html);
  });
});*/
