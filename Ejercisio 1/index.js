/*
Crear un algoritmo que le permita al usuario ingresar:
Nombre de un estudiante, 
Cantidad de materias o asignaturas  a matricular.
Valor de cada materia o asignatura, 
Valor de la papelería:  que tiene un costo fijo de $20.000 y 
el carné con valor de $8.000. Descuento del 20% sobre el costo de las materias.
Por medio del algoritmo imprimir el valor total de las materias que matriculó 
el estudiante con el descuento del 20% más los costos fijos. 
*/

const inputNombre = document.querySelector('#nombreEstudiante'),
        inputCantMaterias = document.querySelector('#cantidadMaterias'),
        inputVlrMaterias = document.querySelector('#costoMaterias'),
        boton = document.querySelector('#boton'),
        valorPapeleria = 20000,
        valorCarnet = 8000,
        resultadoPrrf = document.querySelector('#resultado');

boton.addEventListener('click',()=>{
    const nombreEstudiante = inputNombre.value
    const cantidadMaterias = parseInt(inputCantMaterias.value)
    const valorMateria = parseInt(inputVlrMaterias.value)

    let costoMaterias = cantidadMaterias * valorMateria
    let calculoDescuento = costoMaterias * 0.2
    console.log(calculoDescuento)
    let valorMatricula = (valorPapeleria + valorCarnet + costoMaterias) - calculoDescuento
    console.log(valorMatricula)

    let valorTexto = valorMatricula.toString().replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');

    resultadoPrrf.innerHTML = `¡Hola ${nombreEstudiante}!<br>
                                El costo de tu matrícula para ${cantidadMaterias} materias es:<br>
                                <span>$${valorTexto}</span>  
                            `;
})







