'use strict';

const promise = new Promise((accept, reject) => {
    setTimeout(() => {
        accept('FULFILLED!');
    }, 300);
});

promise.then(val => console.log(val));
