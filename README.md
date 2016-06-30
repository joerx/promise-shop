# promise-shop

Nodeschool promise solutions. See https://github.com/stevekane/promise-it-wont-hurt

## Notes

- Don't use `promise.then(console.log)` - it only works in NodeJS. Better: `promise.then(val => console.log(val))`
- Exercise 10 is broken. See https://github.com/stevekane/promise-it-wont-hurt/issues/83
- `Promise.then().done` is a `q` thing and doesn't work with vanilla promises. Use `catch()`
