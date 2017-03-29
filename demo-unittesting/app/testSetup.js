"use strict";

global.isNativescript = true;
global.isBrowser = true;
global.window = global;

global.define = function(requires, modules) {
	if (typeof requires === 'function') {
		requires.apply(this, require);
	} else {
		var args = [];
		for (var i=0;i<requires.length;i++) {
			var r = requires[i];
			var idx = r.lastIndexOf('/');
			if (idx >= 0) {
				r = r.substring(idx+1,r.length);
			}
			if (r === 'ably' || r === 'ably-nativescript') { r = '~/tns_modules/ably/browser/static/ably-nativescript'; }
			else if (r === 'globals' || r === 'environment') { r = '~/ably/environment'; }
			else if (r === 'browser-base64' || r === 'base64') { r = '~/ably/base64';}
			else if (r === 'async') { r = '~/ably/async'; }
			else {
				r = '~/tns_modules/ably/spec/common/modules/' + r;
			}

			console.log("Define Redirected:", r);
			var res = require(r);
			args.push(res);
		}
		var exp = modules.apply(this, args);
	}
};
