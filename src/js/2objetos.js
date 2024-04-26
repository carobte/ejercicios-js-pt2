console.log("Ejercicios con Objetos")

// Ejercicios con Objetos en JavaScript 

// 1. Crea un objeto llamado persona con propiedades como nombre, edad y ciudad. 

console.group("Ejercicio 1")

let persona = {
    nombre: "caro",
    edad: 26,
    ciudad: "medellin"
}

console.log(persona)

console.groupEnd()

// 2. Agrega una propiedad adicional al objeto persona que represente su ocupación. 

console.group("Ejercicio 2")

persona.ocupacion = "psicologa"

console.log(persona)

console.groupEnd()

// 3. Accede a una propiedad del objeto persona y muestra su valor en la consola. 

console.group("Ejercicio 3")

console.log(persona.nombre)

console.groupEnd()

// 4. Crea otro objeto llamado libro con propiedades como título, autor y año de publicación. 

console.group("Ejercicio 4")

let libro = {
    titulo: "Harry Potter",
    autor: "J.K Rowling",
    año: 1997
}

console.log(libro)

console.groupEnd()

// 5. Combina las propiedades de los objetos persona y libro en un nuevo objeto llamado informacion. 

console.group("Ejercicio 5")

let informacion = { ...persona, ...libro }
console.log(informacion)

console.groupEnd()

// 6. Cambia el valor de una propiedad en el objeto persona. 

console.group("Ejercicio 6")

persona.ciudad = "envigado"
// persona["ciudad"] = "envigado"
console.log(persona)

console.groupEnd()

// 7. Elimina una propiedad del objeto libro. 

console.group("Ejercicio 7")

delete libro.año
console.log(libro)

console.groupEnd()

// 8. Crea un objeto llamado coche con propiedades como modelo, marca y año. 

console.group("Ejercicio 8")

let coche = {
    modelo: "picanto",
    marca: "kia",
    año: 2024
}

console.log(coche)

console.groupEnd()

// 9. Muestra todas las propiedades del objeto coche en la consola. 

console.group("Ejercicio 9")

for (const propiedad in coche) {
    console.log(propiedad)
}

console.groupEnd()

// 10. Agrega un método al objeto coche que imprima un mensaje en la consola. 

console.group("Ejercicio 10")

coche.imprimirMensaje = (mensaje) => {
    console.log(mensaje)
}

console.log(coche)

console.groupEnd()

// 11. Crea un objeto llamado circulo con propiedades como radio y color. 

console.group("Ejercicio 11")

let circulo = {
    radio: 5,
    color: "azul"
}

console.log(circulo)

console.groupEnd()

// 12. Calcula el área del círculo utilizando la fórmula A = πr² y muestra el resultado. 

console.group("Ejercicio 12")

console.groupEnd()

// 13. Crea un objeto llamado rectangulo con propiedades como ancho y alto. 

console.group("Ejercicio 13")

console.groupEnd()

// 14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (ancho + alto) y muestra el resultado. 

console.group("Ejercicio 14")

console.groupEnd()

// 15. Combina las propiedades de los objetos circulo y rectangulo en un nuevo objeto llamado formas. 

console.group("Ejercicio 15")

console.groupEnd()

// 16. Crea un objeto llamado computadora con propiedades como marca, modelo y precio. 

console.group("Ejercicio 16")

console.groupEnd()

// 17. Muestra el precio de la computadora en la consola. 

console.group("Ejercicio 17")

console.groupEnd()

// 18. Agrega una propiedad al objeto computadora que indique si tiene o no una tarjeta gráfica. 

console.group("Ejercicio 18")

console.groupEnd()

// 19. Crea un objeto llamado mascota con propiedades como nombre, especie y edad. 

console.group("Ejercicio 19")

console.groupEnd()

// 20. Muestra en la consola la especie de la mascota en mayúsculas. 

console.group("Ejercicio 20")

console.groupEnd()

// 21. Crea un objeto llamado fruta con propiedades como nombre y color. 

console.group("Ejercicio 21")

console.groupEnd()

// 22. Agrega un método al objeto fruta que imprima un mensaje indicando si la fruta está madura. 

console.group("Ejercicio 22")

console.groupEnd()

// 23. Crea un objeto llamado estudiante con propiedades como nombre, edad y calificaciones. 

console.group("Ejercicio 23")

console.groupEnd()

// 24. Muestra en la consola el promedio de las calificaciones del estudiante. 

console.group("Ejercicio 24")

console.groupEnd()

// 25. Agrega una propiedad al objeto estudiante que indique si ha aprobado o no. 

console.group("Ejercicio 25")

console.groupEnd()

// 26. Crea un objeto llamado bolsa con propiedades como tamaño y color. 

console.group("Ejercicio 26")

console.groupEnd()

// 27. Muestra en la consola un mensaje que indique la capacidad de la bolsa (tamaño). 

console.group("Ejercicio 27")

console.groupEnd()

// 28. Agrega un método al objeto bolsa que cambie su color. 

console.group("Ejercicio 28")

console.groupEnd()

// 29. Crea un objeto llamado telefono con propiedades como marca, modelo y sistema operativo. 

console.group("Ejercicio 29")

console.groupEnd()

// 30. Muestra en la consola un mensaje indicando el sistema operativo del teléfono. 

console.group("Ejercicio 30")

console.groupEnd()

// 31. Agrega una propiedad al objeto telefono que represente la cantidad de memoria RAM. 

console.group("Ejercicio 31")

console.groupEnd()

// 32. Crea un objeto llamado animal con propiedades como tipo y sonido. 

console.group("Ejercicio 32")

console.groupEnd()

// 33. Muestra en la consola un mensaje que indique el sonido del animal. 

console.group("Ejercicio 33")

console.groupEnd()

// 34. Agrega un método al objeto animal que imprima un mensaje indicando su tipo y sonido. 

console.group("Ejercicio 34")

console.groupEnd()

// 35. Crea un objeto llamado vuelo con propiedades como aerolínea, número de vuelo y hora de salida. 

console.group("Ejercicio 35")

console.groupEnd()

// 36. Muestra en la consola un mensaje que indique la aerolínea y el número de vuelo. 

console.group("Ejercicio 36")

console.groupEnd()

// 37. Agrega una propiedad al objeto vuelo que represente el destino del vuelo. 

console.group("Ejercicio 37")

console.groupEnd()

// 38. Crea un objeto llamado jugador con propiedades como nombre, equipo y posición. 

console.group("Ejercicio 38")

console.groupEnd()

// 39. Muestra en la consola un mensaje que indique el nombre y el equipo del jugador. 

console.group("Ejercicio 39")

console.groupEnd()

// 40. Agrega un método al objeto jugador que imprima un mensaje indicando su posición en el equipo. 

console.group("Ejercicio 40")

console.groupEnd()



