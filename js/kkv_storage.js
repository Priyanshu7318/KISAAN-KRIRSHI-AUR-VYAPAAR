 // Global variables
 let map;
 let allMarkers = [];
 let currentLocationMarker = null;

 const storageLocations = [
     //andhra_pradesh
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "andhra_pradesh",
         lat: 15.91,
         lng: 79.74,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "andhra_pradesh",
         lat: 15.91,
         lng: 79.74,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "andhra_pradesh",
         lat: 15.91,
         lng: 79.74,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //andhra_pradesh_vijayawada
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "andhra_pradesh_vijayawada",
         lat: 16.51, 
         lng: 80.65,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "andhra_pradesh_vijayawada",
         lat: 16.51, 
         lng: 80.65,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "andhra_pradesh_vijayawada",
         lat: 16.51, 
         lng: 80.65,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     
      //andhra_pradesh_visakhapatnam
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "andhra_pradesh_visakhapatnam",
         lat: 17.69, 
         lng: 83.22,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "andhra_pradesh_visakhapatnam",
         lat: 17.69, 
         lng: 83.22,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "andhra_pradesh_visakhapatnam",
         lat: 17.69, 
         lng: 83.22,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //andhra_pradesh_kurnool
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "andhra_pradesh_kurnool",
         lat: 15.83, 
         lng: 78.04,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "andhra_pradesh_kurnool",
         lat: 15.83, 
         lng: 78.04,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "andhra_pradesh_kurnool",
         lat: 15.83, 
         lng: 78.04,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //arunachal_pradesh
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "arunachal_pradesh",
         lat: 27.10, 
         lng: 93.62,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "arunachal_pradesh",
         lat: 27.10, 
         lng: 93.62,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "arunachal_pradesh",
         lat: 27.10, 
         lng: 93.62,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //arunachal_pradesh_pasighat
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "arunachal_pradesh_pasighat",
         lat: 28.07, 
         lng: 95.33,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "arunachal_pradesh_pasighat",
         lat: 28.07, 
         lng: 95.33,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "arunachal_pradesh_pasighat",
         lat: 28.07, 
         lng: 95.33,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //arunachal_pradesh_tezu
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "arunachal_pradesh_tezu",
         lat: 27.92, 
         lng: 96.17,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "arunachal_pradesh_tezu",
         lat: 27.92, 
         lng: 96.17,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "arunachal_pradesh_tezu",
         lat: 27.92, 
         lng: 96.17,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //assam
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "assam",
         lat: 26.14, 
         lng: 91.77,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "assam",
         lat: 26.14, 
         lng: 91.77,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "assam",
         lat: 26.14, 
         lng: 91.77,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //assam_guwahati
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "assam_guwahati",
         lat: 26.14, 
         lng: 91.73, 
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "assam_guwahati",
         lat: 26.14, 
         lng: 91.73, 
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "assam_guwahati",
         lat: 26.14, 
         lng: 91.73,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //assam_silchar
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "assam_silchar",
         lat: 24.83, 
         lng: 92.78,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "assam_silchar",
         lat: 24.83, 
         lng: 92.78,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "assam_silchar",
         lat: 24.83, 
         lng: 92.78,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //bihar
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "bihar",
         lat: 25.60, 
         lng: 85.12,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "bihar",
         lat: 25.60, 
         lng: 85.12,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "bihar",
         lat: 25.60, 
         lng: 85.12,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //bihar_gaya
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "bihar_gaya",
         lat: 24.79, 
         lng: 85.00, 
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "bihar_gaya",
         lat: 24.79, 
         lng: 85.00, 
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "bihar_gaya",
         lat: 24.79, 
         lng: 85.00, 
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //bihar_muzaffarpur
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "bihar_muzaffarpur",
         lat: 26.12, 
         lng: 85.39,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "bihar_muzaffarpur",
         lat: 26.12, 
         lng: 85.39,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "bihar_muzaffarpur",
         lat: 26.12, 
         lng: 85.39,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //bihar_begusarai
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "bihar_begusarai",
         lat: 25.42, 
         lng: 86.13,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "bihar_begusarai",
         lat: 25.42, 
         lng: 86.13,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "bihar_begusarai",
         lat: 25.42, 
         lng: 86.13,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //chhattisgarh
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "chhattisgarh",
         lat: 21.25, 
         lng: 81.63,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "chhattisgarh",
         lat: 21.25, 
         lng: 81.63,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "chhattisgarh",
         lat: 21.25, 
         lng: 81.63,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //chhattisgarh_bilaspur
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "chhattisgarh_bilaspur",
         lat: 22.08, 
         lng: 82.15,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "chhattisgarh_bilaspur",
         lat: 22.08, 
         lng: 82.15,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "chhattisgarh_bilaspur",
         lat: 22.08, 
         lng: 82.15,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //chhattisgarh_durg
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "chhattisgarh_durg",
         lat: 21.19, 
         lng: 81.28,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "chhattisgarh_durg",
         lat: 21.19, 
         lng: 81.28,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "chhattisgarh_durg",
         lat: 21.19, 
         lng: 81.28,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //goa
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "goa",
         lat: 15.50, 
         lng: 73.91,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "goa",
         lat: 15.50, 
         lng: 73.91,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "goa",
         lat: 15.50, 
         lng: 73.91,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //gujarat
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "gujarat",
         lat: 23.02, 
         lng: 72.57,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "gujarat",
         lat: 23.02, 
         lng: 72.57,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "gujarat",
         lat: 23.02, 
         lng: 72.57,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },
     
     //gujarat_ahmedabad
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "gujarat_ahmedabad",
         lat: 23.03, 
         lng: 72.58,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "gujarat_ahmedabad",
         lat: 23.03, 
         lng: 72.58,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "gujarat_ahmedabad",
         lat: 23.03, 
         lng: 72.58,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //gujarat_surat
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "gujarat_surat",
         lat: 21.17, 
         lng: 72.83,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "gujarat_surat",
         lat: 21.17, 
         lng: 72.83,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "gujarat_surat",
         lat: 21.17, 
         lng: 72.83,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //gujarat_vadodara
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "gujarat_vadodara",
         lat: 22.31, 
         lng: 73.18,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "gujarat_vadodara",
         lat: 22.31, 
         lng: 73.18,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "gujarat_vadodara",
         lat: 22.31, 
         lng: 73.18,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //haryana
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "haryana",
         lat: 28.45, 
         lng: 77.02,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "haryana",
         lat: 28.45, 
         lng: 77.02,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "haryana",
         lat: 28.45, 
         lng: 77.02,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //haryana_faridabad
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "haryana_faridabad",
         lat: 28.41, 
         lng: 77.31,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "haryana_faridabad",
         lat: 28.41, 
         lng: 77.31,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "haryana_faridabad",
         lat: 28.41, 
         lng: 77.31,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //haryana_gurugram
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "haryana_gurugram",
         lat: 28.46, 
         lng: 77.03,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "haryana_gurugram",
         lat: 28.46, 
         lng: 77.03,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "haryana_gurugram",
         lat: 28.46, 
         lng: 77.03,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //haryana_karnal
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "haryana_karnal",
         lat: 29.69, 
         lng: 76.99,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "haryana_karnal",
         lat: 29.69, 
         lng: 76.99,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "haryana_karnal",
         lat: 29.69, 
         lng: 76.99,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //himachal_pradesh
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "himachal_pradesh",
         lat: 31.10, 
         lng: 77.17,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "himachal_pradesh",
         lat: 31.10, 
         lng: 77.17,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "himachal_pradesh",
         lat: 31.10, 
         lng: 77.17,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //himachal_pradesh_solan
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "himachal_pradesh_solan",
         lat: 30.91, 
         lng: 77.10,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "himachal_pradesh_solan",
         lat: 30.91, 
         lng: 77.10,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "himachal_pradesh_solan",
         lat: 30.91, 
         lng: 77.10,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //jharkhand
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "jharkhand",
         lat: 23.35, 
         lng: 85.33,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "jharkhand",
         lat: 23.35, 
         lng: 85.33,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "jharkhand",
         lat: 23.35, 
         lng: 85.33,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //jharkhand_jamshedpur
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "jharkhand_jamshedpur",
         lat: 22.80, 
         lng: 86.18,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "jharkhand_jamshedpur",
         lat: 22.80, 
         lng: 86.18,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "jharkhand_jamshedpur",
         lat: 22.80, 
         lng: 86.18,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //jharkhand_dhanbad
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "jharkhand_dhanbad",
         lat: 23.80, 
         lng: 86.43,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "jharkhand_dhanbad",
         lat: 23.80, 
         lng: 86.43,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "jharkhand_dhanbad",
         lat: 23.80, 
         lng: 86.43,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //karnataka
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "karnataka",
         lat: 12.97, 
         lng: 77.59,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "karnataka",
         lat: 12.97, 
         lng: 77.59,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "karnataka",
         lat: 12.97, 
         lng: 77.59,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //karnataka_mysore
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "karnataka_mysore",
         lat: 12.30, 
         lng: 76.64,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "karnataka_mysore",
         lat: 12.30, 
         lng: 76.64,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "karnataka_mysore",
         lat: 12.30, 
         lng: 76.64,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //kerala
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "kerala",
         lat: 8.52, 
         lng: 76.93,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "kerala",
         lat: 8.52, 
         lng: 76.93,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "kerala",
         lat: 8.52, 
         lng: 76.93,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //madhya_pradesh
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "madhya_pradesh",
         lat: 23.25, 
         lng: 77.41,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "madhya_pradesh",
         lat: 23.25, 
         lng: 77.41,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "madhya_pradesh",
         lat: 23.25, 
         lng: 77.41,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //madhya_pradesh_indore
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "madhya_pradesh_indore",
         lat: 22.72, 
         lng: 75.86,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "madhya_pradesh_indore",
         lat: 22.72, 
         lng: 75.86,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "madhya_pradesh_indore",
         lat: 22.72, 
         lng: 75.86,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //madhya_pradesh_gwalior
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "madhya_pradesh_gwalior",
         lat: 26.22, 
         lng: 78.18,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "madhya_pradesh_gwalior",
         lat: 26.22, 
         lng: 78.18,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "madhya_pradesh_gwalior",
         lat: 26.22, 
         lng: 78.18,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //maharashtra
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "maharashtra",
         lat: 19.08, 
         lng: 72.88,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "maharashtra",
         lat: 19.08, 
         lng: 72.88,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "maharashtra",
         lat: 19.08, 
         lng: 72.88,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //maharashtra_pune
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "maharashtra_pune",
         lat: 18.52, 
         lng: 73.86,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "maharashtra_pune",
         lat: 18.52, 
         lng: 73.86,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "maharashtra_pune",
         lat: 18.52, 
         lng: 73.86,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //maharashtra_nagpur
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "maharashtra_nagpur",
         lat: 21.15, 
         lng: 79.08,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "maharashtra_nagpur",
         lat: 21.15, 
         lng: 79.08,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "maharashtra_nagpur",
         lat: 21.15, 
         lng: 79.08,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //maharashtra_nashik
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "maharashtra_nashik",
         lat: 19.99, 
         lng: 73.79,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "maharashtra_nashik",
         lat: 19.99, 
         lng: 73.79,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "maharashtra_nashik",
         lat: 19.99, 
         lng: 73.79,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //manipur
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "manipur",
         lat: 24.81, 
         lng: 93.94,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "manipur",
         lat: 24.81, 
         lng: 93.94,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "manipur",
         lat: 24.81, 
         lng: 93.94,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //meghalaya
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "meghalaya",
         lat: 25.57, 
         lng: 91.88,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "meghalaya",
         lat: 25.57, 
         lng: 91.88,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "meghalaya",
         lat: 25.57, 
         lng: 91.88,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //mizoram
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "mizoram",
         lat: 23.73, 
         lng: 92.72,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "mizoram",
         lat: 23.73, 
         lng: 92.72,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "mizoram",
         lat: 23.73, 
         lng: 92.72,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //nagaland
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "nagaland",
         lat: 25.67, 
         lng: 94.11,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "nagaland",
         lat: 25.67, 
         lng: 94.11,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "nagaland",
         lat: 25.67, 
         lng: 94.11,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //odisha
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "odisha",
         lat: 20.30, 
         lng: 85.83,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "odisha",
         lat: 20.30, 
         lng: 85.83,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "odisha",
         lat: 20.30, 
         lng: 85.83,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //odisha_cuttack
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "odisha_cuttack",
         lat: 20.46, 
         lng: 85.88,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "odisha_cuttack",
         lat: 20.46, 
         lng: 85.88,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "odisha_cuttack",
         lat: 20.46, 
         lng: 85.88,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //odisha_rourkela
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "odisha_rourkela",
         lat: 22.26, 
         lng: 84.85,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "odisha_rourkela",
         lat: 22.26, 
         lng: 84.85,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "odisha_rourkela",
         lat: 22.26, 
         lng: 84.85,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //punjab
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "punjab",
         lat: 30.73, 
         lng: 76.78,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "punjab",
         lat: 30.73, 
         lng: 76.78,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "punjab",
         lat: 30.73, 
         lng: 76.78,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //punjab_amritsar
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "punjab_amritsar",
         lat: 31.63, 
         lng: 74.87,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "punjab_amritsar",
         lat: 31.63, 
         lng: 74.87,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "punjab_amritsar",
         lat: 31.63, 
         lng: 74.87,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //punjab_ludhiana
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "punjab_ludhiana",
         lat: 30.91, 
         lng: 75.85,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "punjab_ludhiana",
         lat: 30.91, 
         lng: 75.85,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "punjab_ludhiana",
         lat: 30.91, 
         lng: 75.85,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //punjab_jalandhar
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "punjab_jalandhar",
         lat: 31.33, 
         lng: 75.58,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "punjab_jalandhar",
         lat: 31.33, 
         lng: 75.58,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "punjab_jalandhar",
         lat: 31.33, 
         lng: 75.58,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     
     //rajasthan
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "rajasthan",
         lat: 26.92, 
         lng: 75.82,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "rajasthan",
         lat: 26.92, 
         lng: 75.82,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "rajasthan",
         lat: 26.92, 
         lng: 75.82,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //rajasthan_kota
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "rajasthan_kota",
         lat: 25.21, 
         lng: 75.86,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "rajasthan_kota",
         lat: 25.21, 
         lng: 75.86,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "rajasthan_kota",
         lat: 25.21, 
         lng: 75.86,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //sikkim
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "sikkim",
         lat: 27.33, 
         lng: 88.61,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "sikkim",
         lat: 27.33, 
         lng: 88.61,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "sikkim",
         lat: 27.33, 
         lng: 88.61,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //tamil_nadu
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "tamil_nadu",
         lat: 13.08, 
         lng: 80.27,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "tamil_nadu",
         lat: 13.08, 
         lng: 80.27,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "tamil_nadu",
         lat: 13.08, 
         lng: 80.27,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //tamil_nadu_coimbatore
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "tamil_nadu_coimbatore",
         lat: 11.02, 
         lng: 76.96,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "tamil_nadu_coimbatore",
         lat: 11.02, 
         lng: 76.96,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "tamil_nadu_coimbatore",
         lat: 11.02, 
         lng: 76.96,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //telangana
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "telangana",
         lat: 17.38, 
         lng: 78.48,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "telangana",
         lat: 17.38, 
         lng: 78.48,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "telangana",
         lat: 17.38, 
         lng: 78.48,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //tripura
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "tripura",
         lat: 23.84, 
         lng: 91.28,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "tripura",
         lat: 23.84, 
         lng: 91.28,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "tripura",
         lat: 23.84, 
         lng: 91.28,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //uttar_pradesh
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "uttar_pradesh",
         lat: 26.85, 
         lng: 80.94,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "uttar_pradesh",
         lat: 26.85, 
         lng: 80.94,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "",
         lat: 26.85, 
         lng: 80.94,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //uttar_pradesh_varanasi
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "uttar_pradesh_varanasi",
         lat: 25.32, 
         lng: 83.00,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "uttar_pradesh_varanasi",
         lat: 25.32, 
         lng: 83.00,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "uttar_pradesh_varanasi",
         lat: 25.32, 
         lng: 83.00,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //uttar_pradesh_kanpur
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "uttar_pradesh_kanpur",
         lat: 26.45, 
         lng: 80.33,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "uttar_pradesh_kanpur",
         lat: 26.45, 
         lng: 80.33,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "uttar_pradesh_kanpur",
         lat: 26.45, 
         lng: 80.33,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //uttar_pradesh_agra
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "uttar_pradesh_agra",
         lat: 27.18, 
         lng: 78.01,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "uttar_pradesh_agra",
         lat: 27.18, 
         lng: 78.01,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "uttar_pradesh_agra",
         lat: 27.18, 
         lng: 78.01,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //uttarakhand
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "uttarakhand",
         lat: 30.33, 
         lng: 78.06,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "uttarakhand",
         lat: 30.33, 
         lng: 78.06,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "uttarakhand",
         lat: 30.33, 
         lng: 78.06,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     
     //uttarakhand_nainital
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "uttarakhand_nainital",
         lat: 29.38, 
         lng: 79.46,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "uttarakhand_nainital",
         lat: 29.38, 
         lng: 79.46,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "uttarakhand_nainital",
         lat: 29.38, 
         lng: 79.46,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //west_bengal
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "west_bengal",
         lat: 22.57, 
         lng: 88.36,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "west_bengal",
         lat: 22.57, 
         lng: 88.36,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "west_bengal",
         lat: 22.57, 
         lng: 88.36,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //west_bengal_siliguri
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "west_bengal_siliguri",
         lat: 26.73, 
         lng: 88.41,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "west_bengal_siliguri",
         lat: 26.73, 
         lng: 88.41,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "west_bengal_siliguri",
         lat: 26.73, 
         lng: 88.41,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //west_bengal_howrah
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "west_bengal_howrah",
         lat: 22.59, 
         lng: 88.26,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "west_bengal_howrah",
         lat: 22.59, 
         lng: 88.26,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "west_bengal_howrah",
         lat: 22.59, 
         lng: 88.26,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //andaman_nicobar
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "andaman_nicobar",
         lat: 11.67, 
         lng: 92.73,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "andaman_nicobar",
         lat: 11.67, 
         lng: 92.73,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "andaman_nicobar",
         lat: 11.67, 
         lng: 92.73,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //chandigarh
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "chandigarh",
         lat: 30.73, 
         lng: 76.78,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "chandigarh",
         lat: 30.73, 
         lng: 76.78,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "chandigarh",
         lat: 30.73, 
         lng: 76.78,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //dadra_nagar_haveli_daman_diu
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "dadra_nagar_haveli_daman_diu",
         lat: 20.40, 
         lng: 72.83,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "dadra_nagar_haveli_daman_diu",
         lat: 20.40, 
         lng: 72.83,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "dadra_nagar_haveli_daman_diu",
         lat: 20.40, 
         lng: 72.83,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //lakshadweep
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "lakshadweep",
         lat: 10.57, 
         lng: 72.64,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "lakshadweep",
         lat: 10.57, 
         lng: 72.64,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "lakshadweep",
         lat: 10.57, 
         lng: 72.64,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //delhi
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "delhi",
         lat: 28.61, 
         lng: 77.23,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "delhi",
         lat: 28.61, 
         lng: 77.23,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "delhi",
         lat: 28.61, 
         lng: 77.23,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //delhi_noida
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "delhi_noida",
         lat: 28.54, 
         lng: 77.39,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "delhi_noida",
         lat: 28.54, 
         lng: 77.39,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "delhi_noida",
         lat: 28.54, 
         lng: 77.39,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //delhi_ghaziabad
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "delhi_ghaziabad",
         lat: 28.67, 
         lng: 77.43,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "delhi_ghaziabad",
         lat: 28.67, 
         lng: 77.43,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "delhi_ghaziabad",
         lat: 28.67, 
         lng: 77.43,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

      //puducherry
      {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "puducherry",
         lat: 11.93, 
         lng: 79.83,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "puducherry",
         lat: 11.93, 
         lng: 79.83,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "puducherry",
         lat: 11.93, 
         lng: 79.83,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     },

     //puducherry_karaikal
     {
         id: 1,
         name: "Green Valley Cold Storage",
         type: "cold",
         produce: ["vegetables", "fruits"],
         location: "puducherry_karaikal",
         lat: 10.93, 
         lng: 79.83,
         price: "₹150/day per kg",
         availability: "available",
         timing: "8:00 AM - 8:00 PM",
         temperature: "2°C to 8°C",
         image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "12km away"
     },
     {
         id: 2,
         name: "Agro Grain Storage",
         type: "dry",
         produce: ["grains"],
         location: "puducherry_karaikal",
         lat: 10.93, 
         lng: 79.83,
         price: "₹80/day per kg",
         availability: "limited",
         timing: "7:00 AM - 9:00 PM",
         humidity: "Humidity Controlled",
         image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "8km away"
     },
     {
         id: 3,
         name: "Farmers Pride Storage",
         type: "mixed",
         produce: ["vegetables", "fruits", "grains"],
         location: "puducherry_karaikal",
         lat: 10.93, 
         lng: 79.83,
         price: "₹120/day per kg",
         availability: "available",
         timing: "6:00 AM - 10:00 PM",
         capacity: "Large",
         image: "https://images.unsplash.com/photo-1571658734028-43a4b113e9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         distance: "15km away"
     }, 
 ];

 const cityCoordinates = {
    "andhra_pradesh": { lat: 15.91, lng: 79.74 }, // Amaravati (de facto)
    "andhra_pradesh_vijayawada": { lat: 16.51, lng: 80.65 }, // Vijayawada
    "andhra_pradesh_visakhapatnam": { lat: 17.69, lng: 83.22 }, // Visakhapatnam
    "andhra_pradesh_kurnool": { lat: 15.83, lng: 78.04 }, // Kurnool (new)
    "arunachal_pradesh": { lat: 27.10, lng: 93.62 }, // Itanagar
    "arunachal_pradesh_pasighat": { lat: 28.07, lng: 95.33 }, // Pasighat (new)
    "arunachal_pradesh_tezu": { lat: 27.92, lng: 96.17 }, // Tezu (new)
    "assam": { lat: 26.14, lng: 91.77 }, // Dispur
    "assam_guwahati": { lat: 26.14, lng: 91.73 }, // Guwahati
    "assam_silchar": { lat: 24.83, lng: 92.78 }, // Silchar (new)
    "bihar": { lat: 25.60, lng: 85.12 }, // Patna
    "bihar_gaya": { lat: 24.79, lng: 85.00 }, // Gaya
    "bihar_muzaffarpur": { lat: 26.12, lng: 85.39 }, // Muzaffarpur (new)
    "bihar_begusarai": { lat: 25.42, lng: 86.13 }, // Begusarai (new)
    "chhattisgarh": { lat: 21.25, lng: 81.63 }, // Raipur
    "chhattisgarh_bilaspur": { lat: 22.08, lng: 82.15 }, // Bilaspur
    "chhattisgarh_durg": { lat: 21.19, lng: 81.28 }, // Durg (new)
    "goa": { lat: 15.50, lng: 73.91 }, // Panaji
    "gujarat": { lat: 23.02, lng: 72.57 }, // Gandhinagar
    "gujarat_ahmedabad": { lat: 23.03, lng: 72.58 }, // Ahmedabad
    "gujarat_surat": { lat: 21.17, lng: 72.83 }, // Surat
    "gujarat_vadodara": { lat: 22.31, lng: 73.18 }, // Vadodara (new)
    "haryana": { lat: 28.45, lng: 77.02 }, // Chandigarh (shared with Punjab)
    "haryana_faridabad": { lat: 28.41, lng: 77.31 }, // Faridabad
    "haryana_gurugram": { lat: 28.46, lng: 77.03 }, // Gurugram (new)
    "haryana_karnal": { lat: 29.69, lng: 76.99 }, // Karnal (new)
    "himachal_pradesh": { lat: 31.10, lng: 77.17 }, // Shimla
    "himachal_pradesh_solan": { lat: 30.91, lng: 77.10 }, // Solan (new)
    "jharkhand": { lat: 23.35, lng: 85.33 }, // Ranchi
    "jharkhand_jamshedpur": { lat: 22.80, lng: 86.18 }, // Jamshedpur
    "jharkhand_dhanbad": { lat: 23.80, lng: 86.43 }, // Dhanbad (new)
    "karnataka": { lat: 12.97, lng: 77.59 }, // Bangalore
    "karnataka_mysore": { lat: 12.30, lng: 76.64 }, // Mysore
    "kerala": { lat: 8.52, lng: 76.93 }, // Thiruvananthapuram
    "madhya_pradesh": { lat: 23.25, lng: 77.41 }, // Bhopal
    "madhya_pradesh_indore": { lat: 22.72, lng: 75.86 }, // Indore
    "madhya_pradesh_gwalior": { lat: 26.22, lng: 78.18 }, // Gwalior (new)
    "maharashtra": { lat: 19.08, lng: 72.88 }, // Mumbai
    "maharashtra_pune": { lat: 18.52, lng: 73.86 }, // Pune
    "maharashtra_nagpur": { lat: 21.15, lng: 79.08 }, // Nagpur
    "maharashtra_nashik": { lat: 19.99, lng: 73.79 }, // Nashik (new)
    "manipur": { lat: 24.81, lng: 93.94 }, // Imphal
    "meghalaya": { lat: 25.57, lng: 91.88 }, // Shillong
    "mizoram": { lat: 23.73, lng: 92.72 }, // Aizawl
    "nagaland": { lat: 25.67, lng: 94.11 }, // Kohima
    "odisha": { lat: 20.30, lng: 85.83 }, // Bhubaneswar
    "odisha_cuttack": { lat: 20.46, lng: 85.88 }, // Cuttack
    "odisha_rourkela": { lat: 22.26, lng: 84.85 }, // Rourkela (new)
    "punjab": { lat: 30.73, lng: 76.78 }, // Chandigarh (shared with Haryana)
    "punjab_amritsar": { lat: 31.63, lng: 74.87 }, // Amritsar
    "punjab_ludhiana": { lat: 30.91, lng: 75.85 }, // Ludhiana (new)
    "punjab_jalandhar": { lat: 31.33, lng: 75.58 }, // Jalandhar (new)
    "rajasthan": { lat: 26.92, lng: 75.82 }, // Jaipur
    "rajasthan_kota": { lat: 25.21, lng: 75.86 }, // Kota (new)
    "sikkim": { lat: 27.33, lng: 88.61 }, // Gangtok
    "tamil_nadu": { lat: 13.08, lng: 80.27 }, // Chennai
    "tamil_nadu_coimbatore": { lat: 11.02, lng: 76.96 }, // Coimbatore
    "telangana": { lat: 17.38, lng: 78.48 }, // Hyderabad
    "tripura": { lat: 23.84, lng: 91.28 }, // Agartala
    "uttar_pradesh": { lat: 26.85, lng: 80.94 }, // Lucknow
    "uttar_pradesh_varanasi": { lat: 25.32, lng: 83.00 }, // Varanasi
    "uttar_pradesh_kanpur": { lat: 26.45, lng: 80.33 }, // Kanpur (new)
    "uttar_pradesh_agra": { lat: 27.18, lng: 78.01 }, // Agra (new)
    "uttarakhand": { lat: 30.33, lng: 78.06 }, // Dehradun
    "uttarakhand_nainital": { lat: 29.38, lng: 79.46 }, // Nainital (new)
    "west_bengal": { lat: 22.57, lng: 88.36 }, // Kolkata
    "west_bengal_siliguri": { lat: 26.73, lng: 88.41 }, // Siliguri (new)
    "west_bengal_howrah": { lat: 22.59, lng: 88.26 }, // Howrah (new)
    "andaman_nicobar": { lat: 11.67, lng: 92.73 }, // Port Blair
    "chandigarh": { lat: 30.73, lng: 76.78 }, // Chandigarh (Union Territory)
    "dadra_nagar_haveli_daman_diu": { lat: 20.40, lng: 72.83 }, // Daman
    "lakshadweep": { lat: 10.57, lng: 72.64 }, // Kavaratti
    "delhi": { lat: 28.61, lng: 77.23 }, // New Delhi (Union Territory)
    "delhi_noida": { lat: 28.54, lng: 77.39 }, // Noida
    "delhi_ghaziabad": { lat: 28.67, lng: 77.43 }, // Ghaziabad (new)
    "puducherry": { lat: 11.93, lng: 79.83 }, // Puducherry
    "puducherry_karaikal": { lat: 10.93, lng: 79.83 } // Karaikal (new)
    // Add more coordinates as needed...
};

 // Initialize the map
 document.addEventListener('DOMContentLoaded', function() {
    map = L.map('storageMap').setView([20.5937, 78.9629], 5); // Center of India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    createMarkers(storageLocations);

    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSearch();
    });

    const locationInput = document.getElementById('location');
    const suggestionsList = document.getElementById('suggestionsList');

    locationInput.addEventListener('input', function() {
        const input = this.value.trim().toLowerCase();
        if (input.length > 1) {
            showSuggestions(input);
        } else {
            suggestionsList.style.display = 'none';
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target !== locationInput) {
            suggestionsList.style.display = 'none';
        }
    });
});

