require("dotenv").config();

  var keys = require("./keys.js");

  var spotify = (keys.spotify);
 
 var nodeApi = spotify (https,www.npmjs.com/package/node-spotify-api);


  var movieName = process.argv[2];

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  
  console.log(queryUrl);
  
  axios.get(queryUrl).then(
    function(response) {
      console.log("Release Year: " + response.data.Year);
    }
  );

node .liri.js = movie-this ('Matrix');

node .liri.js = spotify-this-song ('Smells like Teen Spirit');

node .liri.js = concert-this ('Eric Church');

node .liri.js = 'do-what-it-says';