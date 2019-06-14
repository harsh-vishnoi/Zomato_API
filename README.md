
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

  Parameter   |  Data Type
--------------|---------------
 `API_key`    |   string
  `Type`	  |	  string

 __Type__  :  Type could be *id* ,*name* or *undefined*.

### Zomato.getCities
Find the Zomato ID and other details for a city . You can obtain the Zomato City ID in one of the following ways:  

1.  City Name in the Search Query - Returns list of cities matching the query
2.  Using coordinates - Identifies the city details based on the coordinates of any location inside a city

If you already know the Zomato City ID, this API can be used to get other details of the city.
```javascript
Zomato.getCities(API_key, {q :  "Delhi"}).then((result) => {
	console.log(result)
}).catch(function(err){
	console.log(err)
});
```

  Parameter   |  Data Type
--------------|---------------
 `API_key`    |   string
  `q`	      |	  string
  `lat`       |   double
  `lon`       |   double
   `city_ids` |   string
   `count` |   integer
 
 __Type__  :  Type is an object having *q*, *lat*, *lon*, *city_ids* and *count*. Input it in same order.
