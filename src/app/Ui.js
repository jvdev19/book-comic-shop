// 1. Ahora estamos poniendo esta clase genérica para toda la interfaz de usuario. Iremos pasando como parámetro al constructor los elementos de interfaz de usuario. Si hay demasiados, habría que separar esta clase, en varias, que representen los elementos de la interfaz.

export class Ui {
    constructor() {
        this.app = document.querySelector('#app');
        this.productGrid = document.querySelector('#productGrid');
        this.cart = document.querySelector('#cart');
    }

    renderProductList(products){
        this.productGrid.innerHTML += `<h2> <strong>Lista de libros</strong> </h2>`;
        
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
        let template = `<p> <strong>Cantidad:</strong> ${products.length} </p>`;

        products.forEach((product, i) => {
            template += `<p> >> ${product.title} / ${product.author} / ${product.price} </p>`;

            if (product.illustrators) {
                let illustrators = product.illustrators;
                template += `<p style="padding-left:25px; display:block;"><i>Ilustradores</i></p>`;
                template += `<ul>`;
                illustrators.forEach(illustrator => {            
                    template += `<li style="padding-left:25px; display:block;">${illustrator}</li>`;
                });
                template += `</ul>`;
            }
            template += `<button id="removeProduct-${i}">Quitar del carrito producto ${i}</button>`;
            template += `<hr/>`;
        });
        this.cart.innerHTML = template;
    }
}