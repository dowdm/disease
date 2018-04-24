import { Disease } from './disease.js';
// import { Player } from './player';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';




$(document).ready(function() {
  let flu = new Disease("Flu");
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

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `http://api.giphy.com/v1/gifs/search?q=disease&limit=1&api_key=${process.env.GIPHY_KEY}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
    $('#showGif').append(`<img src="${body.data.images.original.url}" alt="sick">`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});
