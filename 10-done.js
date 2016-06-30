'use strict';

function throwUp() {
    throw new Error('OH NOES');
}

function iterate(i) {
    console.log(i);
    return i + 1;
}

Promise.resolve()
    .then(() => iterate(1))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => throwUp())
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .catch(err => console.log(err));
