// Init weather object
const weather = new Weather('New York'); 
// Init UI object
const ui = new UI(); 

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather); 

// Change location event 
document.getElementById('w-change-btn').addEventListener('click', (event) => {
   const location = document.getElementById('location').value;

   // Change location
   weather.changeLocation(location); 

   // Get and display weather for new location
   getWeather(); 

   // Close modal -- jQuery required for this
   $('#locModal').modal('hide'); 
})

function getWeather() {
   weather.getWeather()
      .then(results => {
         // console.log(results)
         ui.paint(results);
      })
      .catch(error => console.log(error)); 
}