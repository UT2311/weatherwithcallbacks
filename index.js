const yargs = require("yargs");
var geoCode = require("./geoCode");
const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;
geoCode.geoCodeProp(argv,(error,result)=>{
    if (error){
        console.log(error);
    }
    else{
        console.log(JSON.stringify(result,undefined,2));
        geoCode.getConditions(result.Lat,result.Lon,(error,response)=>{
            var inJSON = JSON.parse(response.responseOBJ,undefined,2);
		console.log("it feels like-- "+(( inJSON.currently.temperature - 32)*5)/9);
        });
    }
});

