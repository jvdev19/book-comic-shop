// 1. Ahora estamos poniendo esta clase genérica para toda la interfaz de usuario. Iremos pasando como parámetro al constructor los elementos de interfaz de usuario. Si hay demasiados, habría que separar esta clase, en varias, que representen los elementos de la interfaz.

export class Ui {
    constructor(container) {
        this.container = document.querySelector(container);
    }
    createGrid() {
        this.container.innerHTML +=`<div class="product-grid"></div>`;
    }

    renderProductList(container, products){
        let i = 0;
        container.innerHTML += `<h3> <strong>Lista de libros</strong> </h3> <hr>`;
        
        products.forEach((product, i) => { 
            container.innerHTML += `<ul>`;
            
            container.innerHTML += `<p><b>Libro</b></p>`;
            container.innerHTML += `<li>${product.title}</li> `;
            container.innerHTML += `<li>${product.author}</li> `;
            container.innerHTML += `<li>${product.price} €</li> `;
            
            if (product.illustrators) {
                let illustrators = product.illustrators;
                container.innerHTML += `<p style="padding-left:25px; display:block;"><i>Ilustradores</i></p>`;
                container.innerHTML += `<ul>`;
                illustrators.forEach(illustrator => {            
                    container.innerHTML += `<li style="padding-left:25px; display:block;">${illustrator}</li>`;
                });
                container.innerHTML += `</ul>`;
            }
            
            container.innerHTML += `</ul>`;
            container.innerHTML += `<button id="addProduct-${i}">Añadir producto ${i}</button>`;
        });
    }
    
    
    renderProductCart(container, products){
        console.log(products);
        container.innerHTML += `<br><br> <h3> <strong>Carrito de la compra</strong> </h3> <hr>`;
        container.innerHTML += `<p> <strong>Cantidad:</strong> ${products.length} </p>`;
        container.innerHTML += `<p> <strong>Productos:</strong></p>`;
        products.forEach(product => {            
            container.innerHTML += `<p> >> ${product.title} / ${product.author} / ${product.price} </p>`;

            if (product.illustrators) {
                let illustrators = product.illustrators;
                container.innerHTML += `<p style="padding-left:25px; display:block;"><i>Ilustradores</i></p>`;
                container.innerHTML += `<ul>`;
                illustrators.forEach(illustrator => {            
                    container.innerHTML += `<li style="padding-left:25px; display:block;">${illustrator}</li>`;
                });
                container.innerHTML += `</ul>`;                
            }

        });
    }
}