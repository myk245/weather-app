class Weather {
   constructor(city, state) {
      this.apiKey = '1f4468c977bea34e30b2f625ae0171fc';
      this.city = city; 
      this.state = state; 
   }

   async getWeather() {
      const response = await fetch(`http://api.weatherstack.com/`)
   }
}