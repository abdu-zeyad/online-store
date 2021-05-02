'use strict';
let array=[]
function Test (name,age,number){
    name.this=name;
    age.this=age;
    number.this=number
    array.push(this);
}
new Test(ahmad,23,221221);
console.log(array);
