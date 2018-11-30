# liri-node-app

What the project does?
The Liri Chat Bot is a small node based app that makes axios calls out to OMDB, Bands In Town and uses the Spotify API to query movies, concert details and song / artist data.

The program is run by the terminal through the following...
node liri.js concert-this <artist/band name here>
node liri.js spotify-this-song '<song name here>'
node liri.js movie-this '<movie name here>'  

Why the project is useful?

The chat bot provides a quick means for learning basics about your favorite movies, songs or where your favorite bands will be playing next. Entering in these simple commands, making a call out to the various APIs and getting the data back in seconds is a pretty quick way to learn and is pretty simple / user friendly. 

Example output text from the terminal:

mac$ node liri concert-this "John Mayer"
Venue Name: Controlled Danger
City: Las Vegas
Date: 12/30/2018
================================================================================
Scotts-MacBook-Pro:js scottmcanally$ node liri spotify-this-song "Despacito"
Song: Despacito - Remix
Artist: Luis Fonsi
Album: Despacito Feat. Justin Bieber (Remix)
Spotify URL: https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG
================================================================================
mac$ node liri spotify-this-song 
Song: Sign of the Times
Artist: Harry Styles
Album: Harry Styles
Spotify URL: https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3
================================================================================
mac$ node liri do-what-it-says
spotify-this-song,"I Want it That Way"
[ 'spotify-this-song', '"I Want it That Way"' ]
Song: I Want It That Way
Artist: Backstreet Boys
Album: The Hits--Chapter One
Spotify URL: https://open.spotify.com/artist/5rSXSAkZ67PYJSvpUpkOr7
================================================================================
mac$ node liri movie-this "Step Brothers"
Title: Step Brothers
Opening Year: 2008
IMDB Rating: 6.9
Rotten Tomatoes Score: 6.9/10
Country Produced: USA
Language: English, Spanish
Plot: Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.
Actors: Will Ferrell, John C. Reilly, Mary Steenburgen, Richard Jenkins
================================================================================
mac$ node liri movie-this 
Title: Mr. Nobody
Opening Year: 2009
IMDB Rating: 7.9
Rotten Tomatoes Score: 7.9/10
Country Produced: Belgium, Germany, Canada, France, USA, UK
Language: English, Mohawk
Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.
Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham
================================================================================

