const { Book } = require('./Book');
const { Comic } = require('./Comic');
const { Cart } = require('./Cart');
const { Ui } = require('./Ui');

// -->> El fichero index.js siempre será el fichero que se encargará de arrancar la app en nuestro entorno de desarrollo. Al compilar para producción, veremos cómo se genera una carpeta /dist, con un bundle.js donde irá todo el código compilado.

const bookCarrie = new Book('Carrie', 'Stephen King', 20);
const comicTheKillingJoke = new Comic('The Killing Joke', 'Alan Moore', 150, ['B.B','J.H'] );
const cart = new Cart();
const products = [bookCarrie, comicTheKillingJoke];
const ui = new Ui("#app");

//Esta función autoejecutable arrancará toda la app.
(function () {
    ui.createGrid();
    ui.renderProducts(ui.container, products);
})();



// Tests (borrar al terminar):
// ----------------------------

//console.log(bookCarrie.getAllData()[0]); ---> Ver la nota del punto 6 en el fichero Book.js
cart.addProducts(['Libro1','Libro2']);
console.log(cart);

