// function doubleIt(num){
//     return num*5;
// }

// const doubleIt = function(num){
//     return num*5;
// }

const doubleIt = num => num*5; // first a parameter, then return
const add = (num1,num2) => num1+num2;
const giveFive = () => 5;
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum* diff;
    return result; // function eivabe declare korle rteturn dite hobe
}

const result1 = doubleIt(5);
const result2 = add(5,5);
const result3 = giveFive();
const result4 = doMath(7,5);
console.log(result4);