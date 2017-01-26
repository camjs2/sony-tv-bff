//var sonycmd = require('./sony-commands');
var sonyBravia = require('../js/sonyBravia');

exports.bbc1hd = function(req, res) {
  sonyBravia.IRcodeRequest('AAAAAQAAAAEAAAAAAw==', function ResponseCallback(err, codeResponse){
    setTimeout(function(){
      sonyBravia.IRcodeRequest('AAAAAQAAAAEAAAAJAw==', function ResponseCallback(err, codeResponse){
        setTimeout(function()
          {sonyBravia.IRcodeRequest('AAAAAQAAAAEAAAAAAw==', function ResponseCallback(err, codeResponse){});
        },200);
      });
    },200);
  });
  res.send('{ok}')
};


exports.itv1hd = function(req, res) {
  sonyBravia.IRcodeRequest('AAAAAQAAAAEAAAAAAw==', function ResponseCallback(err, codeResponse){
    setTimeout(function(){
      sonyBravia.IRcodeRequest('AAAAAQAAAAEAAAAJAw==', function ResponseCallback(err, codeResponse){
        setTimeout(function()
          {sonyBravia.IRcodeRequest('AAAAAQAAAAEAAAACAw==', function ResponseCallback(err, codeResponse){});
        },200);
      });
    },200);
  });
  res.send('{ok}')
};
