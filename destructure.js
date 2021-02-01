//object destructure
const person = {
    name: "Johnny Depp",
    age: 57,
    job: "Acting",
    spouse: "Lori Allison",
    address: "Owensboro, Kentucky, U.S.",
    phone: 937284723,
    friends: ['Tom Hanks', 'Tom Cruise', 'Jack Sparrow']
}

//const spouse = person.spouse;
//const {phone} = person;
const { spouse, phone } = person; //{ } ekhane object property name same hote hobe

console.log(spouse, phone);
console.log(spouse, phone);

const complexObject = {
    name: 'Alam',
    info: {
        age: 20,
        address: "Chandpur,Bangladesh"
    }
}

const { address } = complexObject.info;
console.log(address);

//array destructure
const friends = ['Shakib Khan', 'Amir khan,', 'Salman Khan', 'Arman Khan', 'Shahruk Khan'];
const [chotoFriend, NextFriend, ...restFriend] = friends;
console.log(chotoFriend, NextFriend, restFriend);