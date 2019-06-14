const https = require('https');

var getCategories = (zomatoUserKey, type) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var optionspost = {
            host: 'developers.zomato.com',
            path: '/api/v2.1/categories',
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
                var data_result = [];
                var Result = JSON.parse(data.toString('utf8'));
                if(type === 'id'){
                    for(let i=0; i<Result.categories.length; i++){
                        data_result.push(Result.categories[i].categories.id);
                    }
                    resolve(data_result);
                }else if (type === 'name'){
                    for(let i=0; i<Result.categories.length; i++){
                        data_result.push(Result.categories[i].categories.name);
                    }
                    resolve(data_result);
                }else if (type === undefined){
                    resolve(Result);
                }else {
                    reject("Check Parameters");
                }
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getCities = (zomatoUserKey, Data) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var Path = '';
        function URL(Data, callback){
            for(var i in Data){
                Path = Path + i + '=' + Data[i] + '&';
            }
            callback(Path.substring(0, Path.length-1))
        }       

        URL(Data, (Path) => {
            Path = Path
        });

        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/cities?${Path}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getCollection = (zomatoUserKey, CityID, Data) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var Path = `${CityID}`;
        function URL(Data, callback){
            for(var i in Data){
                Path = Path + '&' + i + '=' + Data[i];
            }
            callback(Path.substring(0, Path.length))
        }       

        URL(Data, (Path) => {
            Path = Path
        });

        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/collections?city_id=${Path}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getCuisines = (zomatoUserKey, CityID, Data) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var Path = `${CityID}`;
        function URL(Data, callback){
            for(var i in Data){
                Path = Path + '&' + i + '=' + Data[i];
            }
            callback(Path.substring(0, Path.length))
        }       

        URL(Data, (Path) => {
            Path = Path
        });

        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/cuisines?city_id=${Path}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getEstablishment = (zomatoUserKey, CityID, Data) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var Path = `${CityID}`;
        function URL(Data, callback){
            for(var i in Data){
                Path = Path + '&' + i + '=' + Data[i];
            }
            callback(Path.substring(0, Path.length))
        }       

        URL(Data, (Path) => {
            Path = Path
        });

        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/establishments?city_id=${Path}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getGeocode = (zomatoUserKey, lat, lon) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };

        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/geocode?lat=${lat}&lon=${lon}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getLocationDetails = (zomatoUserKey, CityID, LocationType) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/location_details?entity_id=${CityID}&entity_type=${LocationType}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getLocation = (zomatoUserKey, Query, Data) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var Path = `${Query}`;
        function URL(Data, callback){
            for(var i in Data){
                Path = Path + '&' + i + '=' + Data[i];
            }
            callback(Path.substring(0, Path.length))
        }       

        URL(Data, (Path) => {
            Path = Path
        });
        
        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/locations?query=${Path}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getRestaurant = (zomatoUserKey, Res_ID) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
        
        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/restaurant?res_id=${Res_ID}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getDailyMenu = (zomatoUserKey, Res_ID) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
        
        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/dailymenu?res_id=${Res_ID}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getReviews = (zomatoUserKey, Res_ID, Data) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };

        var Path = `${Res_ID}`;
        function URL(Data, callback){
            for(var i in Data){
                Path = Path + '&' + i + '=' + Data[i];
            }
            callback(Path.substring(0, Path.length))
        }       

        URL(Data, (Path) => {
            Path = Path
        });
        
        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/reviews?res_id=${Path}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (data) {
               resolve(data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

var getSearch = (zomatoUserKey, Data) => {
    return new Promise(function(resolve, reject) {
        var postheaders = {
            'content-type': 'application/json',
            'user-key': zomatoUserKey,
        };
       
        var Path = '';
        function URL(Data, callback){
            for(var i in Data){
                Path = Path + i + '=' + Data[i] + '&';
            }
            callback(Path.substring(0, Path.length-1))
        }       

        URL(Data, (Path) => {
            Path = Path
        });

        var optionspost = {
            host: 'developers.zomato.com',
            path: `/api/v2.1/search?${Path}`,
            headers: postheaders,
            method: 'GET'
        };

        const req = https.request(optionspost, (res) => {
        res.on('data', function (Data) {
                resolve(Data.toString('utf8'));
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
        
        req.end();
    });
}

module.exports = {
    getCategories,
    getCities,
    getCollection,
    getCuisines,
    getEstablishment,
    getGeocode,
    getLocationDetails, 
    getLocation,
    getRestaurant,
    getDailyMenu,
    getReviews,
    getSearch
}