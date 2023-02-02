const { Book } = require('./Book'); // > 1

// 1. Precisamos de llamar a la clase padre (Como si fuera un include de PHP)

// 2. En el constructor incluimos las propiedades, aunque las repitamos desde Book, la palabra reservada "extends" no nos libra de hacer esto. Eso sí, si tiene nuevas, se las añadimos

// 3. Con la palabra reservada "super", indicamos qué propiedades serán las que nos traigamos de la clase padre.

// 4. Como podemos ver, no es estríctamente necesario que utilicemos los getters y setters, para definir propiedades, lo podemos hacer directamente en el constructor. 

//El tema de los getters y los setters lo haremos solo cuando queramos trabajar con propiedades públicas y privadas. En caso de que no necesitemos clasificarlas por estos criterios, serán todas públicas, como ejemplificamos en este caso. En un caso real, quizá los ilustradores también debería ser una propiedad privada, pero lo ponemos así para que se vea que también podemos definir las propiedades de esta forma, y más rápido. De hecho, este es un desarrollo de aplicación 100% didáctico, y en un caso real, entraría el backend también, y probablemente la arquitectura de la aplicación sería diferente. Habría que valorar hasta que punto se mete el frontend en estas cosas.


export class Comic extends Book {
    constructor(title, author, price, illustrators) { // > 2 
        super(title, author, price); // > 3
        this.illustrators = illustrators; // > 4
    }

    getAllData(){        
        let data = super.getAllData();
        data.push(this.illustrators); 
        return data;
    }
}