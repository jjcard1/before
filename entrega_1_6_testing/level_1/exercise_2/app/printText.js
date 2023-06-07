const printInConsole = ( text ) => { console.log(text); };

const printText = ( n, callBack ) => {
  let message = '';
  if ( n === 1 ) message = 'There is no more Spaguetti';
  if ( n === 2 ) message = 'There are still 3 portions';
  if ( n === 3 ) message = 'there are enough portions';
  return callBack( message );
};

printText(2, printInConsole)

module.exports = {printText}
