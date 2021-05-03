'use strict';
const form = document.getElementById('form')
const table = document.getElementById('table')

function Product(name, age) {

  this.name = name;
  this.age = age;
  
  Product.arrayofobjects.push(this)
}

Product.prototype.notes=function () {
    this.notes=notes;
   
}

Product.arrayofobjects = [];
console.log(Product.arrayofobjects);

function submit(event) {
  event.preventDefault();
  const product = event.target;
  const name = product.name.value;
  const age = product.age.value;
  const notes= product.notes.value;
  let hello = new Product(name, age)
  hello.notes();
  console.log(notes);
  save();
  getting();
}
form.addEventListener('submit', submit)

function render() {
  table.textContent = '';
  

  const row = document.createElement('tr')
  form.appendChild(row);

  const cell1 = document.createElement('th')
  row.appendChild(cell1);
  cell1.textContent = Product.arrayofobjects[0].name

  const cell2 = document.createElement('th')
  row.appendChild(cell2);
  cell2.textContent = Product.arrayofobjects[0].age

  const cell3 = document.createElement('th')
  row.appendChild(cell3);
  cell3.textContent = Product.arrayofobjects[0].notes

  console.log(Product.arrayofobjects[0]);
}

function save() {
  let savetol=JSON.stringify(Product.arrayofobjects)
  localStorage.setItem('saveditems',savetol)
}

function getting() {
  let date = localStorage.getItem('saveditems')
  let conv = JSON.parse(date)
  if (conv!== null) {
    Product.arrayofobjects=conv
  }
  render();
}
