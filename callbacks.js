////* SetTimeout es una funcion de Javascript que va a ejecutar una funcion callbacks despues de un determinado tiempo
////* Un callbacks es una funcion que se pasa como parametro para que lo ejecute la otra funcion, Callbacks 
////* ¿callbacks se llama a la funcion que va como parametro o a la fucion que tiene una funcion como parametro? 
////* Callbacks se la llama a la funcion que va como parametro, es algo que se va a ejecutar en el futuro, no sabemos cuando. 
////* En este caso si sabemos porque le colocamos el tiempo 2 segundos, pero generalmente usamos Callbacks*/ 

/*
setTimeout(() => {
    console.log(`Hola Mundo`);
}, 2000);*/


/* b) 

const saludar = () => {
    console.log(`Hola Mundo`);
}

setTimeout(saludar, 2000);*/

//// Ejemplo de que somos un servicio que devolvemos un usuario*/
//// Nos van a pasar un ID y nosotros le vamos a devolver el objeto de un usuario*/
//// 1ro) Vamos a definir una función, 
//// 2do) pasamos por parámetro el ID, 
//// 3ro vamos a definir dentro de la funcion, un objeto 


const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: `Fernando`
    } 

    setTimeout(() => {
        callback(user);
    }, 1000);
}

const imprimirUsuario = (usuario) => {
    console.log(usuario.nombre.toUpperCase());
}
getUsuarioById(10, imprimirUsuario);
