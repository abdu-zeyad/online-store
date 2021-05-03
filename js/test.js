'use strict';

const array = [];

function test(name, age, number) {
  this.name=name;
  this.age=age;
  this.number=number;
  array.push(this);
}
new test('ahmad', '23', '221221');
console.log(array);

// function testforma() {
//  let testform= document.getElementById('form1')

//   let input = document.createElement('input')
//   testform.appendChild(input)
//   input.setAttribute('type','text')
//   input.setAttribute('value','enter')
    
// }
// testforma();
// function render() {
//   let p =document.createElement('p')
// p.textContent('hello  world')
// }


