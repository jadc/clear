//META{"name":"clear"}*//
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////













// Hi there! Thanks for downloading clear. Anyway, 
// if you want to change the bind from CTRL + B to
// something else, double click/go to this link here:
// http://i.imgur.com/q2pHZDX.png
// find the key you want, than put the number below.
// it'll turn it into CTRL + whatever you put.
//
var letter = 66;
//
// for example:
//    var letter = '88';
// that would make it CTRL + X





















////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DON'T TOUCH ANYTHING BELOW!///////////////////////////

var clear = function () {};
var hid = false;
clear.prototype.start = function () {
	
	$(document).keydown(function(e){
		if(e.ctrlKey && e.keyCode == letter){
			if(hid === true){
				$(".guilds-wrapper").fadeIn(100);
				$(".channels-wrap").fadeIn(100);
				$(".channel-members-wrap").fadeIn(100);
				$(".guilds-wrapper").show();
				$(".channels-wrap").show();
				$(".channel-members-wrap").show();
				hid = false;
			}else if(hid === false){
				$(".guilds-wrapper").hide();
				$(".channels-wrap").hide();
				$(".channel-members-wrap").hide();
				hid = true;
			}
		}
	});
};

clear.prototype.load = function () {};
clear.prototype.unload = function () {};
clear.prototype.stop = function () {};
clear.prototype.getSettingsPanel = function () {return "";};
clear.prototype.getName = function () {return "clear";};
clear.prototype.getDescription = function () {return "When you press CTRL + B (or whatever you set in the clear.plugin.js file), it hides everything except the chat. Good for having Discord on the side of your screen.";};
clear.prototype.getVersion = function () {return "1.0";};
clear.prototype.getAuthor = function () {return "Jad Chehimi";};