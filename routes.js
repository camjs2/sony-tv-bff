var config = require('./js/config.json')

module.exports = function(app){
    var sonyCmds = require('./controllers/sony-commands');
    var sonyComboCmds = require('./controllers/sony-combo-commands');

    app.get('/tv/find', function (req, res) {
      res.send(config)
    })

    app.get('/tv/sony/getcommands', sonyCmds.getCommands);
    app.get('/tv/sony/:tvname/home', sonyCmds.home);
    app.get('/tv/sony/:tvname/poweroff', sonyCmds.poweroff);
    app.get('/tv/sony/:tvname/input', sonyCmds.input);
    app.get('/tv/sony/:tvname/gguide', sonyCmds.gguide);
    app.get('/tv/sony/:tvname/epg', sonyCmds.epg);
    app.get('/tv/sony/:tvname/favorites', sonyCmds.favorites);
    app.get('/tv/sony/:tvname/display', sonyCmds.display);
    app.get('/tv/sony/:tvname/home', sonyCmds.home);
    app.get('/tv/sony/:tvname/options', sonyCmds.options);
    app.get('/tv/sony/:tvname/return', sonyCmds.return);
    app.get('/tv/sony/:tvname/up', sonyCmds.up);
    app.get('/tv/sony/:tvname/down', sonyCmds.down);
    app.get('/tv/sony/:tvname/right', sonyCmds.right);
    app.get('/tv/sony/:tvname/left', sonyCmds.left);
    app.get('/tv/sony/:tvname/confirm', sonyCmds.confirm);
    app.get('/tv/sony/:tvname/red', sonyCmds.red);
    app.get('/tv/sony/:tvname/green', sonyCmds.green);
    app.get('/tv/sony/:tvname/yellow', sonyCmds.yellow);
    app.get('/tv/sony/:tvname/blue', sonyCmds.blue);
    app.get('/tv/sony/:tvname/num1', sonyCmds.num1);
    app.get('/tv/sony/:tvname/num2', sonyCmds.num2);
    app.get('/tv/sony/:tvname/num3', sonyCmds.num3);
    app.get('/tv/sony/:tvname/num4', sonyCmds.num4);
    app.get('/tv/sony/:tvname/num5', sonyCmds.num5);
    app.get('/tv/sony/:tvname/num6', sonyCmds.num6);
    app.get('/tv/sony/:tvname/num7', sonyCmds.num7);
    app.get('/tv/sony/:tvname/num8', sonyCmds.num8);
    app.get('/tv/sony/:tvname/num9', sonyCmds.num9);
    app.get('/tv/sony/:tvname/num0', sonyCmds.num0);
    app.get('/tv/sony/:tvname/num11', sonyCmds.num11);
    app.get('/tv/sony/:tvname/num12', sonyCmds.num12);
    app.get('/tv/sony/:tvname/volumeup', sonyCmds.volumeup);
    app.get('/tv/sony/:tvname/volumedown', sonyCmds.volumedown);
    app.get('/tv/sony/:tvname/mute', sonyCmds.mute);
    app.get('/tv/sony/:tvname/channelup', sonyCmds.channelup);
    app.get('/tv/sony/:tvname/channeldown', sonyCmds.channeldown);
    app.get('/tv/sony/:tvname/subtitle', sonyCmds.subtitle);
    app.get('/tv/sony/:tvname/closedcaption', sonyCmds.closedcaption);
    app.get('/tv/sony/:tvname/enter', sonyCmds.enter);
    app.get('/tv/sony/:tvname/dot', sonyCmds.dot);
    app.get('/tv/sony/:tvname/analog', sonyCmds.analog);
    app.get('/tv/sony/:tvname/teletext', sonyCmds.teletext);
    app.get('/tv/sony/:tvname/exit', sonyCmds.exit);
    app.get('/tv/sony/:tvname/analog2', sonyCmds.analog2);
    app.get('/tv/sony/:tvname/ad', sonyCmds.ad);
    app.get('/tv/sony/:tvname/digital', sonyCmds.digital);
    app.get('/tv/sony/:tvname/analog', sonyCmds.analog);
    app.get('/tv/sony/:tvname/bs', sonyCmds.bs);
    app.get('/tv/sony/:tvname/cs', sonyCmds.cs);
    app.get('/tv/sony/:tvname/bscs', sonyCmds.bscs);
    app.get('/tv/sony/:tvname/ddata', sonyCmds.ddata);
    app.get('/tv/sony/:tvname/picoff', sonyCmds.picoff);
    app.get('/tv/sony/:tvname/tv_radio', sonyCmds.tv_radio);
    app.get('/tv/sony/:tvname/theater', sonyCmds.theater);
    app.get('/tv/sony/:tvname/sen', sonyCmds.sen);
    app.get('/tv/sony/:tvname/internetwidgets', sonyCmds.internetwidgets);
    app.get('/tv/sony/:tvname/internetvideo', sonyCmds.internetvideo);
    app.get('/tv/sony/:tvname/netflix', sonyCmds.netflix);
    app.get('/tv/sony/:tvname/sceneselect', sonyCmds.sceneselect);
    app.get('/tv/sony/:tvname/mode3d', sonyCmds.mode3d);
    app.get('/tv/sony/:tvname/imanual', sonyCmds.imanual);
    app.get('/tv/sony/:tvname/audio', sonyCmds.audio);
    app.get('/tv/sony/:tvname/wide', sonyCmds.wide);
    app.get('/tv/sony/:tvname/jump', sonyCmds.jump);
    app.get('/tv/sony/:tvname/pap', sonyCmds.pap);
    app.get('/tv/sony/:tvname/myepg', sonyCmds.myepg);
    app.get('/tv/sony/:tvname/programdescription', sonyCmds.programdescription);
    app.get('/tv/sony/:tvname/writechapter', sonyCmds.writechapter);
    app.get('/tv/sony/:tvname/trackid', sonyCmds.trackid);
    app.get('/tv/sony/:tvname/tenkey', sonyCmds.tenkey);
    app.get('/tv/sony/:tvname/applicast', sonyCmds.applicast);
    app.get('/tv/sony/:tvname/actvila', sonyCmds.actvila);
    app.get('/tv/sony/:tvname/deletevideo', sonyCmds.deletevideo);
    app.get('/tv/sony/:tvname/photoframe', sonyCmds.photoframe);
    app.get('/tv/sony/:tvname/tvpause', sonyCmds.tvpause);
    app.get('/tv/sony/:tvname/keypad', sonyCmds.keypad);
    app.get('/tv/sony/:tvname/media', sonyCmds.media);
    app.get('/tv/sony/:tvname/syncmenu', sonyCmds.syncmenu);
    app.get('/tv/sony/:tvname/forward', sonyCmds.forward);
    app.get('/tv/sony/:tvname/play', sonyCmds.play);
    app.get('/tv/sony/:tvname/rewind', sonyCmds.rewind);
    app.get('/tv/sony/:tvname/prev', sonyCmds.prev);
    app.get('/tv/sony/:tvname/stop', sonyCmds.stop);
    app.get('/tv/sony/:tvname/next', sonyCmds.next);
    app.get('/tv/sony/:tvname/rec', sonyCmds.rec);
    app.get('/tv/sony/:tvname/pause', sonyCmds.pause);
    app.get('/tv/sony/:tvname/eject', sonyCmds.eject);
    app.get('/tv/sony/:tvname/flashplus', sonyCmds.flashplus);
    app.get('/tv/sony/:tvname/flashminus', sonyCmds.flashminus);
    app.get('/tv/sony/:tvname/topmenu', sonyCmds.topmenu);
    app.get('/tv/sony/:tvname/popupmenu', sonyCmds.popupmenu);
    app.get('/tv/sony/:tvname/rakurakustart', sonyCmds.rakurakustart);
    app.get('/tv/sony/:tvname/onetouchtimerec', sonyCmds.onetouchtimerec);
    app.get('/tv/sony/:tvname/onetouchview', sonyCmds.onetouchview);
    app.get('/tv/sony/:tvname/onetouchrec', sonyCmds.onetouchrec);
    app.get('/tv/sony/:tvname/onetouchstop', sonyCmds.onetouchstop);
    app.get('/tv/sony/:tvname/dux', sonyCmds.dux);
    app.get('/tv/sony/:tvname/footballmode', sonyCmds.footballmode);
    app.get('/tv/sony/:tvname/social', sonyCmds.social);

    app.get('/tv/sony/:tvname/bbc1hd', sonyComboCmds.bbc1hd);
    app.get('/tv/sony/:tvname/itv1hd', sonyComboCmds.itv1hd);

}
