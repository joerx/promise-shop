'use strict';

const promise = new Promise((accept, reject) => {
    accept('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onAccept(msg) {
    console.log(msg);
}

function onReject(err) {
    console.log(err.message);
}

promise.then(onAccept, onReject);