// Show location suggestions
function showSuggestions(input) {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';

    const matchingCities = Object.keys(cityCoordinates).filter(city => 
        city.toLowerCase().includes(input)
    );

    if (matchingCities.length > 0) {
        matchingCities.forEach(city => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = city.charAt(0).toUpperCase() + city.slice(1);
            suggestionItem.addEventListener('click', function() {
                document.getElementById('location').value = this.textContent;
                suggestionsList.style.display = 'none';
                handleSearch();
            });
            suggestionsList.appendChild(suggestionItem);
        });
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
}

 // Create markers for storage locations
 function createMarkers(locations) {
    clearMarkers();

    locations.forEach(storage => {
        let icon;
        if (storage.type === 'cold') {
            icon = createCustomIcon('#2196F3', 'fa-snowflake');
        } else if (storage.type === 'dry') {
            icon = createCustomIcon('#FF9800', 'fa-box-open');
        } else {
            icon = createCustomIcon('#9C27B0', 'fa-warehouse');
        }

        const marker = L.marker([storage.lat, storage.lng], { icon: icon }).addTo(map);

        let produceList = storage.produce.map(item => {
            return `<li>${item.charAt(0).toUpperCase() + item.slice(1)}</li>`;
        }).join('');

        let detailsHtml = `
            <div>
                <h3>${storage.name}</h3>
                <p><strong>Location:</strong> ${storage.location}</p>
                <p><strong>Type:</strong> ${storage.type.charAt(0).toUpperCase() + storage.type.slice(1)}</p>
                <p><strong>Produces:</strong><ul>${produceList}</ul></p>
                <p><strong>Price:</strong> ${storage.price}</p>
                <p><strong>Timing:</strong> ${storage.timing}</p>
                ${storage.temperature ? `<p><strong>Temperature:</strong> ${storage.temperature}</p>` : ''}
                ${storage.humidity ? `<p><strong>Humidity:</strong> ${storage.humidity}</p>` : ''}
                ${storage.capacity ? `<p><strong>Capacity:</strong> ${storage.capacity}</p>` : ''}
                <p><strong>Availability:</strong> 
                    <span style="color: ${storage.availability === 'available' ? '#388E3C' : 
                                  storage.availability === 'limited' ? '#FF8F00' : '#f44336'};">
                        ${storage.availability.charAt(0).toUpperCase() + storage.availability.slice(1)}
                    </span>
                </p>
                <button class="book-btn" onclick="bookStorage(${storage.id})">Book Now</button>
            </div>
        `;

        marker.bindPopup(detailsHtml);
        marker.storageData = storage;
        allMarkers.push(marker);
    });

    if (locations.length > 0) {
        const group = new L.featureGroup(allMarkers);
        map.fitBounds(group.getBounds().pad(0.2));
    }
}

