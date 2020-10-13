// Init weather object
const weather = new Weather('New York'); 

// Init UI object
const ui = new UI(); 

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather); 

// weather.changeLocation('Miami'); 

function getWeather() {
   weather.getWeather()
      .then(results => {
         // console.log(results)
         ui.paint(results);
      })
      .catch(error => console.log(error)); 
}