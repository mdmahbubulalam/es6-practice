//default parameter
function add(num1,num2=0){
    //*1
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    //*2
    //num2 = num2 || 0;
    return num1+num2;
}
var total = add(12); // kono karone parameter ekta na pathale za korte hobe, ta function er vitore deya holo *.
console.log(total);