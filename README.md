
# Zomato-developers

Zomato APIs give you access to the freshest and most exhaustive information for over 1.5 million restaurants across 10,000 cities globally. With the Zomato APIs, you can :
 * Search for restaurants by name, cuisine, or location
 * Display detailed information including ratings, location and cuisine
 * Use the Zomato Foodie Index to show great areas to dine in a city
  

# Prerequisites

 + ### Credentials
    + Go [here](https://developers.zomato.com/) and create your API key.

**Basic:** Get free and instant access to restaurant information and search APIs (up to 1000 calls/day). API key generated is neccessary and will be required to accesss zomato APIs.
  

# Getting started

Install using npm :

	npm i zomato-developers --save
	
# Usage

A seperate example has been added in the repository displaying usage of the package.

### Zomato.getCategories
Get a list of categories. List of all restaurants categorized under a particular restaurant type can be obtained using /Search API with Category ID as inputs
```javascript
Zomato.getCategories(API_key, Type).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
})
```
 __Type__  :  Type could be *id* ,*name* or *undefined*.

### Zomato.getCities
Find the Zomato ID and other details for a city . You can obtain the Zomato City ID in one of the following ways:  

1.  City Name in the Search Query - Returns list of cities matching the query
2.  Using coordinates - Identifies the city details based on the coordinates of any location inside a city

If you already know the Zomato City ID, this API can be used to get other details of the city.
```javascript
Zomato.getCities(API_key, Data).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
});
```
 __Data__  :  Data is an object having *q*, *lat*, *lon*, *city_ids* and *count*. Input it in same order.

### Zomato.getCollection
Returns Zomato Restaurant Collections in a City. The location/City input can be provided in the following ways -  

1.  Using Zomato City ID
2.  Using coordinates of any location within a city

List of all restaurants listed in any particular Zomato Collection can be obtained using the '/search' API with Collection ID and Zomato City ID as the input
```javascript
Zomato.getCollection(ZomatoKey, city_id, Data).then((result) => {
	console.log(result)
}).catch(function(err) {
	console.log(err)
})
```
__Data__  :  Data is an object having *city_id*, *lat*, *lon* and *count*. Pass parameter in same order.

### Zomato.getCuisines
Get a list of all cuisines of restaurants listed in a city. The location/city input can be provided in the following ways -  

1.  Using Zomato City ID
2.  Using coordinates of any location within a city

List of all restaurants serving a particular cuisine can be obtained using '/search' API with cuisine ID and location details
```javascript
Zomato.getCuisines(API_Key, city_id, Data).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
})
```
 __Data__  :  Data is an object having *city_id*, *lat* and *lon* . Pass parameter in same order.

### Zomato.getEstablishment

Get a list of restaurant types in a city. The location/City input can be provided in the following ways -  

1.  Using Zomato City ID
2.  Using coordinates of any location within a city

List of all restaurants categorized under a particular restaurant type can obtained using /Search API with Establishment ID and location details as inputs
```javascript
Zomato.getEstablishment(API_Key, city_id, Data).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
})
``` 
 __Data__  :  Data is an object having *city_id*, *lat* and *lon* . Pass parameter in same order.
 
### Zomato.getGeocode
Get Foodie and Nightlife Index, list of popular cuisines and nearby restaurants around the given coordinates
```javascript
Zomato.getGeocode(zomatoUserKey, lat, lon).then((result) => {
	console.log(result)
}).catch(function(err) {
	console.log(err)
})
``` 

### Zomato.getLocationDetails
Get Foodie Index, Nightlife Index, Top Cuisines and Best rated restaurants in a given location
```javascript
Zomato.getLocationDetails(API_Key, city_id, LocationType).then((result) => {
	console.log(result)
}).catch(function(err) {
	console.log(err)
})
```

### Zomato.getLocation

Search for Zomato locations by keyword. Provide coordinates to get better search results
```javascript
Zomato.getLocation(API_Key, Query, Data).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
})
```
 __Data__  :  Data is an object having *lat*, *lon* and *count* . Pass parameter in same order.
 
### Zomato.getDailyMenu

Get daily menu using Zomato restaurant ID
```javascript
Zomato.getDailyMenu(API_Key, Res_ID).then((result) => {
	console.log(result)
}).catch(function(err) {
	console.log(err)
})
```

### Zomato.getRestaurant
Get detailed restaurant information using Zomato restaurant ID. Partner Access is required to access photos and reviews.
```javascript
Zomato.getRestaurant(API_Key, Res_ID).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
})
```

### Zomato.getReviews
Get restaurant reviews using the Zomato restaurant ID. Only 5 latest reviews are available under the Basic API plan.
```javascript
Zomato.getReviews(API_Key, Res_ID, Data).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
})
```
__Data__ :  Data is an object having *start* and *count*. Place parameters in the same order.

### Zomato.getSearch
The location input can be specified using Zomato location ID or coordinates. Cuisine / Establishment / Collection IDs can be obtained from respective api calls. Get up to 100 restaurants by changing the 'start' and 'count' parameters with the maximum value of count being 20. Partner Access is required to access photos and reviews.
```javascript
Zomato.getSearch(API_Key, Data).then((result) => {
	console.log(result)
}).catch(function(err) {
	console.log(err)
})
```
__Data__ :  Data is an object having *entity_id*, *entity_type*, *q*, *start*, *count*, *lat*, *lon*, *radius*, *cuisines*, *establishment_type*, *collection_id*, 
*category*, *sort* and *order*. Place parameters in the same order.

Parameters | Data type
-----------|--------
`API_Key`|string
`Type`|string
`city_id`|integer
`lat`|double
`lon`|double
`LocationType`|string
`query`|string
`Res_ID`|integer

### Contributing
Code can be made more efficient and customised. Any contribution towards that will be appreciated. 
