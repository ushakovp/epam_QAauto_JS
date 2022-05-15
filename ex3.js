let stringVariable = 'some string';
let booleanVariable = true;
let numberVariable = 55;

console.log('Addition:');
printResultAddition(stringVariable, booleanVariable);
printResultAddition(stringVariable, numberVariable);
printResultAddition(numberVariable, booleanVariable);

console.log('\nMultiplication:');
printResultMultiplication(stringVariable, booleanVariable);
printResultMultiplication(stringVariable, numberVariable);
printResultMultiplication(numberVariable, booleanVariable);

console.log('\nDivision:');
printResultDivision(stringVariable, booleanVariable);
printResultDivision(stringVariable, numberVariable);
printResultDivision(numberVariable, booleanVariable);

function printResultAddition(argOne, argTwo) {
    result = argOne + argTwo;
    console.log(result);
    console.log(typeof result);
    console.log('**********************');
}

function printResultMultiplication(argOne, argTwo) {
    result = argOne * argTwo;
    console.log(result);
    console.log(typeof result);
    console.log('**********************');
}

function printResultDivision(argOne, argTwo) {
    result = argOne / argTwo;
    console.log(result);
    console.log(typeof result);
    console.log('**********************');
}
