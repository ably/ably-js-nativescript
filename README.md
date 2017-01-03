# [Ably](https://www.ably.io)

A Nativescript client library for [Ably Realtime](https://www.ably.io), a realtime data delivery platform.

This repo is a wrapper for the [ably-js client library](https://github.com/ably/ably-js) which introduces a dependency needed by Nativescript. See the [ably-js README](https://github.com/ably/ably-js) for usage details of the [ably-js client library](https://github.com/ably/ably-js).

For complete API documentation, see the [Ably Realtime documentation](https://www.ably.io/documentation).

## How to use this library

### Installation from npm

    npm install ably-nativescript

### Installation from tns

    tns plugin add ably-nativescript

### Usage

For the realtime library:

```javascript
var realtime = require('ably-nativescript').Realtime;
```

For the rest-only library:

```javascript
var realtime = require('ably-nativescript').Rest;
```

### API usage, tests, contributing, etc.

See [the ably-js repo](https://github.com/ably/ably-js).

## FAQs

### Is this repo actively maintained?

Yes, this repo typically has very fwe recent commits because this repo doesn't do very much: it's a very thin wrapper around [the ably-js repo](https://github.com/ably/ably-js).

## License

Copyright (c) 2016 Ably Real-time Ltd, Licensed under the Apache License, Version 2.0.  Refer to [LICENSE](LICENSE) for the license terms.

[![npm](https://img.shields.io/npm/v/ably-nativescript.svg)](https://www.npmjs.com/package/ably-nativescript)
