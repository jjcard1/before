const getEmployee =  require('../app/ejercicio3_N2_E1.js')

test('testing works', () => {
  return getEmployee(1).then((data) => {
    expect(data).toBe('Linux Torvalds')
  })
})
