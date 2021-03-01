const empleados = [
    {
        id: 1,
        nombre: `Fernando`
    },
    {
        id: 2,
        nombre: `Marta`
    },
    {
        id: 3,
        nombre: `Manuel`
    }
]

const sueldos = [
    {
        id:1,
        sueldo: 1500
    },
    {
        id:2,
        sueldo: 2000
    }
]

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id );
    if (empleado){
        callback(null, empleado);
        return;
    }
    callback(new Error(`Empleado no existe`));
}

const id =5;

getEmpleadoById(id, (error, empleado) => {
    if(error) {
        console.log(`ERROR!!......`);
        console.log(error);
        return;
    }

    console.log(`El empleado: ${empleado.nombre}....`); 
});

const getSuekdoById = (id, callback) => {

    const salario = sueldos.find((s) => s.id === id);

    if (salario) {
        callback(null, salario);
        return;
    }
    callback(new Error('trabaja gratis =)'));
}

getEmpleadoById(id, (error, empleado) => {

    if (error) {
        console.log('ERRORRR');
        console.log(error);
        return;
    }

    getSueldoById(id, (error, sueldo) => {
        
        if (error) {
            console.log(El empleado ${empleado.nombre} ${error.message}!);
            return;
        }
        console.log(El empleado ${empleado.nombre} gana ${salario.sueldo});
    });
});