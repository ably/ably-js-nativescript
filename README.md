[![npm](https://img.shields.io/npm/v/nativescript-ably.svg)](https://www.npmjs.com/package/nativescript-ably)
[![npm](https://img.shields.io/npm/l/nativescript-ably.svg)](https://www.npmjs.com/package/nativescript-ably)
[![npm](https://img.shields.io/npm/dt/nativescript-ably.svg?label=npm%20d%2fls)](https://www.npmjs.com/package/nativescript-ably)

# NativeScript-ably
Add Ably support to your application - realtime messaging

## License

This is released under the APACHE 2.0 License


## Installation 

tns plugin add nativescript-ably  


## Usage

To use the  module you just `require()` it:

```js
const Ably = require( "nativescript-ably" );
```

## Example:
```js 
    let realtime = new Ably.Realtime({key: '<YOUR_KEY>'});
    channel = realtime.channels.get('nativescript');
    channel.subscribe((msg) => {
        console.log("Received:", JSON.stringify(msg.data));        
    });
    
    channel.publish("update", {text: "Hi I'm sending something via Ably"});    
```