

var map;
var infowindow;

function restaurantSearch(id, storeName) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          var myCenter = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          map = new google.maps.Map(document.getElementById(id), {
              center: myCenter,
              zoom: 15
          });
              var request = {
              location: myCenter,
              radius: 1000,
              types: [storeName]
          };
          infowindow = new google.maps.InfoWindow();
          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, callback);
      });
    } else {
      showText += "<br>Geolocation is not supported by this browser.<br>";  
    }
  }



function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
    }
 }
}

function createMarker(place) {
 var placeLoc = place.geometry.location;
 var marker = new google.maps.Marker({
 map: map,
 position: place.geometry.location
 });
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
 });
}
google.maps.event.addDomListener(window, 'load', initialize);
