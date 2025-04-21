let map, userMarker;

function initMap() {
    // Initialize the map centered at a default location
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 15,
    });

    // Add a marker to represent the user's location
    userMarker = new google.maps.Marker({
        map: map,
        position: { lat: 0, lng: 0 },
        title: "Your Location",
    });

    // Watch user's location and update the map
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateLocation, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function updateLocation(position) {
    const { latitude, longitude } = position.coords;
    const newPosition = { lat: latitude, lng: longitude };

    // Update the map view and marker position
    map.setCenter(newPosition);
    userMarker.setPosition(newPosition);
}

function showError(error) {
    console.warn("Geolocation error:", error.message);
}
