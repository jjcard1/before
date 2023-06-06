const getInfo = require('../app/ejercicio4_N1_E2.js')

text('testing works', async () => {
  const data = await getInfo(3)
  expect(data).toBe('Jeff Bezos')
})
