
  function getMyLocation(id, id2) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(id);
          document.getElementById(id).innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;

          var myCenter = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          var mapProp = {center:myCenter,
          zoom:17,
          mapTypeId:google.maps.MapTypeId.ROADMAP
          };
          var map=new google.maps.Map(document.getElementById(id2),mapProp);
          var marker=new google.maps.Marker({
          position:myCenter,
          });
          marker.setMap(map);
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

  

//  google.maps.event.addDomListener(window, 'load', initialize);