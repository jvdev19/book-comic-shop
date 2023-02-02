// 1. Ahora estamos poniendo esta clase genérica para toda la interfaz de usuario. Iremos pasando como parámetro al constructor los elementos de interfaz de usuario. Si hay demasiados, habría que separar esta clase, en varias, que representen los elementos de la interfaz.

export class Ui {
    constructor(container) {
        this.container = document.querySelector(container);
    }
    createGrid() {
        this.container.innerHTML +=`
            <div class="product-grid"></div>
        `;
    }
    renderProducts(container, products, ...productData) {
        products.forEach(product => {
            container.appendChild(product[productData]);
        });
    }
}