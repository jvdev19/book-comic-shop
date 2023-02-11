// 1. Ahora estamos poniendo esta clase genérica para toda la interfaz de usuario. Iremos pasando como parámetro al constructor los elementos de interfaz de usuario. Si hay demasiados, habría que separar esta clase, en varias, que representen los elementos de la interfaz.

export class Ui {
    constructor() {
        this.app = document.querySelector('#app');
        this.productGrid = document.querySelector('#productGrid');
        this.cart = document.querySelector('#cart');
    }

    renderProductList(products){
        this.productGrid.innerHTML += `<h3> <strong>Lista de libros</strong> </h3> <hr>`;
        
        products.forEach((product, i) => { 
            this.productGrid.innerHTML += `<ul>`;
            
            this.productGrid.innerHTML += `<p><b>Libro</b></p>`;
            this.productGrid.innerHTML += `<li>${product.title}</li> `;
            this.productGrid.innerHTML += `<li>${product.author}</li> `;
            this.productGrid.innerHTML += `<li>${product.price} €</li> `;
            
            if (product.illustrators) {
                let illustrators = product.illustrators;
                this.productGrid.innerHTML += `<p style="padding-left:25px; display:block;"><i>Ilustradores</i></p>`;
                this.productGrid.innerHTML += `<ul>`;
                illustrators.forEach(illustrator => {            
                    this.productGrid.innerHTML += `<li style="padding-left:25px; display:block;">${illustrator}</li>`;
                });
                this.productGrid.innerHTML += `</ul>`;
            }
            
            this.productGrid.innerHTML += `</ul>`;
            this.productGrid.innerHTML += `<button id="addProduct-${i}">Añadir producto ${i}</button>`;
        });
    }
    
    
    renderProductCart(products){
//        this.cart.innerHTML += `<br><br> <h3> <strong>Carrito de la compra</strong> </h3> <hr>`;
        this.cart.innerHTML += `<p> <strong>Cantidad:</strong> ${products.length} </p>`;
//        this.cart.innerHTML += `<p> <strong>Productos:</strong></p>`;
        products.forEach(product => {
            this.cart.innerHTML += `<p> >> ${product.title} / ${product.author} / ${product.price} </p>`;

            if (product.illustrators) {
                let illustrators = product.illustrators;
                this.cart.innerHTML += `<p style="padding-left:25px; display:block;"><i>Ilustradores</i></p>`;
                this.cart.innerHTML += `<ul>`;
                illustrators.forEach(illustrator => {            
                    this.cart.innerHTML += `<li style="padding-left:25px; display:block;">${illustrator}</li>`;
                });
                this.cart.innerHTML += `</ul>`;
            }

        });
    }
}