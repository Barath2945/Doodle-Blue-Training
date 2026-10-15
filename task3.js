const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
  { name: "Headphones", price: 2000 }
];

const filteredProducts = products.filter(product => product.price > 1000);
console.log(filteredProducts);

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);