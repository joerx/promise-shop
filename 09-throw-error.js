'use strict';

function parseAsPromised(json) {
    return new Promise((accept, reject) => {
        try {
            var result = JSON.parse(json);
            accept(result);
        } catch (err) {
            reject(err);
        }
    });
}

parseAsPromised(process.argv[2])
    .then(val => console.log(val))
    .catch(err => console.log(err));
