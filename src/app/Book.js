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


// Nota (6):
// ------
// Habrá que pensar como llega el dato desde el objeto instanciado hasta la interfaz, ya que ahora puede que haya que crear la clase Ui.js, para pasar todo esto a la interfaz de usuario humana. ¿También es posible que podamos hacer toda la capa de interfaz directamente en index.js? Todavía tengo que darle una vuelta. De momento creamos el método, y luego ya si eso, lo borramos o lo cambiamos.




export class Book {
    constructor(title, author, price) { // > 2
        const properties = { // > 3
            _title: title,
            _author: author,
            _price: price
        }
        _private.set(this, {properties}); // > 4
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

    getAllData() {// > 6
        console.log( `FICHA OFICIAL DE ARTÍCULO: Título: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`);
    }
}