'use strict';

const promise = new Promise((accept, reject) => {
    accept('PROMISE VALUE');
});

// promise.then(console.log); // don't do this!
promise.then((val) => console.log(val));

console.log('MAIN PROGRAM');
