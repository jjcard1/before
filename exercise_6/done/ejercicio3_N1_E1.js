
const itWorks = ( works ) => {
  return new Promise( ( resolve, reject ) => {
    if ( works ) resolve( 'The function works' );
    else reject( "It seems it is not working" );
  } );
};

const whereAreYou = itWorks(true)
  .then(res => console.log(res))
  .catch(err => console.log(err.message))

module.exports = itWorks
