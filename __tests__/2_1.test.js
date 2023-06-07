
jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')
// new changes

test('testing 2_1', () => {
    const {addNumbers} = require('../app/2_1.js')
    const arrayNumbers = [3, 4, 1]
    addNumbers(arrayNumbers)

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWidth(expect.any(Function), 2000)
})