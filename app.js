// product --> Object.prototype --> null
const product = new Object({
    name: 'The War Of Art'
})

Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty
console.log(product.someNewMethod())
console.log(product)