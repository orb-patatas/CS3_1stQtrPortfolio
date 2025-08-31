process.stdin.on('data', input => {

  const NUM= Number(input.toString().trim());  
   // use NUM variable in your code and start it on the next line
    if (NUM % 2 !== 0) {
        console.log('WEIRD');
    } else if (NUM >= 2 && NUM <= 5) {
        console.log('NOT WEIRD');
    } else if (NUM >= 6 && NUM <= 20) {
        console.log('WEIRD');
    } else if (NUM > 20) {
        console.log('NOT WEIRD');
    }

  // end of your code

  process.exit(); // ends the code

});