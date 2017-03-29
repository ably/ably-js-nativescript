/* This is pre-configured for NativeScript; no easy way to transfer this data to the NS app */
/* global define, isBrowser */


define(function(require) {
	"use strict";
	var
		ablyEnvironment =  	"sandbox",
		realtimeHost = 		"sandbox-realtime.ably.io",
		restHost = 			"sandbox-rest.ably.io",
		port = 				80,
		tlsPort = 			443,
		tls = 				true,
		logLevel = 			1;  // 4 is debug

	return module.exports = { // jshint ignore:line
		environment: ablyEnvironment,
		realtimeHost:realtimeHost,
		restHost:    restHost,
		port:        port,
		tlsPort:     tlsPort,
		tls:         tls,
		log:         {
			level:   logLevel,
			handler: function(msg) {
				var time = new Date();
				console.log(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + '.' + time.getMilliseconds(), msg);
			}
		}
	};
});
