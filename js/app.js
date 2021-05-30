'use strict';

const Productlist = document.getElementById('Productlist');
const form = document.getElementById('form1');


function Product (picture,name,price,notes) {
  this.picture = picture;
  this.name = name;
  this.price = price;
  this.notes = notes;
  Product.arrOfObject.push(this);
}

Product.arrOfObject = [];
console.log(Product.arrOfObject);


new Product('images/cn18896255.webp','picture1',18,'fibermask');
new Product('images/cn19045146.webp','picture2',13,'fibermask');
new Product('images/cn19140056.webp','picture3',15,'fibermask');
new Product('images/cn19140070.webp','picture4',28,'fibermask');

new Product('images/cn19140108.webp','picture5',16,'fibermask');
new Product('images/cn19140138.webp','picture6',19,'fibermask');
new Product('images/cn19140070.webp','picture7',12,'fibermask');
new Product('ئimages/cn18896255.webp','picture8',18,'fibermask');



function renderList(){
  Productlist.textContent='';

  for (let i=0 ; i<Product.arrOfObject.length; i++){
    const div = document.createElement('div');
    Productlist.appendChild(div);
    let ul = document.createElement('ul');
    div.appendChild(ul);

    let lipic = document.createElement('li');
    ul.appendChild(lipic);

    let lipicc = document.createElement('img');
    lipicc.src = Product.arrOfObject[i].picture;
    lipic.appendChild(lipicc);


    let liname = document.createElement('li');
    ul.appendChild(liname);
    liname.textContent = 'Name: '+ Product.arrOfObject[i].name;

    let liprice = document.createElement('li');
    ul.appendChild(liprice);
    liprice.textContent = 'Price: '+ Product.arrOfObject[i].price;

    let linotes = document.createElement('li');
    ul.appendChild(linotes);
    linotes.textContent = 'notes: '+ Product.arrOfObject[i].notes;

  }

}

renderList();


function handlesubmit(event) {
  event.preventDefault();
  const Product= event.target;
  const picture = Product.picture.value;
  const name= Product.name.value;
  const price = Product.price.value;
  const notes = Product.notes.value;
  new Product(picture,name,price,notes);
  console.log(Product);
}
form.addEventListener('submit',handlesubmit);
