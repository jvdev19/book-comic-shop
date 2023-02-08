// 1. Ahora estamos poniendo esta clase genérica para toda la interfaz de usuario. Iremos pasando como parámetro al constructor los elementos de interfaz de usuario. Si hay demasiados, habría que separar esta clase, en varias, que representen los elementos de la interfaz.

export class Ui {
    constructor(container) {
        this.container = document.querySelector(container);
    }
    createGrid() {
        this.container.innerHTML +=`<div class="product-grid"></div>`;
    }

    renderProductList(container, products){
        container.innerHTML += `<h3> <strong>Lista de libros</strong> </h3> <hr>`;
        
        products.forEach(product => {    
            container.innerHTML += `<ul>`;
            
            container.innerHTML += `<p><b>Libro</b></p>`;
            container.innerHTML += `<li>${product.title}</li> `;
            container.innerHTML += `<li>${product.author}</li> `;
            container.innerHTML += `<li>${product.price} €</li> `;
            
            if (product.illustrators) {
                let illustrators = product.illustrators;
                container.innerHTML += `<ul>`;
                container.innerHTML += `<p><i>Ilustradores</i></p>`;
                illustrators.forEach(illustrator => {            
                    container.innerHTML += `<li>${illustrator}</li>`;
                });
                container.innerHTML += `<ul>`;
            }
            
            container.innerHTML += `</ul>`;
        });
    }
    
    
    renderProductCart(container, cart){
        console.log(cart);
        container.innerHTML += ` <br><br> <h3> <strong>Carrito de la compra</strong> </h3> <hr>`;
        container.innerHTML += `<p> <strong>Cantidad:</strong> ${cart.length} </p>`;
        container.innerHTML += `<p> <strong>Productos:</strong> ${cart.length} </p>`;
    }
}