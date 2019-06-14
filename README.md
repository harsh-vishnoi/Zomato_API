
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

**Type : **  Type could be *id* ,*name* or *undefined*.
