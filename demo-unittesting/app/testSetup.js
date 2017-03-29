"use strict";

global.isNativescript = true;
global.isBrowser = true;
global.window = global;

global.define = function(requires, modules) {
	if (typeof requires === 'function') {
		requires.apply(this, require);
	} else {
		var args = [], hasAbly = false;
		for (var i=0;i<requires.length;i++) {
			var r = requires[i];
			var idx = r.lastIndexOf('/');
			if (idx >= 0) {
				r = r.substring(idx+1,r.length);
			}
			if (r === 'ably') { r = 'ably-nativescript'; }
			else if (r === 'globals') { r = 'environment'; }
			else if (r === 'browser-base64') { r = 'base64';}
			console.log("Requiring", r);
			var res = require("./ably/"+r);
			args.push(res);
		}
		var exp = modules.apply(this, args);
	}
};
