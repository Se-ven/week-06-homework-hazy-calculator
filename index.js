function calculate(numberOne, operation, numberTwo) {
  // Passing in three things, a number--operator--'nother 
  // number.

  // Need to figure out how to take all the operators and make 
  // those operators function on whatever numbers are entered

  // let operators = ['+', '-']


  // **Can use the switch case to go between each operation and what it does
  // OR......you can make separate functions that add, sub, etc....
  // Choose one or the other, both not needed.** 

  // let valuesEntered = []

  // Do the operations into the switch case
  switch (operation) {
    case '+':
      return parseInt(numberOne) + parseInt(numberTwo)
      break
    case '-':
      return parseInt(numberOne) - parseInt(numberTwo)
      break
    case '*':
      return parseInt(numberOne) * parseInt(numberTwo)
      break
    case '/':
      return parseInt(numberOne) / parseInt(numberTwo)
      break
    default:
      break
  }

  // accepts add
  function operationAdd(numberOne, numberTwo) {
    return parseInt(numberOne) + parseInt(numberTwo)
  }
  // accepts subtract
  let operationSubtract = numberOne - numberTwo

  // accepts multiply
  let operationMultiply = numberOne * numberTwo


  // While loops need a condition to 'stop' their operation, beware!
  // adds w/ one item as a string
  while (parseInt(numberOne), parseInt(numberTwo)) {
    return operationAdd
  }



  // See above about while loops
  // subs w/ one item as a string
  while (parseInt(numberOne, numberTwo)) {
    numberOne - numberTwo
  }
  // treat undefined values as 0s
  if (isNaN(numberOne || numberTwo)) {
    let numberOne = 0
    let numberTwo = 0
  }
}
console.log(calculate(3, '+', 2))
/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = {
  calculate,
  features: 'Add, Subtract, etc.'
}
