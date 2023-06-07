const getSalary = require('../app/ejercicio3_N2_E2.js')

const datos = { id: 3, name: 'Jeff Bezos' }
test('testing works', () => {
  return getSalary(datos).then((data) => {
    expect(data).toBe(2000)
  })
})
