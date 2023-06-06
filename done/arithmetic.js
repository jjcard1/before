const add = (arrayNumbers) => {
  return arrayNumbers.reduce((a, b) => a + b)
}

const subtract = (baseNumber, arrayToSubtract) => {
  let result = baseNumber
  arrayToSubtract.forEach(num => {
    if(result >= num){
      result = result - num
    }else{
      result = `The operation stopped at number ${num} of the array because it is greater than the current result. to continued with the current number the result would be ${result = result - num}`
    }
  })
  return result
}

const multiply = (arrayNumbers) => {
  return arrayNumbers.reduce((a, b) => a * b)
}

const divide = (baseNumber, arrayToDivide) => {
  let result = baseNumber
  arrayToDivide.forEach(num => {
    result = result / num
  })
  return result
}

module.exports = {add, subtract, multiply, divide}
