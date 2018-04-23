import { Disease } from './disease.js';
// import { Player } from './player';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  let flu = new Disease("Flu");
  flu.diseaseSpread();
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
