var request = require('request');
var config = require('./config.json')
var jsonQuery = require('json-query')

var IrReq = function(tv, ircode, callback) {
  //load configuration
  var ip = jsonQuery('tvs[urlname=' + tv + '].host', {data: config}).value;
  var path = jsonQuery('tvs[urlname=' + tv + '].path', {data: config}).value;
  var port = jsonQuery('tvs[urlname=' + tv + '].port', {data: config}).value;
  var auth = jsonQuery('tvs[urlname=' + tv + '].authcode', {data: config}).value;

  //make the request
  console.log("Calling... http://" +  ip + ':' + port + path + ircode);
  request({
      url: 'http://' + ip + ':' + port + path, //URL to hit
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
          callback(error, response);
      }
      else {
          callback(error, body);
      }
  });
};


var GetTvApis = function( ResponseCallback) {
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
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



module.exports = {
    IrReq : IrReq,
    GetTvApis : GetTvApis,
};
