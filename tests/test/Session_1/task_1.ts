const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 599, inStock: false },
  { id: 3, name: "Tablet", price: 399, inStock: true },
  { id: 4, name: "Headphones", price: 199, inStock: true },
  { id: 5, name: "Smartwatch", price: 249, inStock: false },
  { id: 6, name: "Monitor", price: 299, inStock: true },
  { id: 7, name: "Keyboard", price: 89, inStock: true },
  { id: 8, name: "Mouse", price: 49, inStock: false },
  { id: 9, name: "Printer", price: 179, inStock: true },
  { id: 10, name: "Webcam", price: 99, inStock: true }
];

const cleanList = products
  .filter(({ inStock }) => inStock)
  .map(({ name, price }) => `Product: ${name}, Price: $${price}`);

console.log(cleanList);