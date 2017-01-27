var sonyBravia = require('../js/sonyBravia');
var config = require('../js/config.json')
var irCode = require('./const');


// common response
function respond(res, req, err, codeResponse){
  console.log(irCode.return);
  res.send(codeResponse)
}

exports.poweroff = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.poweroff, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.input = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.input, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.gguide = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.gguide, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.epg = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.epg, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.favorites = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.favorites, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.display = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.display, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.home = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.home, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.options = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.options, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.return = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.return, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.up = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.up, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.down = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.down, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.right = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.right, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.left = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.left, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.confirm = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.confirm, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.red = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.red, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.green = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.green, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.yellow = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.yellow, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.blue = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.blue, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num1 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num1, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num2 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num2, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num3 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num3, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num4 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num4, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num5 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num5, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num6 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num6, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num7 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num7, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num8 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num8, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num9 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num9, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num0 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num0, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num11 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num11, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.num12 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.num12, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.volumeup = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.volumeup, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.volumedown = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.volumedown, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.mute = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.mute, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.channelup = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.channelup, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.channeldown = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.channeldown, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.subtitle = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.subtitle, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.closedcaption = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.closedcaption, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.enter = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.enter, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.dot = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.dot, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.analog = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.analog, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.teletext = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.teletext, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.exit = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.exit, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.analog2 = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.analog2, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.ad = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.ad, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.digital = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.digital, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.analog = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.analog, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.bs = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.bs, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.cs = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.cs, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.bscs = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.bscs, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.ddata = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.ddata, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.picoff = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.picoff, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.tv_radio = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.tv_radio, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.theater = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.theater, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.sen = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.sen, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.internetwidgets = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.internetwidgets, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.internetvideo = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.internetvideo, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.netflix = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.netflix, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.sceneselect = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.sceneselect, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.mode3d = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.mode3d, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.imanual = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.imanual, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.audio = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.audio, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.wide = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.wide, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.jump = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.jump, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.pap = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.pap, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.myepg = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.myepg, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.programdescription = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.programdescription, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.writechapter = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.writechapter, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.trackid = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.trackid, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.tenkey = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.tenkey, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.applicast = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.applicast, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.actvila = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.actvila, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.deletevideo = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.deletevideo, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.photoframe = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.photoframe, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.tvpause = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.tvpause, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.keypad = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.keypad, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.media = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.media, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.syncmenu = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.syncmenu, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.forward = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.forward, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.play = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.play, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.rewind = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.rewind, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.prev = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.prev, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.stop = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.stop, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.next = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.next, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.rec = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.rec, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.pause = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.pause, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.eject = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.eject, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.flashplus = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.flashplus, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.flashminus = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.flashminus, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.topmenu = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.topmenu, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.popupmenu = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.popupmenu, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.rakurakustart = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.rakurakustart, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.onetouchtimerec = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.onetouchtimerec, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.onetouchview = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.onetouchview, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.onetouchrec = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.onetouchrec, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.onetouchstop = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.onetouchstop, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.dux = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.dux, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.footballmode = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.footballmode, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};
exports.social = function(req, res){sonyBravia.IrReq(req.params.tvname, irCode.social, function callback(err, codeResponse){respond(res, req, err, codeResponse)})};

exports.getCommands = function(req, res){
  sonyBravia.GetTvApis(
    function ResponseCallback(err, codeResponse){
      var exjson = JSON.parse(codeResponse);
      //delete exjson["id"];
      //delete exjson["result"][0];
      var cmds = exjson["result"][1];
      for(var item in cmds){
        cmds[item]["name"] = cmds[item]["name"].toLowerCase();
        delete cmds[item]["value"];
      }
      res.send(exjson)
    }
  );
};
