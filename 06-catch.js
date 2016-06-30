'use strict';

const cache = new Map();

// simulates a database operation with terrible coding style
function fetchData(key) {
    return new Promise((accept, reject) => {
        setTimeout(() => {
            switch(key) {
                case 'good stuff':
                    return accept('Here\'s the good stuff!');
                case 'bad stuff':
                    return reject(new Error('whoopsie!'));
            }
        });
    });
}

function getStuff(key) {
    // test cache
    if (cache.has(key)) {
        console.log('cache hit "' + key + '"');
        var value = cache.get(key);
        return value instanceof Error ?
            Promise.reject(value) :
            Promise.resolve(value);
    }
    // not in cache, go to db, then store the result
    console.log('cache miss "' + key + '"');
    return fetchData(key)
        .then(value => {
            cache.set(key, value);
            return value;
        })
        .catch(err => {
            cache.set(key, err);
            return Promise.reject(err);
        });
}

getStuff('good stuff')
    .then(val => console.log('val'))
    .then(() => getStuff('good stuff'))
    .then(val => console.log('val'));

getStuff('bad stuff').catch(err => {
    console.log(err.message);
});
