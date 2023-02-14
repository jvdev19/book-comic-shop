// -->> El fichero index.js siempre será el fichero que se encargará de arrancar la app en nuestro entorno de desarrollo. Al compilar para producción, veremos cómo se genera una carpeta /dist, con un bundle.js donde irá todo el código compilado.

// Importar clases proyecto
const { Book } = require('./Book');
const { Comic } = require('./Comic');
const { Cart } = require('./Cart');
const { Ui } = require('./Ui');


// Instancias Productos
const bookCarrie = new Book('Carrie', 'Stephen King', 20);
const comicTheKillingJoke = new Comic('The Killing Joke', 'Alan Moore', 150, ['B.B','J.H'] );
const bookLaSombraDelViento = new Book('La Sombra del Viento', 'Carlos Ruiz Zafón', 85);
const bookDiezNegritos = new Book('Diez Negritos y no quedó ninguno', 'Agatha Christie', 97);
const bookHPotterPiedra = new Book('Harry Potter y la piedra filosofal', 'J.k. Rowling', 120);
const products = [bookCarrie, comicTheKillingJoke, bookLaSombraDelViento, bookDiezNegritos, bookHPotterPiedra];

// Instancias de la parte funcional y de la visual
const cart = new Cart();
const ui = new Ui();

// Obtenido a partir de instancias


//Esta función autoejecutable arrancará toda la app.
(function () {
    

    
    
    //Vista navegador
    //------------------------------------------------------------------------------------------------------------
    ui.renderProductList(products);
    ui.renderProductCart(cart.inCartProducts);
    
    // Asignar función para añadir producto, a evento click
    for (let i = 0; i < products.length; i++) {
        let button = document.querySelector(`#addProduct-${i}`);
        button.addEventListener('click', function test() {
            cart.addProduct(products[i]);
            ui.renderProductCart(cart.inCartProducts);
            console.log(cart.inCartProducts); 
        });  
    }
    
    // Asignar función para restar producto, a evento click
    for (let i = 0; i < products.length; i++) {
        let button = document.querySelector(`#removeProduct-${i}`);
        if (button) {
            console.log(button);
            
        }
/*         button.addEventListener('click', function test() {
            cart.deleteProduct(products[i]);
            ui.renderProductCart(cart.inCartProducts);
            console.log(cart.inCartProducts); 
        }); */
    }
    


    //Tests
    //------------------------------------------------------------------------------------------------------------
    
   


})();




