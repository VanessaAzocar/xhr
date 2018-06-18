//OBJETO LITERAL
const dog = {
  //key:value 
  raza: "quiltro",
  peso: 15,
  nombre: "Suave Lomito",
  color: "negro",
  /*para acceder en la consola a alguna de las propiedades se puede 
  dog.nombre o dog["peso"] */
}
//ARREGLOS
Object.entries(dog) //y aparecen todas las propiedades
-> (4) [Array(2), Array(2), Array(2), Array(2)]
0:(2) ["raza", "quiltro"]
1:(2) ["peso", 15]
2:(2) ["nombre", "Suave Lomito"]
3:(2) ["color", "negro"]
length:4
__proto__:Array(0)


//OBJETO CONSTRUCTOR
class Person {
  constructor (name, lastName) {
    this.name = name,
    this.lastName = lastName
  }
  greeting () {
    console.log ("hola a todas! mi nombre es ${this.name} ${this.lastName}");
    /*console.log ("Hola a todas! mi nombre es " + this.name + this.lastName);*/
  }
}
let miranda = new Person("Miranda", "Naranjo"); //miranda es un objeto
miranda.greeting(); //ejecuta método

// sirve proto para tener la informacion de cuando son muchos codigos
miranda._proto_;// padre de la instancia (class Person)
miranda._proto_._;// padre del objeto constructor Person

//para agregar una propiedad a miranda se deberia
miranda.age = 28; // agregar PROPIEDAD

//un tipo de metodo: hasOwnProperty() ejemplo
miranda.hasOwnProperty("age"); //pregunta si miranda tiene la propiedad de age
->true //respuesta
miranda.hasOwnProperty("gender"); //pregunta si miranda tiene la propiedad de gender
->false //respuesta
miranda.hasOwnProperty("greeting"); //el metodo no es especifico, todos lo tienes
->false //respuesta

// OTRO
let fabian = new Person("Fabián", "Bravo");

//para comprobar que es igual que miranda
miranda._proto_ === fabian._proto_
->true

fabian.greeting()
-> Hola a todas! mi nombre es Fabian Bravo

//para agregar un nuevo METODO (un texto) siempre debe ir proto para que lo agregue al prototipo 
// pero indicandoselo a la instancia del objeto, todos los objetos afectan al padre y los hijos
fabian._proto_.goodbye = function() {return "Chao pescao"}


//hacer una instancia nueva con las propiedades de miranda pero solo las propiedades que tenga coach// son objetos que heredan propiedades de su padre pero pueden tener propiedades independientes
class Coach extends Person {
  constructor (name, lastName) {
    super(name, lastName);
    this.track = "Front End";
  }
}

let majo = new Person("Majo","Salazar")

let ale = new Coach("Alexandra", "Neira"); 
-> name: Alexandra lastName: Neira  this.track=Front End //devuelve




