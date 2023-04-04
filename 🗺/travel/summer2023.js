// Initialize the Leaflet map
const map = L.map('map').setView([30, 10], 3); 

// Add a base map layer
L.tileLayer('     https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7d8e9f8db9ff49f5a80ad2b62eda4470 ', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '7d8e9f8db9ff49f5a80ad2b62eda4470',
	maxZoom: 22
}).addTo(map);

const s23step1 = new L.Geodesic([MSP, AMS], air).addTo(map);
const s23step2 = new L.Geodesic([AMS, ARN], air).addTo(map);

