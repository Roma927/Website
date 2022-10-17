let cart = document.querySelectorAll('.add-to-cart');
let x = document.querySelectorAll('.fa-times-circle');
let products = [
    {
        name: "gray T-shirt",
        tag:"T-shirt",
        price:100,
        incart:0
    },
    {
        name: "gray dress",
        tag:"jenns2",
        price:180,
        incart:0
    },
    {
        name: "gray pant",
        tag:"short",
        price:150,
        incart:0
    },
    {
        name: "black T-shirt",
        tag:"women4",
        price:400,
        incart:0
    }
]
console.log(x.length);
for (let i = 0 ; i < cart.length ; i++){
    cart[i].addEventListener('click', () =>{
        cartnumbers(products[i]);
        totalprice(products[i])
    })
}
function onloadcartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartnumbers(products){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers' , productNumbers + 1 );
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers' , 1 );
        document.querySelector('.cart span').textContent =  1;
    }
    setItem(products);
}
function setItem(products){
    let cartItems = localStorage.getItem('productsIncard');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[products.tag] == undefined){
            cartItems = {
                ...cartItems,
                [products.tag]:products
            }
        }
        cartItems[products.tag].incart +=1;
    } 
    else{
        products.incart = 1;
        cartItems = {
            ...cartItems,
            [products.tag]:products
        }
    }
    localStorage.setItem("productsIncard" , JSON.stringify(cartItems));
}
function totalprice(products){
    let cartcost = localStorage.getItem('totalcost');
    console.log("My card cost is " , cartcost);
    if (cartcost != null){
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalcost", products.price + cartcost);
    }else{
        localStorage.setItem("totalcost", products.price);
    }
}
function displaycart(){
    let cartItems = localStorage.getItem("productsIncard");
    cartItems = JSON.parse(cartItems);
    let productcontanier = document.querySelector(".cart-products");
    let cartcost = localStorage.getItem('totalcost');
    console.log(cartItems);
    if (cartItems && productcontanier){
        productcontanier.innerHTML = '';
        Object.values(cartItems).map(item => {
            productcontanier.innerHTML += 
            `<div class="product">
            <i class="fas fa-times-circle"></i>
            <img src="image/${item.tag}.PNG">
            <span>${item.name}</span>
           </div>
           <div class="Price">LE${item.price},00</div>
           <div class="quantity">
           <input type="number" value="${item.incart}" step="1"> </div>
           <div class="total">
           LE${item.incart * item.price}.00</div>
           ` ;

        });

        productcontanier.innerHTML += `
        <div class="baskettotalcintainer">
        <h3 class="baskettotaltitle">  Total <h3>
        <h3 class="baskettotal">  LE${cartcost}.00 <h3>
        `;
    }
}

onloadcartNumbers();
displaycart();