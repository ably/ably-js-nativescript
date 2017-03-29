"use strict";
const Observable = require('data/observable').Observable;
const Ably = require('./ably-nativescript');


let page, obs = new Observable({text: '', results: ''});
let channel;
function onNavigatingTo(args) {
    page = args.object;

    let realtime = new Ably.Realtime({key: 'tu21YQ.EAx_HQ:HgKaXnnYWgyuowWO'});
    channel = realtime.channels.get('nativescript');
    channel.subscribe((msg) => {
        console.log("Received:", JSON.stringify(msg.data));
        obs.results = obs.results + "\r\n" + msg.data.text;
    });

    page.bindingContext = obs;
}

exports.onNavigatingTo = onNavigatingTo;

exports.send = function() {
    if (obs.text === '') { return; }
    try {
        channel.publish("update", {text: obs.text});
        obs.text = '';
    } catch (err) {
        console.log("err:", err, err.stack);
    }
};