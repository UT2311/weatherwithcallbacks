const request = require("reqeust");
var getLocation = (argv,callback)=>{
    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=hWXWI8eqlNxK8o54en7fYkdwYCvJXxJO&location=${encodeURIComponent(argv.address)}`,
        json:true
    },(error,response,body)=>{
        // console.log(response);
        callback(undefined,{
            Address:body.results[0].locations[0].street+""+body.results[0].locations[0].postalCode,
            Lat:body.results[0].locations[0].latLng.lat, 
            Lon:body.results[0].locations[0].latLng.lng,
        });
    });
};
var getWeatherConditions = (lat,long,callback) => {
    request({
        url:`https://api.darksky.net/forecast/c6cec2fd8def6aaf321639b88d5d3874/${lat},${long}`,
        josn:true
    },(error,response,body) =>{
        callback(undefined,{
            responseOBJ : body
        });
    });
}
module.exports = {
    geoCodeProp:getLocation,
    getConditions : getWeatherConditions
};
