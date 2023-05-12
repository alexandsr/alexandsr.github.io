// Initialize the Leaflet map
const map = L.map('map').setView([30, 10], 3); 

// Add a base map layer
L.tileLayer('     https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7d8e9f8db9ff49f5a80ad2b62eda4470 ', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '7d8e9f8db9ff49f5a80ad2b62eda4470',
	maxZoom: 22
}).addTo(map);

L.marker([59.37578177463682, 17.03763301315459], {icon: schoolIcon}).bindPopup("<span style='font-family: trueno'><h1 style='margin: 0; padding: 0;'><span style='color: #dc0d04'>RAYS*</span> Sommarforskarskola</h1><h4 style='margin: 0; padding: 0'>* For Excellence</h4><p>Fyra Veckor från 16 Juni till 14 Juli av verklig utföring <br>och framställing av forskning ur Europaskolan i Strängnäs.</p><h3><a href='https://raysforexcellence.se/' style='color: #dc0d04'>www.raysforexcellence.se</a></h3></span>").addTo(map);


const s23step1 = new L.Geodesic([MSP, AMS], air).addTo(map);
const s23step2 = new L.Geodesic([AMS, ARN], air).addTo(map);

