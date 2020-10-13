class UI {
   constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.temp = document.getElementById('w-temp');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.precipitation = document.getElementById('w-precipitation');
      this.wind = document.getElementById('w-wind');
   }

   paint(weather) {
      this.location.textContent = weather.location.name + ', ' + weather.location.region; 
      this.desc.textContent = weather.current.weather_descriptions[0]; 
      this.temp.textContent = weather.current.temperature; 
      this.icon.setAttribute('src', weather.current.weather_icons[0]); 
      this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`; 
      this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike}`; 
      this.precipitation.textContent = `Chance of Precipitation: ${weather.current.precip}`; 
      this.wind.textContent = `Wind Speed: ${weather.current.wind_speed}`; 
   }
}