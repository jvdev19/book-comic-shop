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
}