// Create custom icon for markers
function createCustomIcon(color, iconClass) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<i class="fas ${iconClass}" style="color: ${color}; font-size: 18px; background: white; border-radius: 50%; padding: 5px;"></i>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });
}

// Clear all existing markers from the map
function clearMarkers() {
    allMarkers.forEach(marker => map.removeLayer(marker));
    allMarkers = [];
}

// Handle search form submission
function handleSearch() {
    const locationInput = document.getElementById('location').value.trim().toLowerCase();
    const storageType = document.getElementById('storage-type').value;
    const produceType = document.getElementById('produce-type').value;

    if (currentLocationMarker) {
        map.removeLayer(currentLocationMarker);
        currentLocationMarker = null;
    }

    if (locationInput && cityCoordinates[locationInput]) {
        const city = cityCoordinates[locationInput];
        map.setView([city.lat, city.lng], 12);

        currentLocationMarker = L.marker([city.lat, city.lng], {
            icon: createCustomIcon('#4CAF50', 'fa-map-marker-alt')
        }).addTo(map);
        currentLocationMarker.bindPopup(`<b>${locationInput.charAt(0).toUpperCase() + locationInput.slice(1)}</b>`).openPopup();
    } else if (locationInput) {
        map.setView([20.5937, 78.9629], 5);
    }

    const filteredLocations = storageLocations.filter(storage => {
        let matches = true;

        if (locationInput && !storage.location.toLowerCase().includes(locationInput)) {
            matches = false;
        }

        if (storageType && storage.type !== storageType) {
            matches = false;
        }

        if (produceType && !storage.produce.includes(produceType)) {
            matches = false;
        }

        return matches;
    });

    createMarkers(filteredLocations);
}

// Booking function (placeholder)
window.bookStorage = function(id) {
    const storage = storageLocations.find(s => s.id === id);
    if (storage) {
        alert(`Booking confirmed for ${storage.name}!\nPrice: ${storage.price}\nTiming: ${storage.timing}`);
        // Here you can add actual booking logic (e.g., redirect to a booking form or API call)
    }
};
// Header Scroll Effect
window.addEventListener('scroll', () => {
const header = document.querySelector('.header');
if(window.scrollY > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting) {
    entry.target.classList.add('animate-pop-in');
}
});
});

document.querySelectorAll('.service-card').forEach((el) => {
observer.observe(el);
});