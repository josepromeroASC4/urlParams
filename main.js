//mahdi-fied from https://www.sitepoint.com/url-parameters-jquery/
//takes a string argument - returns the value of the parameter (by name) from href, if it exists
function getParam(key){
	var results = new RegExp('[\?&]' + key + '=([^&#]*)').exec(window.location.href);
	if(results){
        return results[1];
    }else{
        return undefined;
    }
}


//TASK//
//Take 3 parameters from the href: 1) number, 2) shape, 3) color
//In the "setup()" function, use the parameters to create a number of shapes with the given color
//If a parameter is NOT found in the href, a default value should be set

function setup(){
    createCanvas(400,400);
    background(123);

    //Create a NUMBER of SHAPES with a COLOR

}


function draw(){

}
