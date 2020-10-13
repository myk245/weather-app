const apiKey = config.API_KEY; 

class Weather {
   constructor(location) {
      this.location = location; 
   }

   async getWeather() {
      const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${this.location}`); 
   
      const responseData = await response.json(); 
      return responseData.current; 
   }

   // Change location
   changeLocation(location) {
      this.location = location; 
   }
}