# liri-node-app

Use a version of this to pull API queries from OMDB

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);

Need to get a response for API id request from Bands In Town. Here's that website.

https://www.artists.bandsintown.com/bandsintown-api

Spotify
<script src="https://sdk.scdn.co/spotify-player.js"></script>
https://developer.spotify.com/documentation/web-playback-sdk/reference/

I had a lot of syntax "problems" in the code snippets, that I fixed. Without the Spotify API this isn't running the app. I got a work around the lack of API key, only to hit more syntax error. Node is not recognizing a web address.