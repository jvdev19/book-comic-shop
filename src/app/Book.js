const _private = new WeakMap(); // > 1

// 1. Llamamos al objeto WeakMap para hacer el apaño de las propiedades privadas

// 2. La clase constructora siempre se ejecuta por defecto al realizar la instancia, con o sin parámetros.

// 3. Para no crear confusiones, a las propiedades le ponemos los mismos nombres que sus parámetros. Recordemos que el guión bajo, tanto en la instancia de weakmap, como en estas propiedades, es una convención que indica que las propiedades son privadas.

//4. El método set de la instancia de weakmap recibe como parámetro el objeto que vamos a instanciar (this) y las propiedades que le vamos a asignar. En la sintaxis, las propiedades hay que pasárselas entre corchetes como si fuera un objeto.

class Book {
    constructor(title, author, price) { // > 2
        const properties = { // > 3
            _title: title,
            _author: author,
            _price: price
        }
        _private.set(this, {properties}); // > 4
    }
    
    //5. En este punto las propiedades no son accesibles. Pero no eso no tiene sentido, queremos algunas privadas (solo lectura), y otras públicas (lectura y escritura). A continuación entran los getters y los setters, que nos permiten, respectivamente, la lectura y la escritura de la propiedad. Recordemos que estos son ya otros métodos, con lo cual lo hacemos fuera del constructor. Vamos a setear todas las propiedades como privadas, exceptuando el precio. El título y el autor del libro no van a cambiar, pero Imaginémonos que en algún momento, al precio le aplicamos un descuento. Para ello, dejaremos esta propiedad accesible.
    
    get title(){
        return _private.get(this).properties['_title'];
    }
    get author(){
        return _private.get(this).properties['_author'];
    }
    get price(){
        return _private.get(this).properties['_price'];
    }
    set price(newPrice){
        return _private.get(this).properties['_price'] = newPrice;
    }
}

const book1 = new Book('Carrie', 'Stephen King', 20);
console.log(`Título: ${book1.title} / Autor: ${book1.author} / Precio: ${book1.price} €`);

book1.price = 10;
console.log(`Descuento del 50% aplicado sobre el libro "${book1.title}" / Precio: ${book1.price} €`);

book1.author = 'Ana Rosa Quintana';

console.log(`El autor sigue siendo ${book1.author}, la propiedad es privada.`);


// Nota: 
// -------
// Cuando tenemos que preguntar por la propiedad (en este caso con un console log, pero da igual el caso), lo de los guiones bajos lía un poco al principio, y además es una convención para aclararse entre desarrolladores. Quedémonos que tenemos que consultar a lo que se indica como parámetro en la función constructora.



/* PARA EL PRÓXIMO DÍA: 

Instalar Node para poder separar el código de tests, y la clase Comic.

*/