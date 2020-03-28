const comparer = require('./modules/comparer');
const calculator = require('./modules/calculator');

function calculate(x,y){
    if(comparer.AreNumbersEqual(x,y)){
        console.log(`comparing two numbers: ${x},${y} adding two numbers ` +calculator.add(x,y));
    } else console.log(`comparing two numbers: ${x},${y} subtracting two numbers `+calculator.subtract(x,y));
}

calculate(5,10);
calculate(5,5);

