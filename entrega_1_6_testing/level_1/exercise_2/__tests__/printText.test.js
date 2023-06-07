const {options} = require('../app/ejercicio3_N1_E2.js')

test('texting works', (done) => {
  function callback(data){
    try{
      expect(data).toBe('There is no more Spaguetti')
      done()
    }
    catch(err){
      done(err)
    }
  }
  options(1, callback)
})


