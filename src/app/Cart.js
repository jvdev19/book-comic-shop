export class Cart {
    constructor(){
        this.inCartProducts = [];
    }
    addProducts(products){        
        this.inCartProducts.push(products);
    }
}