// var names = ['Synclair', 'Brian', 'Nick']

// names.forEach(function(name) {
//   console.log('forEach', name)
// })

// names.forEach((name) => {
//   console.log('arrow func', name)
// })

// names.forEach((name) => console.log(name))

// var returnMe = (name) => name + '!';
// console.log(returnMe('Synclair'))

// var returnMe2 = function(name) {
//   return name+'!'
// }
// console.log(returnMe('Synclair2'))

// var person = {
//   name: 'Synclair',
//   greet: function() {
//     names.forEach((name) => console.log(this.name + ' says hi to ' + name))
//   }
// }


// person.greet()

// Challenge Area

// addStatement
var addStatement = (a,b) => {
  return a+b
}

console.log('addStatement', addStatement(5,5))

var addExpression = (c,d) => c+d

console.log('addExpression', addExpression(5,-2))
