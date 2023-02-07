export class Cart {
    constructor(){
        this.inCartProducts = [];
    }
    addProduct(product){        
        this.inCartProducts.push(product);
    }
    deleteProduct(product){
       console.log(this.inCartProducts.slice(0,product));
    }
}