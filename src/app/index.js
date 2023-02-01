const { Book } = require('./Book');
const { Comic } = require('./Comic');

// -->> El fichero index.js siempre será el fichero que se encargará de arrancar la app en nuestro entorno de desarrollo. Al compilar para producción, veremos cómo se genera una carpeta /dist, con un bundle.js donde irá todo el código compilado.

//Tests (borrar al terminar):
const book1 = new Book('Carrie', 'Stephen King', 20);
const comic1 = new Comic('The Killing Joke', 'Alan Moore', 150, ['B.B','J.H'] );
/* console.log(`Título: ${book1.title} / Autor: ${book1.author} / Precio: ${book1.price} €`);

book1.price = 10;
console.log(`Descuento del 50% aplicado sobre el libro "${book1.title}" / Precio: ${book1.price} €`);

book1.author = 'Ana Rosa Quintana';

console.log(`El autor sigue siendo ${book1.author}, la propiedad es privada.`); */

book1.getAllData();
comic1.getAllData();