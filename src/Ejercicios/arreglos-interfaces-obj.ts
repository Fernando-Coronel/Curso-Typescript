/*Arreglos y Objetos e Interfaces*/

let habilidades: string[] = ['Diseno', 'Maquetacion', 'Interaccion'];
console.log(habilidades);

interface Personaje {
    nombre:string,
    edad: number,
    habilidades:string[],
    puebloNatal: string
}

const personaje: Personaje = {
    nombre:'fer',
    edad:29,
    habilidades: ['Diseno', 'Maquetacion', 'Interaccion'],
    puebloNatal: 'Pueblo Paleta'
};

console.log(personaje);
personaje.puebloNatal = "pueblo Paleta";