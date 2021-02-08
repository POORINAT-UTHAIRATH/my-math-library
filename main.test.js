const math = require('./main')
const assert = require('assert')

console.log(math.sum(2, 2))
assert.strictEqual(math.sum(2, 2), 4, 'should sum two numbers')
console.log(math.sum([1, 2, 3, 4, 5]))
assert.strictEqual(math.sum([1, 2, 3, 4, 5]), 15, 'should sum two numbers')

