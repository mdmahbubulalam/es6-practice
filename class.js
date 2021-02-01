class Student{
    constructor (studentId,studentName){
        this.id = studentId,
        this.name = studentName,
        this.school = "CCF High School" //eita default thakbe
    }
}

const student1 = new Student(1,'Alam');
const student2 = new Student(2,'Mahbub');

console.log(student1);
console.log(student2);
student1.id = 3;
console.log(student1);

