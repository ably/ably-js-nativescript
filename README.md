![npm](https://img.shields.io/npm/v/ably-nativescript.svg)
![License](https://badgen.net/github/license/ably/ably-JS-nativescript)

---

# Ably Pub/Sub NativeScript SDK

Build any realtime experience using Ably’s Pub/Sub NativeScript SDK, supported on all popular platforms and frameworks.

Ably Pub/Sub provides flexible APIs that deliver features such as pub-sub messaging, message history, presence, and push notifications. Utilizing Ably’s realtime messaging platform, applications benefit from its highly performant, reliable, and scalable infrastructure.

Find out more:

* [Ably Pub/Sub docs.](https://ably.com/docs/basics)
* [Ably Pub/Sub examples.](https://ably.com/examples?product=pubsub)

---
 
## Installation

Install from npm:

```bash
npm install ably-nativescript
```

Installation from tns:

```bash
tns plugin add ably-nativescript
```

## Usage

To use Realtime features:

```javascript
var realtime = require('ably-nativescript').Realtime;
```

To use Rest features:

```javascript
var realtime = require('ably-nativescript').Rest;
```

## FAQs

### Is this repo actively maintained?

Yes, this repo typically has very few recent commits because this repo doesn't do very much: it's a very thin wrapper around [the ably-js repo](https://github.com/ably/ably-js).

## License

Copyright (c) 2017 Ably Real-time Ltd, Licensed under the Apache License, Version 2.0.  Refer to [LICENSE](LICENSE) for the license terms.

[![npm](https://img.shields.io/npm/v/ably-nativescript.svg)](https://www.npmjs.com/package/ably-nativescript)
