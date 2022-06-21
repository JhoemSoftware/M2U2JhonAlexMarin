/*
Crear un algoritmo que le permita al usuario ingresar:
Nombre de un estudiante, 
Cantidad de materias o asignaturas  a matricular.
Valor de cada materia o asignatura, 
Valor de la papelería:  que tiene un costo fijo de $20.000 y  el carné con valor de $8.000.
 Descuento del 20% sobre el costo de las materias.
Por medio del algoritmo imprimir el valor total de las materias que matriculó el estudiante con el descuento del 20% más los costos fijos. 
Ejercicio 2
Desarrolle un algoritmo que permita:
Leer cuatro valores numéricos y almacenarlos en las variables A, B, C y D respectivamente. 
El algoritmo debe imprimir cual es el mayor valor y cual es el menor valor. Recuerde verificar que 
los cuatro valores introducidos por el teclado sean valores distintos. 
Crear un mensaje de alerta en caso que se detecte la introducción de valores iguales.
*/

const a = document.getElementById('numUno'),
        b = document.getElementById('numDos'),
        c = document.getElementById('numTres'),
        d = document.getElementById('numCuatro'),
        boton = document.getElementById('boton'),
        parrfMayor = document.getElementById('resultadoMayor'),
        parrfMenor = document.getElementById('resultadoMenor');

boton.addEventListener('click',()=>{
    // Validar que no sean iguales
    if (a.value == b.value || a.value == c.value || a.value == d.value) {
        alert('No pueden haber números repetidos')
    } else if (b.value == c.value || b.value == d.value){
        alert('No pueden haber números repetidos')
    } else if (c.value == d.value){
        alert('No pueden haber números repetidos')
    } else {
        // Calcular el mayor
        let valorMayor = Math.max(a.value,b.value,c.value,d.value)
        if (valorMayor == a.value) {
            parrfMayor.innerHTML = 'El número mayor el primero que fue: ' + valorMayor;
        } else if (valorMayor == b.value){
            parrfMayor.innerHTML = 'El número mayor el segundo que fue: ' + valorMayor;
        } else if (valorMayor == c.value){
            parrfMayor.innerHTML = 'El número mayor el tercero que fue: ' + valorMayor;
        } else if (valorMayor == d.value){
            parrfMayor.innerHTML = 'El número mayor el cuarto que fue: ' + valorMayor;
        }
        // Calcular el menor
        let valorMenor = Math.min(a.value,b.value,c.value,d.value)
        if (valorMenor == a.value) {
            parrfMenor.innerHTML = 'El número menor el primero que fue: ' + valorMenor;
        } else if (valorMenor == b.value){
            parrfMenor.innerHTML = 'El número menor el segundo que fue: ' + valorMenor;
        } else if (valorMenor == c.value){
            parrfMenor.innerHTML = 'El número menor el tercero que fue: ' + valorMenor;
        } else if (valorMenor == d.value){
            parrfMenor.innerHTML = 'El número menor el cuarto que fue: ' + valorMenor;
        }
    }
})







