'use strict';

// same as callback hell!
// first().then(firstVal => {
//     second(firstVal).then(secondVal => {
//         console.log(secondVal);
//     });
// });

// // neatly arranged code, but still async!
first()
    .then(val => second(val))
    .then(val => console.log(val))
    .catch(err => console.error(err));
