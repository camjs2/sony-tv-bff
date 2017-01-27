var sonyBravia = require('./js/sonyBravia');
var config = require('./js/config.json')
var irCode = require('./controllers/const');

module.exports = function(app){
  var sonyCmds = require('./controllers/sony-commands');

  // BBC1 HD: 101
  app.get('/tv/sony/:tvname/bbc1hd', function(req, res, next){
    sonyBravia.IrReq(req.params.tvname, irCode.num1, function callback(err, codeResponse){})
    setTimeout(function(){next()},200);});
  app.get('/tv/sony/:tvname/bbc1hd', function(req, res, next){
    sonyBravia.IrReq(req.params.tvname, irCode.num0, function callback(err, codeResponse){})
    setTimeout(function(){next()},200);});
  app.get('/tv/sony/:tvname/bbc1hd', function(req, res, next){
    sonyBravia.IrReq(req.params.tvname, irCode.num1, function callback(err, codeResponse){})
    setTimeout(function(){next()},200);});
  app.get('/tv/sony/:tvname/bbc1hd', function(req, res){res.send('OK')});


  // ITV1 HD: 103
  app.get('/tv/sony/:tvname/itv1hd', function(req, res, next){
    sonyBravia.IrReq(req.params.tvname, irCode.num1, function callback(err, codeResponse){})
    setTimeout(function(){next()},200);});
  app.get('/tv/sony/:tvname/itv1hd', function(req, res, next){
    sonyBravia.IrReq(req.params.tvname, irCode.num0, function callback(err, codeResponse){})
    setTimeout(function(){next()},200);});
  app.get('/tv/sony/:tvname/itv1hd', function(req, res, next){
    sonyBravia.IrReq(req.params.tvname, irCode.num3, function callback(err, codeResponse){})
    setTimeout(function(){next()},200);});
  app.get('/tv/sony/:tvname/itv11hd', function(req, res){res.send('OK')});

}
