//1.

function difference(num) {
    if (num < 13) {
      var answer = 13 - num;
      console.log(answer)
    } else {
      var answer = num - 13;
      console.log(2 * answer);
    }
  }
  
  difference(32)
  difference(11)

  //2

  greeter = (myArray) => {
    let greetText = 'Hello';
    for (let index in myArray){
      console.log(`${greetText} ${myArray[index]}`);
    }
  }
  greeter (['Randy Savage', 'Ric Flair', 'Hulk Hogan'])

  //3
  const colors = ['red', 'green', 'blue'];
  const capitalizedColors = colors.map (x => x.charAt(0).toUpperCase() + x.slice(1)); 
  console.log(capitalizedColors)

  //4
  var values = [1, 6, 34, 30, 20, 5];
  const filterLessThan20 = values.filter(values => values < 20);
  console.log(filterLessThan20)

  