// Initialize the Leaflet map
const map = L.map('map').setView([30, 10], 3); 

// Add a base map layer
L.tileLayer('     https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7d8e9f8db9ff49f5a80ad2b62eda4470 ', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '7d8e9f8db9ff49f5a80ad2b62eda4470',
	maxZoom: 22
}).addTo(map);

// Add the GeoJSON data
// loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
$.getJSON("visited/northAmRegions.geojson",function(data){
L.geoJson(data, {
    style: function(feature) {
        switch (feature.properties.status) {
            case 'y': return {color: "#1C5A71", "weight": 2, "opacity": 0.65 };
            case 'n':   return { "color": "#fff", "weight": 0, "opacity": 0.00 };
            case 'l':   return { "color": "#1B3035", "weight": 2, "opacity": 0.65 };
        }
}}).addTo(map);});

$.getJSON("visited/europeRegions.geojson",function(data){
L.geoJson(data, {
    style: function(feature) {
        switch (feature.properties.status) {
            case 'y': return {color: "#1C5A71", "weight": 2, "opacity": 0.65 };
            case 'n':   return { "color": "#fff", "weight": 0, "opacity": 0.00 };
            case 'l':   return { "color": "#1B3035", "weight": 2, "opacity": 0.65 };
        }
}}).addTo(map);});
