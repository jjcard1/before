
const multiplyNumber = ( num ) => {
    return new Promise( ( resolve ) => {
        setTimeout( () => {
        const double = num * 2;
        resolve( double );
        }, 2000 );
    } );
};


const arrayNumbers = [3, 4, 1]
const addNumbers = async (array) => {
    try{
        for(let i = 0; i < array.length; i++){
            array[i] = await multiplyNumber(array[i])
        }
        const addNumbers = array.reduce((a, b) => a + b)
        return addNumbers
    }
    catch(err){
        console.log('There is no any element in the array')
    }
}

addNumbers(arrayNumbers)

module.exports = addNumbers