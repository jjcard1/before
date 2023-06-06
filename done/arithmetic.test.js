const { add, subtract, multiply, divide } = require( '../app/arithmetic.js' );

test( 'results', () => {
  expect(add([5, 6, 4])).toBe(15);
} )

test( 'results', () => {
  expect(subtract(20, [5, 6, 4])).toBe(5);
} )

test( 'results', () => {
  expect(multiply([2, 2, 5])).toBe(20);
} )

test( 'results', () => {
  expect(divide(16, [2, 2, 2])).toBe(2);
} )
