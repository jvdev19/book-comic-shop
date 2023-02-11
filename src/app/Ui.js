// 1. Ahora estamos poniendo esta clase genérica para toda la interfaz de usuario. Iremos pasando como parámetro al constructor los elementos de interfaz de usuario. Si hay demasiados, habría que separar esta clase, en varias, que representen los elementos de la interfaz.

export class Ui {
    constructor(container) {
        this.container = document.querySelector(container);
    }
    createGrid() {
        this.container.innerHTML +=`<div class="product-grid"></div>`;
    }

    renderProductList(products){
        this.container.innerHTML += `<h3> <strong>Lista de libros</strong> </h3> <hr>`;
        
        products.forEach((product, i) => { 
            this.container.innerHTML += `<ul>`;
            
            this.container.innerHTML += `<p><b>Libro</b></p>`;
            this.container.innerHTML += `<li>${product.title}</li> `;
            this.container.innerHTML += `<li>${product.author}</li> `;
            this.container.innerHTML += `<li>${product.price} €</li> `;
            
            if (product.illustrators) {
                let illustrators = product.illustrators;
                this.container.innerHTML += `<p style="padding-left:25px; display:block;"><i>Ilustradores</i></p>`;
                this.container.innerHTML += `<ul>`;
                illustrators.forEach(illustrator => {            
                    this.container.innerHTML += `<li style="padding-left:25px; display:block;">${illustrator}</li>`;
                });
                this.container.innerHTML += `</ul>`;
            }
            
            this.container.innerHTML += `</ul>`;
            this.container.innerHTML += `<button id="addProduct-${i}">Añadir producto ${i}</button>`;
        });
    }
    
    
    renderProductCart(products){
        this.container.innerHTML += `<br><br> <h3> <strong>Carrito de la compra</strong> </h3> <hr>`;
        this.container.innerHTML += `<p> <strong>Cantidad:</strong> ${products.length} </p>`;
        this.container.innerHTML += `<p> <strong>Productos:</strong></p>`;
        products.forEach(product => {
            this.container.innerHTML += `<p> >> ${product.title} / ${product.author} / ${product.price} </p>`;

            if (product.illustrators) {
                let illustrators = product.illustrators;
                this.container.innerHTML += `<p style="padding-left:25px; display:block;"><i>Ilustradores</i></p>`;
                this.container.innerHTML += `<ul>`;
                illustrators.forEach(illustrator => {            
                    this.container.innerHTML += `<li style="padding-left:25px; display:block;">${illustrator}</li>`;
                });
                this.container.innerHTML += `</ul>`;
            }

        });
    }

    addProductEvent(products, cart){
        for (let i = 0; i < products.length; i++) {
            let button = document.querySelector(`#addProduct-${i}`);
            button.addEventListener('click', function test() {
                cart.addProduct(products[i]);
                console.log(cart.inCartProducts);
                // ui.renderProductCart(cart.inCartProducts); --> No repinta la interfaz. Podemos comprobarlo en la pestaña "procesadores de eventos". Al cargar asigna los eventos, pero al ejecutar un evento del objeto UI, no hace el repintado con los datos que le pasamos. A los botones se le asigna la función que, aunque antes era anónima, ahora hemos nombrado como "test", pero después, resetea la interfaz a su estado original. Tiene que haber un método en la UI que se dedique a repintar.
             });  
         }
    }
}