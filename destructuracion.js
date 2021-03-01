const personaje = {
    nombre: `Pepe`,
    apellido: `Argento`,
    profesion: `Zapatero`,
    getDescription() { 
        return `${nombre} ${apellido} es ${profesion}`
    }
}

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;
console.log(nombre, apellido, profesion);*/ ////yo quiero sacar estos valores y usarlos en mi código*/


//// Ahora yo quiero sacar estos valores y usarlos en mi código, Vamos a destructurar estos valores en una constante en una sola línea*/ 

/*const {nombre, apellido, profesion, edad = 50} = personaje;   
console.log(nombre, apellido, profesion, edad);*/            




////* destructuracion en una funcion, en el parametro de la funcion ya destructuramos la entrada*/

/*const imprimirPersonaje = ({nombre, apellido, profesion, edad = 50}) => {  
    console.log(nombre, apellido, profesion, edad);
}

imprimirPersonaje (personaje);*/

////* destructuracion de una funcion con araid*/
/* ejemplo a) queremos sacar otras constantes de la constante
const personajes = [`Pepe`, `Moni`, `Koki`];

const p1 = personajes [0]; 
const p2 = personajes [1];
const p3 = personajes [2];

console.log(p1); 
 
////* ejemplo b)  Podemos destructurar, directamente en constantes y seguimos queriendo que nos tire todos los indices (personajes)*/
/*const personajes = [`Pepe`, `Moni`, `Koki`];
const[p1, p2, p3] = personajes;
 console.log(p1, p2, p3);*/
 
 ////* ejemplo c) destructuracion en una funcion cuando queremos nos tire un solo personaje, dejamos las comas para indicar que al indice cero ni al uno queremos*/
 /*const personajes = [`Pepe`, `Moni`, `Koki`];
 const[,,p3] = personajes; 
 
 console.log(p3);*/