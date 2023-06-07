// Entrega 1.3: Classes & Arrow Functions

// NIVEL 1: EJERCICIO 1
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const itWorks = ( works ) => {
  return new Promise( ( resolve, reject ) => {
    if ( works ) resolve( 'The function works' );
    else reject( new Error( "It seems it is not working" ) );
  } );
};

const whereAreYou = itWorks(true)
  .then(res => console.log(res))
  .catch(err => console.log(err.message))




// NIVEL 1: EJERCICIO 2
// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const printText = ( text ) => { console.log( text ); };

const options = ( n, callBack ) => {
  let message = '';
  if ( n === 1 ) message = 'There is no more Spaguetti';
  if ( n === 2 ) message = 'There are still 3 portions';
  if ( n === 3 ) message = 'there are enough portions';
  callBack( message );
};

options(2, printText)





// NIVEL 2: EJERCICIO 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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
    const employee = employees.find( employee => employee.id === id );
    if ( employee ) resolve( employee );
    reject( new Error( 'Something wrong. Try it again' ) );
  } );
};

getEmployee( 1 )
  .then( res => console.log( res.name ) )
  .catch( err => console.log( err.message ) );





// NIVEL 2: EJERCICIO 2
// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = ( employee ) => {
  return new Promise( ( resolve, reject ) => {
    const salary = salaries.find( salary => salary.id === employee.id );
    if ( salary ) resolve( salary.salary );
    reject( new Error( 'The employee does no have a recorded salary' ) );
  } );
};

const findEmployee = ( id ) => {
  return employees.find( employee => employee.id === id );
};

const employee = findEmployee(3)
getSalary(employee)
  .then(res => console.log(res))
  .catch(err => console.log(err.message))





// NIVEL 2: EJERCICIO 3
// Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

getEmployee( 2 )
  .then( employee => {
    getSalary( employee )
      .then( salary => console.log( `${ employee.name } has a salary of: ${ salary } euros` ) );
  } );






// NIVEL 3: EJERCICIO 1
// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

getEmployee( 4 )
  .then( employee => {
    getSalary( employee )
      .then( salary => console.log( `${ employee.name } has a salary of: ${ salary } euros` ) )
      .catch(err => console.log('The information could not be found. Please, check the searched ID'))
  } )
  .catch(err => console.log('The ID entered is not correct'))
