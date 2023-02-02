const { Book } = require('./Book');
const { Comic } = require('./Comic');
const { Ui } = require('./Ui');

// -->> El fichero index.js siempre será el fichero que se encargará de arrancar la app en nuestro entorno de desarrollo. Al compilar para producción, veremos cómo se genera una carpeta /dist, con un bundle.js donde irá todo el código compilado.

const book1 = new Book('Carrie', 'Stephen King', 20);
const ui = new Ui("#app");
const comic1 = new Comic('The Killing Joke', 'Alan Moore', 150, ['B.B','J.H'] );

(function () {
    let bookData = book1.getAllData();
    let comicData = comic1.getAllData();
    ui.renderData(bookData);
    ui.renderData(comicData);
})();



/*
Tests (borrar al terminar):
----------------------------
console.log(`Título: ${book1.title} / Autor: ${book1.author} / Precio: ${book1.price} €`);
book1.price = 10;
console.log(`Descuento del 50% aplicado sobre el libro "${book1.title}" / Precio: ${book1.price} €`);

book1.author = 'Ana Rosa Quintana';

console.log(`El autor sigue siendo ${book1.author}, la propiedad es privada.`);
comic1.getAllData(); 
*/

