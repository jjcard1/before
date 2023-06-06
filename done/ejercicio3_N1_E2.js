const printText = ( text ) => { console.log(text); };

const options = ( n, callBack ) => {
  let message = '';
  if ( n === 1 ) message = 'There is no more Spaguetti';
  if ( n === 2 ) message = 'There are still 3 portions';
  if ( n === 3 ) message = 'there are enough portions';
  return callBack( message );
};

options(2, printText)

module.exports = {options}
