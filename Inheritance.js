class Parent{
    constructor(){
        this.fatherName = 'schwarzenegger';
    }
}

class Child extends Parent{
    constructor(childName){
        super(); //extend korle super() use korte hobe
        this.name = childName;
    }

    getFullName(){
        return this.name+" "+this.fatherName;
    }
}

const childName1 = new Child('Arnold');
const childName2 = new Child('Tom');

console.log(childName1.getFullName());
console.log(childName2.getFullName());

