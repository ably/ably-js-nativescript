# [Ably](https://www.ably.io)

[![npm version](https://badge.fury.io/js/ably-nativescript.svg)](https://badge.fury.io/js/ably-nativescript)

A Nativescript client library for [Ably Realtime](https://www.ably.io), a realtime data delivery platform.

This repo is a wrapper for the [ably-js client library](https://github.com/ably/ably-js) which introduces a dependency needed by Nativescript. See the [ably-js README](https://github.com/ably/ably-js) for usage details of the [ably-js client library](https://github.com/ably/ably-js). The ably-js library currently targets the [Ably 1.1 client library specification](https://www.ably.io/documentation/client-lib-development-guide/features/). You can jump to the '[Known Limitations](#known-limitations)' section to see the features this client library does not yet support or or [view our client library SDKs feature support matrix](https://www.ably.io/download/sdk-feature-support-matrix) to see the list of all the available features.

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

## Known Limitations

The ably-js library currently *does not* support being the [target of a push notification](https://www.ably.io/documentation/general/push#activate) (i.e. web push)


## FAQs

### Is this repo actively maintained?

Yes, this repo typically has very few recent commits because this repo doesn't do very much: it's a very thin wrapper around [the ably-js repo](https://github.com/ably/ably-js).

## License

Copyright (c) 2017 Ably Real-time Ltd, Licensed under the Apache License, Version 2.0.  Refer to [LICENSE](LICENSE) for the license terms.

[![npm](https://img.shields.io/npm/v/ably-nativescript.svg)](https://www.npmjs.com/package/ably-nativescript)
