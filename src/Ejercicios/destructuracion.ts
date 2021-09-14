/*Destructuracion de Objetos*/ 

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio:2015
    }

}
/*Aqui empieza la destructuracion y es mucho mas facil para no llamar reproductor.volumen, etc...*/

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;


// console.log('El volumen actual es: ', volumen);
// console.log('El segundo actual es: ', segundo);
// console.log('la cancion actual es: ', cancion);
// console.log('El autor actual es: ', autor);
// console.log('El anio actual es: ', anio);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz;

// console.log('Personaje 1: ', p1 );
// console.log('Personaje 2: ', p2 );
console.log('Personaje 3: ', p3 );