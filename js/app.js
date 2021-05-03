'use strict';

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
new product('images/cn19140070.webp','picture7',12,'fibermask')
new product('images/cn18896255.webp','picture8',18,'fibermask')



function renderList(){
    productlist.textContent='';

    for (let i=0 ; i<product.arrOfObject.length; i++){
        const div = document.createElement('div')
        productlist.appendChild(div); 
       let ul = document.createElement('ul');
       div.appendChild(ul);

        let lipic = document.createElement('li');
        ul.appendChild(lipic);
        
        let lipicc = document.createElement('img');
        lipicc.src =  product.arrOfObject[i].picture 
        lipic.appendChild(lipicc)
       

        let liname = document.createElement('li');
        ul.appendChild(liname);
        liname.textContent = 'Name: '+ product.arrOfObject[i].name;

        let liprice = document.createElement('li');
        ul.appendChild(liprice);
        liprice.textContent = 'Price: '+ product.arrOfObject[i].price;

        let linotes = document.createElement('li');
        ul.appendChild(linotes);
        linotes.textContent = 'notes: '+ product.arrOfObject[i].notes;
   
    }
    
}

renderList();


function handlesubmit(event) {
    event.preventDefault();
const product=
}
