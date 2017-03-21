// function add(a, b) {
//   return a + b
// }

// console.log(add(3,1))

// var toAdd = [9, 5]

// console.log(add(...toAdd))

////////

// var groupA = ['Jen', 'Cory']
// var groupB = ['Vikram']

// var final = [3, ...groupA, ...groupB]

// console.log(final)

var person = ['Synclair', 20]
var person2 = ['Jen', 29]

function sayHi(name, age) {
  console.log(`Hi ${name}, you are ${age} years old`)
}

sayHi(...person)
sayHi(...person2)

var names = ['Mike', 'Ben']
var final = ['Synclair', ...names]

final.forEach((name) => {
  console.log('Hi ' + name)
})
