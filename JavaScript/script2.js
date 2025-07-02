// let cart = {};

// const products = [
//   { id: 1, name: "Product 1", price: 25 },
//   { id: 2, name: "Product 2", price: 45 },
//   { id: 3, name: "Product 3", price: 60 },
// ];

// const showProducts = () => {
//   products.map((val) => {
//     let str = `${val.id}-${val.name}-${val.price}`;
//     console.log(str);
//   });
// };
// showProducts();

// const addToCart = (productId) => {
//   const product = products.find(p => p.id === productId);
//   if (product) {
//     if (cart[productId]) {
//       cart[productId].quantity += 1;
//     } else {
//       cart[productId] = { ...product, quantity: 1 };
//     }
//     console.log(`${product.name} added to cart.`);
//   } else {
//     console.log("Product not found.");
//   }
// };

// addToCart(1);
// const showCart = () => {
//   let str = "";
//   for (let key in cart) {
//     const item = cart[key];
//     str += `${item.name} - ₹${item.price} x ${item.quantity}\n`;
//   }
//   console.log("Cart Items:\n" + str);
// };
// showCart();


let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 45 },
  { id: 3, name: "Product 3", price: 60 },
];

const showproducts = () => {
    products.map(val => {
        let str = `${val.id} - ${val.name} - ${val.price}`;
        console.log(str);
    })
}

showproducts();

const addToCart = (productid) =>{
    let product = products.find(p =>
        p.id === productid
    )
    if(product){
        if(cart[productid]){
            cart[productid].quantity += 1;
        }
        else{
            cart[productid] = {...product , quantity : 1};
        }
        console.log(`${product.name} added to the cart`)
    }
    else{
        console.log("no product found");
    }
}
addToCart(1);

const showCart = () =>{
    let str = "";
    for(let key in cart){
        const item = cart[key];
        str += `${item.name} - ${item.price} x ${item.quantity}\n`;
    }
  console.log("Cart Items:\n" + str);
    
}

const total = () =>{
    let sum = 0;
    for(key in cart){
        const item = cart[key];
        sum += item.price * item.quantity;
    }
    console.log(sum);
}

showCart();
addToCart(1);


addToCart(2);
showCart();
total();
