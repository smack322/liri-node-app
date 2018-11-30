require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var moment = require("moment");
moment().format();

//Add the code required to import the keys.js file and store it in a variable.
var keysRequired = require("./keys.js");
var spotify = new Spotify(keysRequired.spotify);

// set API keys
var omdbApiKey = "trilogy";

var command = process.argv[2]; //used for the commands for each API
var searchInfo = process.argv[3]; // used for the band, movie title, or song title

//conditional statement to search the bands in town API if concert-this appears followed by a string (band / artist)
if (command === "concert-this" && searchInfo !== "") {
//axios API call to bands in town and log statements on relevant data
    axios 
    .get("https://rest.bandsintown.com/artists/" + searchInfo + "/events?app_id=codingbootcamp")
    .then(function(response) {
        console.log("Venue Name: " + response.data[0].venue.name);
        console.log("City: " + response.data[0].venue.city);
        var dateTime = response.data[0].datetime;
        var conversion = "Date: " + moment(dateTime).format('MM/DD/YYYY');
        console.log(conversion);
        console.log("================================================================================");

    })
    // if the promoise does not return, log the error(s)
    .catch(function(error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    });

}

//if the user issues the spotify-this-song command with a string (song)
else if (command === "spotify-this-song" && searchInfo) {
    //search the Spotify API for the song, artist, album, and spotify link to the song
    spotify
    .search({ type: 'track', query: searchInfo, limit: 1 })
    .then(function(response) {
    //   console.log(response);
    console.log("Song: " + response.tracks.items[0].name);
    console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
    console.log("Album: " + response.tracks.items[0].album.name);
    console.log("Spotify URL: " + response.tracks.items[0].album.artists[0].external_urls.spotify);
    console.log("================================================================================");
    })
    .catch(function(err) {
      console.log(err);
    });
}
// if an empty string is added after the spotify-this-song command then automatically search for The Sign
else if (command === "spotify-this-song" && !searchInfo) {
    searchInfo = "The Sign";
    //search the Spotify API for the song, artist, album, and spotify link to the song
    spotify
    .search({ type: 'track', query: searchInfo, limit: 1 })
    .then(function(response) {
    console.log("Song: " + response.tracks.items[0].name);
    console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
    console.log("Album: " + response.tracks.items[0].album.name);
    console.log("Spotify URL: " + response.tracks.items[0].album.artists[0].external_urls.spotify);
    console.log("================================================================================");
    
    })
    .catch(function(err) {
      console.log(err);
    });
}

// if the do-what-it-says command is entered, read from the random.txt file and run the command to call the spotify API
else if (command === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        console.log(data);
        var adjustString = data.split(",");
        console.log(adjustString);

        spotify
        .search({ type: 'track', query: adjustString[1]})
        .then(function(response) {
          console.log("Song: " + response.tracks.items[0].name);
          console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
          console.log("Album: " + response.tracks.items[0].album.name);
          console.log("Spotify URL: " + response.tracks.items[0].album.artists[0].external_urls.spotify);
          console.log("================================================================================");
          
        })
        .catch(function(err) {
          console.log(err);
        });
    });

}

//if the command is movie-this with a valid string search the omdb API for details on the movie
else if (command === "movie-this" && searchInfo) {

    axios
    .get("http://www.omdbapi.com/?t=" + searchInfo + "&y=&plot=short&apikey=" + omdbApiKey)
    .then(function(response){
      //   console.log(response.data);
        console.log("Title: " + response.data.Title);
        console.log("Opening Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Score: " + response.data.Ratings[0].Value);
        console.log("Country Produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("================================================================================");
    })
    .catch(function(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
  
    });

}

//if the movie-this command is issued with no string, default search Mr. Nobody and log the relevant movie details
else if (command === "movie-this" && !searchInfo) {
    searchInfo = "Mr. Nobody";
    axios
    .get("http://www.omdbapi.com/?t=" + searchInfo + "&y=&plot=short&apikey=" + omdbApiKey)
    .then(function(response){
      console.log("Title: " + response.data.Title);
      console.log("Opening Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Score: " + response.data.Ratings[0].Value);
      console.log("Country Produced: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("================================================================================");
    })
    .catch(function(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
  
    });
}





