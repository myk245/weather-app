class Storage {
   constructor() {
      this.location; 
      this.defaultLocation = 'New York';
   }

   getLocationData() {
      if (localStorage.getItem('location') === null) {
         this.location = this.defaultLocation;
      } else {
         this.location = localStorage.getItem('location'); 
      }

      return {
         location: this.location
      }
   }

   setLocationData(location) {
      localStorage.setItem('location', location); 
   }

}