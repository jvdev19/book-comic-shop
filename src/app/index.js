const { Book } = require('./Book');
const { Comic } = require('./Comic');

//Tests:
const book1 = new Book('Carrie', 'Stephen King', 20);
console.log(`Título: ${book1.title} / Autor: ${book1.author} / Precio: ${book1.price} €`);

book1.price = 10;
console.log(`Descuento del 50% aplicado sobre el libro "${book1.title}" / Precio: ${book1.price} €`);

book1.author = 'Ana Rosa Quintana';

console.log(`El autor sigue siendo ${book1.author}, la propiedad es privada.`);