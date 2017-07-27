# WeatherCastInc

The app is live at https://weathercastincweatherapp.herokuapp.com/

WeatherCastInc is a AngularJS based app with a Rails backend. Some of the libraries and frameworks used are Devise/Rails/AnguluarJS/Chart.js/Ng-Map and more.

The app uses Googles Map API to pull geolocation(lat,long) from addresses submitted and feeds it into DarkSky's API platform to pull weather data.
That data is aggregated and processed to show 6 day forecasts/current weather/historical(last year) charts on the frontend.

The app uses Devise for its authentication system. The app also pulls geolocation from the user on load and returns the weather data to the user.

## Running Locally

```  
git clone git@github.com:mystycs/WeatherCastInc.git # or clone your own fork
cd WeatherCastInc
bundle install
rake db:migrate
```
