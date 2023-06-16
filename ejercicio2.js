//* ====== EJERCICIO 2 ======

const alumnosRegulares = ["Pablo", "Jorge", "Laura", "Francisco", "Carla"];
const alumnosEgresados = [];

//* Contamos con 2 (dos) arreglos, un listado con alumnos regulares y otro listado con alumnos egresados.

//* CONSIGNA: Crear una función que reciba 3 (tres) parámetros, un arreglo con el listado de alumnos regulares,
//* otro arreglo con el listado de alumnos egresados, y un tercer parámetro indicando el nombre del alumno que desea
//* pasar de "regular" a "egresado". La función debe devolver el listado de alumnos egresados.
//* Nota: El primero que egresa debe ser el primero de la lista "alumnosEgresados"
//* En caso de no contar con mas alumnos regulares devolver un objeto con el siguiente formato:
//* {
//*   ok: false,
//*   msg: 'Ya no existen mas alumnos regulares'
//* }

//* En caso de que el alumno pasado como argumento no se encuentre, devolver false.

function pasarAegresado(alumnosRegulares, alumnosEgresados, nombreAlumno) {
    if (alumnosRegulares.length === 0) {
        return {
            ok: false,
            msg: "Ya no existen alumnos regulares"
        };
    }
    const indiceAlumno = alumnosRegulares.indexOf(nombreAlumno);

    if (indiceAlumno !== -1) {
        alumnosRegulares.splice(indiceAlumno, 1);
        alumnosEgresados.unshift(nombreAlumno);
    }

    return alumnosEgresados;
}

console.log(pasarAegresado(alumnosRegulares, alumnosEgresados, "Pablo"));
console.log(pasarAegresado(alumnosRegulares, alumnosEgresados, "Jorge"));
console.log(pasarAegresado(alumnosRegulares, alumnosEgresados, "Laura"));
console.log(pasarAegresado(alumnosRegulares, alumnosEgresados, "Francisco"));
console.log(pasarAegresado(alumnosRegulares, alumnosEgresados, "Carla"));
console.log(pasarAegresado(alumnosRegulares, alumnosEgresados, "Pablo"));