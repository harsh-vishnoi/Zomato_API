//Accessing or importing the index.js from its location
const Zomato = require("./index")

//Assign API key to zomatoUserKey
const zomatoUserKey ;

//Example function to get restaurant of all categories.
Zomato.getCategories(zomatoUserKey, "name").then((result) => {
    console.log(result)
}).catch(function(err){
    console.log(err)
})

//Example function to find the Zomato ID and other details for a city.
Zomato.getCities(zomatoUserKey, {q : "Delhi"}).then((result) => {
    console.log(result)
}).catch(function(err){
    console.log(err)
});

//Example function to returns Zomato Restaurant Collections in a City
Zomato.getCollection(zomatoUserKey, 280).then((result) => {
    console.log(result)
}).catch(function(err) {
    console.log(err)
})

//Example function to get a list of all cuisines of restaurants listed in a city
Zomato.getCuisines(zomatoUserKey, 280).then((result) => {
    console.log(result)
}).catch(function(err){
    console.log(err)
})

//Example function to get a list of restaurant types in a city
Zomato.getEstablishment(zomatoUserKey, 280).then((result) => {
    console.log(result)
}).catch(function(err){
    console.log(err)
})

//Example function to get Foodie and Nightlife Index, list of popular cuisines and nearby restaurants around the given coordinates.
Zomato.getGeocode(zomatoUserKey, 40.9006, 174.8860).then((result) => {
    console.log(result)
}).catch(function(err) {
    console.log(err)
})


//Example function to get Foodie Index, Nightlife Index, Top Cuisines and Best rated restaurants in a given location
Zomato.getLocationDetails(zomatoUserKey, 280, "city").then((result) => {
    console.log(result)
}).catch(function(err) {
    console.log(err)
})

//Search for Zomato locations by keyword. Provide coordinates to get better search results
Zomato.getLocation(zomatoUserKey, "delhi").then((result) => {
    console.log(result)
}).catch(function(err){
    console.log(err)
}) 

//Example function to get daily menu using Zomato restaurant ID.
Zomato.getDailyMenu(zomatoUserKey, 18732052).then((result) => {
    console.log(result)
}).catch(function(err) {
    console.log(err)
})

//Example to get detailed restaurant information using Zomato restaurant ID.
Zomato.getRestaurant(zomatoUserKey, 18732052).then((result) => {
    console.log(result)
}).catch(function(err){ 
    console.log(err)
})

//Get reviews of Restaurants
Zomato.getReviews(zomatoUserKey, 18732052).then((result) => {
    console.log(result)
}).catch(function(err){ 
    console.log(err)
})

//Search using filters including establishment, category, location etc.
Zomato.getSearch(zomatoUserKey, {q : "meerut", count : 2}).then((result) => {
    console.log(result)
}).catch(function(err) {
    console.log(err)
})