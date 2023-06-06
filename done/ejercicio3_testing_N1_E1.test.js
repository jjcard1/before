const itWorks = require('../app/ejercicio3_N1_E1.js')

test('testing works', () => {
  return itWorks(true).then((data) => {
    expect(data).toBe('The function works')
  })
})
