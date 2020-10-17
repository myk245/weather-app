const apiKey = config.API_KEY; 

class Weather {
   constructor(location) {
      this.location = location; 
   }

   async getWeather() {
      const response = await fetch(`http://api.weatherstack.com/current?units=f&access_key=${apiKey}&query=${this.location}`); 
   
      const responseData = await response.json(); 
      return responseData; 
   }

   // Change location
   changeLocation(location) {
      this.location = location; 
   }
}