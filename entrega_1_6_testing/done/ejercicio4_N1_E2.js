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



// Crea los test correspondientes para verificar el funcionamiento del ejercicio Async/Await N1 E2.

const searchEmployee = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    if ( id > employees.length ) {
      reject( 'This is an error' );
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
    console.log( employee.name );
  } catch ( err ) {
    console.log( err.message );
  }
};

getInfo(3)

module.exports = getInfo
