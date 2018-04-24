import { Disease } from './disease.js';
// import { Player } from './player';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
const mapsapi = require( 'google-maps-api' )(process.env.GOOGLE_MAP_KEY);

function mapFunction (tickRadius) {
  mapsapi().then( function( maps )  {
    let map = new maps.Map(document.querySelector('#map'), {
      center: {
        lat: 25,
        lng: 35
      },
      zoom: 2
    });
    let marker = new maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      radius: tickRadius,
      map: map,
      center: {lat: 45, lng: -122}
    });
  });
}


$(document).ready(function() {
  let flu = new Disease("Flu");
  let tickRadius = 200000;
  mapFunction(tickRadius);

  setInterval(function () {
    tickRadius += 80000;
    mapFunction(tickRadius);
  }, 1000);
  flu.diseaseSpread();
  flu.spreadRateIncrease();
  setInterval(function(){
    $("#name").text(flu.name);
    $("#rate").text(flu.spreadRate);
    $("#new").text(flu.infectedNew);
    $("#sick").text(flu.infectedSick);
    $("#terminal").text(flu.infectedTerminal);
    $("#dead").text(`${flu.infectedDead}/100`);
    $("#cure").text(`${flu.cure}/100`);
  }, 1000);
});

//     let coords = [[48.8566,2.3522],[40.7128, -74.0060],[22.3964,114.1095],[35.6895,139.6917],[-33.8688,151.2093],[-33.9249,18.4241],[-15.7942,-47.8822]];
//     for(let i =0; i<coords.length; i++) {
//       let marker = new maps.Circle({
//         strokeColor: '#FF0000',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: '#FF0000',
//         fillOpacity: 0.35,
//         radius: tickRadius,
//         map: map,
//         center: {lat: coords[i][0], lng: coords[i][1]}
//       });
//     }
//   }).catch(function (error) {
//     console.error(error)
//   });
// }
