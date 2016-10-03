/**
 * Created by adrian on 3/09/16.
 */
var fs = require('fs')
var request = require('request');

var file = require('fs').createWriteStream('plswork.png');
request(
  {url: 'http://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    json: true},
    function(error, res, json){
      if(error)
      {
        console.log(error);
      }
      else{
        request(json.url).pipe(file);
        console.log(json.title);
      }
});
