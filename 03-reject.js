'use strict';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 300);
});

promise.then(() => {}, err => console.log(err.message));
