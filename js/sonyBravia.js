var request = require('request');

var ip='192.168.0.96';
var port='80';
var auth='0000'


var GetTvApis = function( ResponseCallback) {

  var headers = {
    'Content-Type':     'application/x-www-form-urlencoded'
  }

  // Configure the request
  var options = {
      url: 'http://192.168.0.96/sony/system',
      method: 'POST',
      headers: headers,
      body: '{"method":"getRemoteControllerInfo","params":[],"id":10,"version":"1.0"}'
  }

  // Start the request
  request(options, function (error, response, body) {
      if (!error) {
          ResponseCallback(error, body);
      }else{
        console.log(error)
        ResponseCallback(error, response);
      }
   })
}


var IRcodeRequest = function(ircode, ResponseCallback) {
    console.log("IRcodeRequest function called with code " + ircode);  //verifies IRcode received

    request({
        url: 'http://' + ip + ':' + port + '/sony/IRCC', //URL to hit
        //qs: {from: 'blog example', time: +new Date()}, //Query string data
        method: 'POST',
        headers: {
        'X-Auth-PSK':'0000',
        'Content-Type': 'text/xml; charset=utf-8',
        'soapaction': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"'
        },
        body : '<?xml version="1.0"?>' +
              '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
              '<s:Body>' +
              '<u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">' +
              '<IRCCCode>' + ircode + '</IRCCCode>' +
              '</u:X_SendIRCC>' +
              '</s:Body>' +
              '</s:Envelope>',
    }, function(error, response, body){
        if(error) {
            console.log('communication error ' + error);
            ResponseCallback(error, response);
        }
        else {
            ResponseCallback(error, body);
        }
    });
};


module.exports = {
    IRcodeRequest : IRcodeRequest,
    GetTvApis : GetTvApis,
};
