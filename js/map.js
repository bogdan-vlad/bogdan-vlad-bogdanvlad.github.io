function initMap() {
    var bristol = {
        lat: 51.454514,
        lng: -2.587910
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: bristol
    });
    var marker = new google.maps.Marker({
        position: bristol,
        map: map
    });
}