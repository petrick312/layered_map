// console.log(data)

// Define arrays to hold the created markers.
let retailerMarkers = [];
let cultivatorMarkers = [];
let manufacturerMarkers = [];
let courierMarkers = [];
let operatorMarkers = [];

// Custom icon details for retailers 
let retailIcon = L.icon({
  iconUrl: "static/img/money.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for cultivators 
let cultivateIcon = L.icon({
  iconUrl: "static/img/leaf.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for manufacturers 
let manufacturerIcon = L.icon({
  iconUrl: "static/img/beaker.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for couriers 
let courierIcon = L.icon({
  iconUrl: "static/img/bike.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for delivery operators
let operatorIcon = L.icon({
  iconUrl: "static/img/truck.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

  // loop through data.js to get business data for mapping
  for (let i = 0; i < data.length; i++) {

    // Leaflet will not plot ANY data if latitude and/or longitute coordinates are blank, therefore mapping only data that has coordinates
    if (data[i].latitude) {
      let business = data[i];

      // Creating a split of the license start date field, so that it will look nicer in map popup 
      let dateTime = business.LIC_START_DATE.split("GMT");
      //console.log(dateTime[0]);

      // Look in data for businesses with a license type of Marijuana Retailer
      if (business.license_type === "Marijuana Retailer") {
        
        // Create marker based on lat/long
        let retailerMarker = L.marker([business.latitude, business.longitude], {
          
          // Use custom icon data
          icon: retailIcon

        // Popup data displays Buiness Name, Address, License Number and date License took effect
        }).bindPopup("<strong>Name: </strong>" + business.business_name +
        "<br><strong>Location: </strong>" + business.establishment_city + ", MA " + business.establishment_zipcode + 
        "<br><strong>License Number: </strong>" + business.license_number + 
        "<br><strong>License Status: </strong>" + business.lic_status + 
        "<br><strong>License Start Date: </strong>" + dateTime[0]);
        
        // Push marker data for retailers to array
        retailerMarkers.push(retailerMarker);
      };


      // Look in data for businesses with a license type of Marijuana Cultivator
      if (business.license_type === "Marijuana Cultivator") {
        
        // Create marker based on lat/long
        let cultivatorMarker = L.marker([business.latitude, business.longitude], {
           
          // Use custom icon data
          icon: cultivateIcon
        
        // Popup data displays Buiness Name, Address, License Number and date License took effect
        }).bindPopup("<strong>Name: </strong>" + business.business_name +
        "<br><strong>Location: </strong>" + business.establishment_city + ", MA " + business.establishment_zipcode + 
        "<br><strong>License Number: </strong>" + business.license_number + 
        "<br><strong>License Status: </strong>" + business.lic_status + 
        "<br><strong>License Start Date: </strong>" + dateTime[0]);

        // Push marker data for retailers to array
        cultivatorMarkers.push(cultivatorMarker);
      };


      // Look in data for businesses with a license type of Marijuana Product Manufacturer
      if (business.license_type === "Marijuana Product Manufacturer") {
        
        // Create marker based on lat/long
        let manufacturerMarker = L.marker([business.latitude, business.longitude], {
        
          // Use custom icon data
          icon: manufacturerIcon
        
        // Popup data displays Buiness Name, Address, License Number and date License took effect
        }).bindPopup("<strong>Name: </strong>" + business.business_name +
        "<br><strong>Location: </strong>" + business.establishment_city + ", MA " + business.establishment_zipcode + 
        "<br><strong>License Number: </strong>" + business.license_number + 
        "<br><strong>License Status: </strong>" + business.lic_status + 
        "<br><strong>License Start Date: </strong>" + dateTime[0]);
        
        // Push marker data for retailers to array
        manufacturerMarkers.push(manufacturerMarker);
      };


      // Look in data for businesses with a license type of Marijuana Courier Pre-Certification
      if (business.license_type === "Marijuana Courier Pre-Certification") {
        
        // Create marker based on lat/long
        let courierMarker = L.marker([business.latitude, business.longitude], {
        
          // Use custom icon data
          icon: courierIcon
        
        // Popup data displays Buiness Name, Address, License Number and date License took effect
        }).bindPopup("<strong>Name: </strong>" + business.business_name +
        "<br><strong>Location: </strong>" + business.establishment_city + ", MA " + business.establishment_zipcode + 
        "<br><strong>License Number: </strong>" + business.license_number + 
        "<br><strong>License Status: </strong>" + business.lic_status + 
        "<br><strong>License Start Date: </strong>" + dateTime[0]);
        
        // Push marker data for retailers to array
        courierMarkers.push(courierMarker);
      };
   
    
      // Look in data for businesses with a license type of Marijuana Delivery Operator Pre-Certification
      if (business.license_type === "Marijuana Delivery Operator Pre-Certification") {
       
        // Create marker based on lat/long
        let operatorMarker = L.marker([business.latitude, business.longitude], {
          
          // Use custom icon data
          icon: operatorIcon
       
        // Popup data displays Buiness Name, Address, License Number and date License took effect
        }).bindPopup("<strong>Name: </strong>" + business.business_name +
        "<br><strong>Location: </strong>" + business.establishment_city + ", MA " + business.establishment_zipcode + 
        "<br><strong>License Number: </strong>" + business.license_number + 
        "<br><strong>License Status: </strong>" + business.lic_status + 
        "<br><strong>License Start Date: </strong>" + dateTime[0]);
       
        // Push marker data for retailers to array
        operatorMarkers.push(operatorMarker);
      };

    }};


// Create the tile layer that will be the background of our map.
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// Create separate layer groups for each license type 
let retailers = L.layerGroup(retailerMarkers);
let cultivators = L.layerGroup(cultivatorMarkers);
let manufacturers = L.layerGroup(manufacturerMarkers);
let couriers = L.layerGroup(courierMarkers);
let operators = L.layerGroup(operatorMarkers);


// Create a baseMaps object to hold the streetmap layer.
let baseMaps = {
  Street: streetmap
};


// Create an overlayMaps object to hold the additional layers.
let overlayMaps = {
  "Marijuana Retailers": retailers,
  "Marijuana Cultivators": cultivators, 
  "Marijuana Product Manufacturers": manufacturers
  // currently no data in the below 2 categories, but data may change in the future
  // "Marijuana Couriers": couriers, 
  // "Marijuana Delivery Operators": operators
  };

  
// Create the map with our layers.
let myMap = L.map("map-id", {
  center: [42.1734, -72.12641],
  zoom: 9,
  // layers: [streetmap, retailers, cultivators, manufacturers, couriers, operators]
  // only displaying mayers with data 
  layers: [streetmap, retailers, cultivators, manufacturers]

});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);