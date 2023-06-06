
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

const getEmployee = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const employee = employees.find( employee => employee.id === id );
    if ( employee ) resolve( employee.name );
    reject( new Error( 'Something wrong. Try it again' ) );
  } );
};

getEmployee( 1 )
  .then( res => console.log( res.name ) )
  .catch( err => console.log( err.message ) );


module.exports = getEmployee
