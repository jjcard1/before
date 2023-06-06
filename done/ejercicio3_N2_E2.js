
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

const getSalary = ( employee ) => {
  return new Promise( ( resolve, reject ) => {
    const salary = salaries.find( salary => salary.id === employee.id );
    if ( salary ) resolve( salary.salary );
    reject( 'The employee does no have a recorded salary' );
  } );
};

const findEmployee = ( id ) => {
  return employees.find( employee => employee.id === id );
};

const employee = findEmployee(3)
getSalary(employee)
  .then(res => console.log(res))
  .catch(err => console.log(err.message))


  module.exports = getSalary
