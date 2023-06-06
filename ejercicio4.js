// EJERCICIO ANTERIOR

const employees = [
  {
    id: 1,
    name: 'Linux Torvalds'
  },
  {
    id: 2,
    name: 'Bill Gates'
  },
  {
    id: 3,
    name: 'Jeff Bezos'
  }
];

const salaries = [
  {
    id: 1,
    salary: 4000
  },
  {
    id: 2,
    salary: 1000
  },
  {
    id: 3,
    salary: 2000
  }
];

const getEmployee = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      const employee = employees.find( employee => employee.id === id );
      if ( employee ) resolve( employee );
      reject( new Error( 'Something wrong. Try it again' ) );
    }, 1000 );
  } );
};

const findEmployee = ( id ) => {
  return employees.find( employee => employee.id === id );
};

const employee = findEmployee( 3 );

const getSalary = ( employee ) => {
  return new Promise( ( resolve, reject ) => {
    const salary = salaries.find( salary => salary.id === employee.id );
    if ( salary ) resolve( salary.salary );
    reject( new Error( 'The employee does no have a recorded salary' ) );
  } );
};






// NIVEL 1: EJERCICIO 1
// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

const printEmployeeData = async ( id ) => {
  try {
    const employee = await getEmployee( id );
    const salary = await getSalary( employee );
    console.log( `${ employee.name } has a salary of: ${ salary }` );
  }
  catch ( err ) {
    console.log( err.message );
  }
};

printEmployeeData( 2 );


// NIVEL 1: EJERCICIO 2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const searchEmployee = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    if ( id > employees.length ) {
      reject( new Error( 'This is an error' ) );
    } else {
      setTimeout( () => {
        const employeeFound = employees.find( employee => employee.id === id );
        resolve( employeeFound );
      }, 2000 );
    }
  } );
};

const getInfo = async ( id ) => {
  try {
    const employee = await searchEmployee( id );
    console.log( employee );
  } catch ( err ) {
    console.log( err.message );
  }
};

getInfo(3)


// NIVEL 2: EJERCICIO 1
// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

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
    console.log(addNumbers)
  }
  catch(err){
    console.log('There is no any element in the array')
  }
}

addNumbers(arrayNumbers)



// NIVEL 3: EJERCICIO 1
// Força i captura tants errors com puguis dels nivells 1 i 2.

const functionTest = async (functionToTest, data) => {
  try {
    await functionToTest( data );
  } catch ( err ) {
    console.log( err.message );
  }
};

functionTest(printEmployeeData, 6)
functionTest(getInfo, 7)
functionTest(addNumbers, []) // in this case the error is forced in the function passing an empty array
