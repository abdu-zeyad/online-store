'use strict';

// const volun = document.getElementById('volunForm');
const productlist = document.getElementById('productlist');


function product(picture,name,price,notes) {
    this.picture = picture;
    this.name = name;
    this.price = price;
    this.notes = notes;
    product.arrOfObject.push(this);
}

product.arrOfObject = [];
console.log(product.arrOfObject);


new product('images/cn18896255.webp','picture1',18,'fibermask')
new product('images/cn19045146.webp','picture2',13,'fibermask')
new product('images/cn19140056.webp','picture3',15,'fibermask')
new product('images/cn19140070.webp','picture4',28,'fibermask')

new product('images/cn19140108.webp','picture5',16,'fibermask')
new product('images/cn19140138.webp','picture6',19,'fibermask')
new product('images/cn19584550.webp','picture7',12,'fibermask')
new product('images/cn19584521.webp','picture8',18,'fibermask')



function renderList(){
    productlist.textContent='';

    for (let i=0 ; i<product.arrOfObject.length; i++){
        const div = document.createElement('div')
        productlist.appendChild(div); 
       let ul = document.createElement('ul');
       div.appendChild(ul);

        let lipic = document.createElement('li');
        ul.appendChild(lipic);
        
       let  lipicc = document.createElement('IMG');
       lipic.appendChild(lipicc);
      lipicc.scr =  product.arrOfObject[i].picture;
    

        let liname = document.createElement('li');
        ul.appendChild(liname);
        liname.textContent =  product.arrOfObject[i].name;

        let liprice = document.createElement('li');
        ul.appendChild(liprice);
        liprice.textContent =  product.arrOfObject[i].price;

        let linotes = document.createElement('li');
        ul.appendChild(linotes);
        linotes.textContent =  product.arrOfObject[i].notes;
   
    }
    
}

renderList();

// console.log(product.arrOfObject);
// volunForm.addEventListener('submit', handleSubmit)