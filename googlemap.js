let southernsiteworksOverlay;

function initMap() {

    // Custom Skin
    const styledMapType = new google.maps.StyledMapType(
    [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
    ],
      { name: "Styled Map" }
    );

    // 1688 Brownlee Rd, Jackson, GA 30233
    // lat: 33.256473, lng: -83.969178

    const southerensiteworksLocation = { lat: 33.256473, lng: -83.969178 };
    const markerImage = "https://yoursite.com/wp-content/uploads/2021/12/marker.svg"; // will change on live mode
    const businessArea = 120701; // 75 miles = 120701 meters

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: southerensiteworksLocation,
        mapTypeId: "terrain",
        disableDefaultUI: true,
    });


    // Custom Marker
    const beachMarker = new google.maps.Marker({
        position: southerensiteworksLocation,
        title: "Southern Siteworks | 1688 Brownlee Rd, Jackson, GA 30233",
        map,
        icon: markerImage
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
    map.setOptions({
        fullscreenControl: true,
        draggable: true,
        zoomControl: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        gestureHandling: "cooperative"
    });

    // Overlay our image within 75 miles boundary. Boundary value is very important! 
    const imageBounds = {
        north: 34.255,
        south: 32.2445,
        east: -82.6801,
        west: -83.9715,
    };

    southernsiteworksOverlay = new google.maps.GroundOverlay(
        "https://yoursite.com/wp-content/uploads/2021/12/75milesLabel-1.svg",
        imageBounds
    );
    southernsiteworksOverlay.setMap(map);


    // 75 miles circle
    const rectangle = new google.maps.Circle({
        strokeColor: "#1b5fba1a",
        strokeOpacity: 0,
        strokeWeight: 0,
        fillColor: "#1b5fba1a",
        fillOpacity: 0.5,
        map,
        center: southerensiteworksLocation,
        radius: businessArea
    });

}
