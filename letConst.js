const wife = "Israt";
console.log(wife);

//const numbers a puro array notun kore set kora jabe na.
const numbers = [12,45];
numbers[0]=88;
console.log(numbers);
numbers.push(67);
console.log(numbers);

//const numbers a puro object notun kore set kora jabe na.
const actor = {
    name : "Alfred Pachino",
    age : 70
}

console.log(actor);

let customerName = "Abdul Rahim";
console.log(customerName);
customerName = "Karim Benzema"
console.log(customerName);

let num1 = 0;
//ekhane i er age var use kora hoiche, tai i ke for loop er scope er baire thekeo use kora jabe.
for (var i = 0; i < 10; i++) {
    num1= num1+i;
}
console.log(i);

let num2 = 0;
//ekhane i er age let use kora hoiche, tai j ke for loop er scope er baire theke use kora jabe NA.
for (let j = 1; j <= 5; j++) {
    num2= num2+j;
    console.log(j);
}
