//Accessing or importing the index.js from its location
const Zomato = require("./index")

//Assign API key to zomatoUserKey
const zomatoUserKey ;

//Example function to get restaurant of all categories.
Zomato.getCategories("892d2bb4eeef7402e4e1c8d7ca462fb7", "name").then((result) => {
    console.log(result)
}).catch(function(err){
    console.log(err)
})

//Example function to Geocode given latitudes and longitudes.
Zomato.getGeocode(zomatoUserKey, 40.9006, 174.8860).then((result) => {
    console.log(result)
}).catch(function(err) {
    console.log(err)
})

// Zomato.getEstablishment("892d2bb4eeef7402e4e1c8d7ca462fb7", 280).then((result) => {
//     console.log(result)
// }).catch(function(err){
//     console.log(err)
// })

// Zomato.getDailyMenu(zomatoUserKey, 18732052).then((result) => {
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// })

// Zomato.getRestaurant(zomatoUserKey, 18732052).then((result) => {
//     console.log(result)
// }).catch(function(err){ 
//     console.log(err)
// })

// Zomato.getReviews(zomatoUserKey, 18732052).then((result) => {
//     console.log(result)
// }).catch(function(err){ 
//     console.log(err)
// })

// getSearch(zomatoUserKey, {q : "meerut", count : 2}).then((result) => {
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// })



// Zomato.getCities(ZomatoKey, {q : "Delhi"}).then((result) => {
//     console.log(result)
// }).catch(function(err){
//     console.log(err)
// });

// Zomato.getCollection(ZomatoKey, 280).then((result) => {
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// })

// Zomato.getCuisines(ZomatoKey, 280).then((result) => {
//     console.log(result)
// }).catch(function(err){
//     console.log(err)
// })

// Zomato.getLocation(ZomatoKey, "delhi").then((result) => {
//     console.log(result)
// }).catch(function(err){
//     console.log(err)
// }) 

// Zomato.getLocationDetails(ZomatoKey, 280, "city").then((result) => {
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// })

// Zomato.getSearch(ZomatoKey, {q : "meerut", count : 2}).then((result) => {
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// })