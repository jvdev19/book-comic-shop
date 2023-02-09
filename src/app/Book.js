const _private = new WeakMap(); // > 1

// 1. Llamamos al objeto WeakMap para hacer el apaño de las propiedades privadas

// 2. La clase constructora siempre se ejecuta por defecto al realizar la instancia, con o sin parámetros.

// 3. Para no crear confusiones, a las propiedades le ponemos los mismos nombres que sus parámetros. Recordemos que el guión bajo, tanto en la instancia de weakmap, como en estas propiedades, es una convención que indica que las propiedades son privadas.

//4. El método set de la instancia de weakmap recibe como parámetro el objeto que vamos a instanciar (this) y las propiedades que le vamos a asignar. En la sintaxis, las propiedades hay que pasárselas entre corchetes como si fuera un objeto.

//5. En este punto las propiedades no son accesibles. Pero no eso no tiene sentido, queremos algunas privadas (solo lectura), y otras públicas (lectura y escritura). A continuación entran los getters y los setters, que nos permiten, respectivamente, la lectura y la escritura de la propiedad. Recordemos que estos son ya otros métodos, con lo cual lo hacemos fuera del constructor. Vamos a setear todas las propiedades como privadas, exceptuando el precio. El título y el autor del libro no van a cambiar, pero Imaginémonos que en algún momento, al precio le aplicamos un descuento. Para ello, dejaremos esta propiedad accesible.

// Nota (5): 
// -------
// Cuando tenemos que preguntar por la propiedad (en este caso con un console log, que haremos en los tests iniciales en index.js pero da igual el caso. Además, esos tests luego los borraremos cuando creemos la UI), lo de los guiones bajos lía un poco al principio, y además es una convención para aclararse entre desarrolladores. Quedémonos que tenemos que consultar a lo que se indica como parámetro en la función constructora.


//6. Vamos a crear el método getAllData. La clase Comic también lo heredará, y aplicacremos el concepto de "polimorfismo", que en este caso, basicamente es traerse las propiedades de ese método con "super" desde Book a Comic, y añadirle algo más a la función, en este caso, le pediremos que muestre en la interfaz el, o los nombres de los ilustradores, además de toda la info del libro.

//7. isInCart es una PROPIEDAD PÚBLICA, que determinará si el producto está en el carrito o no. No hace falta meterla en el objeto properties, que es privado.


// Nota (6):
// ------
// He estado a punto de borrar getAllData() ya que para renderizar el grid, se me hacía demasiado complejo recorrer lo que me devolvía. No obstante, no voy a borrar la función, porque puede ser interesante para mostrar toda la información de un mismo producto en individual. Obviamente, esto es muy, muy refactorizable, pero por no eternizar el ejercicio.


export class Book {
    constructor(title, author, price) { // > 2
        const properties = { // > 3
            _title: title,
            _author: author,
            _price: price
        }
        _private.set(this, {properties}); // > 4
        
        // this.isInCart = false;
    }

    
    get title(){ // > 5
        return _private.get(this).properties['_title'];
    }
    get author(){ // > 5
        return _private.get(this).properties['_author'];
    }
    get price(){ // > 5
        return _private.get(this).properties['_price'];
    }
    set price(newPrice){ // > 5
        return _private.get(this).properties['_price'] = newPrice;
    }

//    addToCart(){
//        this.isInCart = true;
//    }

    getAllData() {// > 6 
        let data = [this.title, this.author, this.price];
        return data;
    }
}