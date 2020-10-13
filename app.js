// Init weather object
const weather = new Weather('New York'); 

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather); 

// weather.changeLocation('Miami'); 

function getWeather() {
   weather.getWeather()
      .then(results => {
         console.log(results)
      })
      .catch(error => console.log(error))
}