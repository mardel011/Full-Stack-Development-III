const mixedArray = ['Matrix', 1, true, 2, false, 3]
const multiplyNumbers = (mixedArray) => {
    let filterNumber = mixedArray.filter(item => parseInt(item) === item);
    let multiplyNumbers = filterNumber.map(item => item * 5);
    return multiplyNumbers;
}   

console.log(multiplyNumbers(mixedArray));