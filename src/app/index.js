const { Book } = require('./Book');
const { Comic } = require('./Comic');
const { Cart } = require('./Cart');
const { Ui } = require('./Ui');

// -->> El fichero index.js siempre será el fichero que se encargará de arrancar la app en nuestro entorno de desarrollo. Al compilar para producción, veremos cómo se genera una carpeta /dist, con un bundle.js donde irá todo el código compilado.

// Instancias Productos
const bookCarrie = new Book('Carrie', 'Stephen King', 20);
const comicTheKillingJoke = new Comic('The Killing Joke', 'Alan Moore', 150, ['B.B','J.H'] );
const bookLaSombraDelViento = new Book('La Sombra del Viento', 'Carlos Ruiz Zafón', 85);

// Instancias app
const cart = new Cart();
const ui = new Ui("#app");

// Obtenido a partir de instancias
const products = [bookCarrie, comicTheKillingJoke, bookLaSombraDelViento];



//Esta función autoejecutable arrancará toda la app.
(function () {
    
    //Consola
    //------------------------------------------------------------------------------------------------------------
    //console.log(bookCarrie.getAllData()[0]); ---> Ver la nota del punto 6 en el fichero Book.js
    cart.addProduct(products[0]);
    // products[0].isInCart = true;
    console.log(cart);
    cart.addProduct(products[1]);
    // products[1].isInCart = true;
    console.log(cart);
    cart.addProduct(products[2]);
    // products[2].isInCart = true;
    console.log(cart);
    cart.deleteProduct(products[2]);
    // products[2].isInCart = false;    
    
    
    //Vista navegador
    //------------------------------------------------------------------------------------------------------------
    ui.createGrid();
    ui.renderProductList(ui.container, products);
    ui.renderProductCart(ui.container, cart.inCartProducts);
})();




