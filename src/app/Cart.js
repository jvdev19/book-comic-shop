export class Cart {
    constructor() {
        this.inCartProducts = [];
    }
    
    addProduct(product) {
        this.inCartProducts.push(product);
    }

    deleteProduct(product) {
        let indexToDelete = this.inCartProducts.indexOf(product);
        let updatedCart = [];
        this.inCartProducts.forEach(inCartPoduct => {
            if (this.inCartProducts.indexOf(inCartPoduct) !== indexToDelete) {
                updatedCart.push(inCartPoduct);
            }
        });
        this.inCartProducts = updatedCart;
    }
}