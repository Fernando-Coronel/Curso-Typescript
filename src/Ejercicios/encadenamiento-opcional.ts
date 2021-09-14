interface Pasajero{
    nombre: string;
    hijos?: string[];//el signo ? significa que sea opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Fatima',
    hijos: ['Fatima', 'Leonel']
}

function imprimeHijos ( pasajero: Pasajero ) : void{

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);

}

imprimeHijos( pasajero1 );