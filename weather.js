class Weather {
   constructor(location) {
      this.apiKey = '1f4468c977bea34e30b2f625ae0171fc'; 
      this.location = location; 
   }

   async getWeather() {
      const response = await fetch(`http://api.weatherstack.com/current?units=f&access_key=${this.apiKey}&query=${this.location}`); 
   
      const responseData = await response.json(); 
      return responseData; 
   }

   // Change location
   changeLocation(location) {
      this.location = location; 
   }
}