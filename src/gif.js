// let promise = new Promise(function(resolve, reject) {
//   let request = new XMLHttpRequest();
//   let url = `http://api.giphy.com/v1/gifs/search?q=disease&api_key=${process.env.GIPHY_KEY}`;
//   request.onload = function() {
//     if (this.status === 200) {
//       resolve(request.response);
//     } else {
//       reject(Error(request.statusText));
//     }
//   }
//   request.open("GET", url, true);
//   request.send();
// });
// export {promise};
