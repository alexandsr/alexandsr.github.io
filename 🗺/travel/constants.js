// Locations
    // Cities/Towns
    const Minneapolis = {lat: 44.9778, lng: -93.2650};
    const NYC = {lat: 40.7128, lng: -74.0060};
    const Dallas = {lat: 32.7767, lng: -96.7970};
    const SantaCruz = {lat: 36.9741, lng: -122.0308};
    const SanFran= {lat: 37.7749, lng: -122.4194};

    const Jönköping = {lat: 57.7826, lng: 14.1618};
    const Stockholm = {lat: 59.3293, lng: 18.0686};
    const Täby = {lat: 59.4419, lng: 18.0703};
    const Gävle = {lat: 60.6749, lng: 17.1413};
    const Borlänge = {lat: 60.4843, lng: 15.4340};
    const Falun = {lat: 60.6065, lng: 15.6355};
    const Nyhyttan = {lat: 60.4995, lng: 15.7884};
    const Leksand = {lat: 60.7304, lng: 14.9980};
    const Abisko = {lat: 68.3495, lng: 18.8312};

    const Paris = {lat: 48.8566, lng: 2.3522};
    const Köpenhamn = {lat: 55.6761, lng: 12.5683};
    const Oslo = {lat: 59.9139, lng: 10.7522};
    const Reykjavik = {lat: 64.1466, lng: -21.9426};

    // Airports
    const SFO = {lat: 37.6213, lng: -122.3790}; // San Fransisco
    const MSP = {lat: 44.8848, lng: -93.2223}; // Minneapolis
    const AMS = {lat: 52.3105, lng: 4.7683}; // Amsterdam
    const ARN = {lat: 59.6494, lng: 17.9343}; // Stockholm 
    const TFS = {lat: 28.0468, lng: 16.5725}; // Tenerife

// Modes
const air = {
    weight: 4,
    opacity: 1,
    color: '#004854',
};
const train = {
    weight: 4,
    opacity: 1,
    color: '#BB0A21',
};
const bike = {
    weight: 4,
    opacity: 1,
    color: '#F17300',
};
const foot = {
    weight: 4,
    opacity: 1,
    color: '#0EB454',
};
const subway = {
    weight: 4,
    opacity: 1,
    color: '#DE2110',
};
const bus = {
    weight: 4,
    opacity: 1,
    color: '#BF4B21',
};
const boat = {
    weight: 4,
    opacity: 1,
    color: '#320E3B',
};
const car = {
    weight: 4,
    opacity: 1,
    color: '#111111',
};
// Initialize the Leaflet map
const map = L.map('map').setView([30, 10], 3); 

// Add a base map layer
L.tileLayer('     https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7d8e9f8db9ff49f5a80ad2b62eda4470 ', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '7d8e9f8db9ff49f5a80ad2b62eda4470',
	maxZoom: 22
}).addTo(map);