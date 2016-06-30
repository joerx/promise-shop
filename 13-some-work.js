'use strict';

var qttp = require('q-io/http');

qttp.read("http://localhost:7000")
    .then(userId => qttp.read("http://localhost:7001/" + userId))
    .then(json => JSON.parse(json))
    .then(obj => console.log(obj))
    .catch(err => console.log(err));
