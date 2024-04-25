// Ejercicios Arrays

// 1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes.

console.groupCollapsed("Ejercicio 1")

let frutas = ["manzana", "pera", "fresa", "kiwi", "mango", "mora", "arandano"]
console.log(frutas)

console.groupEnd()

// 2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola.

console.groupCollapsed("Ejercicio 2")

frutas.forEach(fruta => {
    console.log(fruta)
})

console.groupEnd()

// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la consola.

console.groupCollapsed("Ejercicio 3")

frutas.forEach(fruta => {
    console.log(fruta.toUpperCase())
})

console.groupEnd()

// 4. Crea un array llamado números que contenga los números del 1 al 10.

console.groupCollapsed("Ejercicio 4")

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeros)

console.groupEnd()

// 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la consola.

console.groupCollapsed("Ejercicio 5")

for (const numero of numeros) {
    console.log(numero)
}

console.groupEnd()

// 6. Agrega una nueva fruta al final del array frutas.

console.groupCollapsed("Ejercicio 6")

frutas.push("piña")
console.log(frutas)

console.groupEnd()

// 7. Elimina el segundo elemento del array números.

console.groupCollapsed("Ejercicio 7")

numeros.splice(1, 1) // parametros -> indice, cantidad a eliminar
console.log(numeros)

console.groupEnd()

// 8. Invierte el orden de los elementos en el array frutas.

console.groupCollapsed("Ejercicio 8")

frutas.reverse()
console.log(frutas)

console.groupEnd()

// 9. Ordena el array numeros en orden descendente. 

console.groupCollapsed("Ejercicio 9")

numeros.sort((a, b) => b - a) // parametros -> recibe a y b para comparar cuál es mayor

/* 

La función de comparación devuelve un valor negativo si a debe estar antes que b, 
un valor positivo si b debe estar antes que a, y cero si ambos elementos son iguales.

Si el resultado es positivo, significa que b es menor que a, por lo que b debería estar 
antes en el orden. Si el resultado es negativo, a es menor que b, por lo que a debería 
estar antes. Y si el resultado es cero, ambos elementos son iguales y no se requiere un 
cambio en su orden relativo.

*/
console.log(numeros)

console.groupEnd()

// 10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelva true si esa fruta está en el array frutas, y false en caso contrario.

console.groupCollapsed("Ejercicio 10")

function buscarFruta(fruta) {
    if (frutas.includes(fruta)) {
        console.log(`La fruta ${fruta} está en el array de frutas`)
        return true
    } else {
        console.log(`La fruta ${fruta} no está en el array de frutas`)
        return false
    }
}

buscarFruta("kiwi")

console.groupEnd()

// 11. Imprime en la consola el primer elemento del array frutas.

console.groupCollapsed("Ejercicio 11")

console.log(frutas[0])

console.groupEnd()

// 12. Imprime en la consola el último elemento del array numeros.

console.groupCollapsed("Ejercicio 12")

console.log(frutas[frutas.length - 1])

console.groupEnd()

// 13. Utiliza el método forEach para imprimir cada fruta pero convertida a array.

console.groupCollapsed("Ejercicio 13")

frutas.forEach(fruta => {
    console.log(Array(fruta))
})

console.groupEnd()

// 14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola.

console.groupCollapsed("Ejercicio 14")

for (const numero of numeros) {
    console.log(numero)
}

console.groupEnd()

// 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array numeros utilizando el método map.

console.groupCollapsed("Ejercicio 15")

let duplicados = numeros.map((num) => (
    num = num * 2
))

/* let duplicados2 = numeros.map((num) => {
    return num = num * 2}
) */

console.log(duplicados)

console.groupEnd()

// 16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números.

console.groupCollapsed("Ejercicio 16")

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

console.log(array1)
console.log(array2)

console.groupEnd()

// 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados en la consola.

console.groupCollapsed("Ejercicio 17")

function sumarArrays(array) {
    let suma = array.reduce((acumulador, actual) => {
        return acumulador = acumulador + actual
    })
    console.log(suma)
}

sumarArrays(array1)
sumarArrays(array2)

console.groupEnd()

// 18. Crea una función llamada buscarNumero que tome como argumentos un número y un array de números, y devuelva true si el número está en el array, y false en caso contrario.

console.groupCollapsed("Ejercicio 18")

function buscarNumero(num, arrayNum) {
    if (arrayNum.includes(num)) {
        console.log(`El ${num} se encuentra en el array de números`)
        return true
    } else {
        console.log(`El ${num} no se encuentra en el array de números`)
        return false
    }
}

buscarNumero(5, array2) // true
buscarNumero(5, duplicados) // false

console.groupEnd()

// 19. Crea un array llamado edades que contenga al menos 5 números (edades).

console.groupCollapsed("Ejercicio 19")

let edades = [18, 16, 25, 14, 21]

console.log(edades)

console.groupEnd()

// 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga solo las edades mayores o iguales a 18.

console.groupCollapsed("Ejercicio 20")

/* let mayores = edades.filter(edad => {
    edad >= 18
}) */

let mayores = edades.filter(edad => (edad >= 18))

console.log(mayores)

console.groupEnd()

// 21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).

console.groupCollapsed("Ejercicio 21")

let precios = [25, 55, 89]

console.log(precios)

console.groupEnd()

// 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los precios con un 21% de IVA aplicado a cada uno.

console.groupCollapsed("Ejercicio 22")

let preciosConIVA = precios.map(precio => (precio * 21 / 100))

console.log(preciosConIVA)

console.groupEnd()

// 23. Crea un array llamado duplicados que contenga algunos números duplicados.

console.groupCollapsed("Ejercicio 23")

let duplicados2 = [25, 55, 89, 55, 70, 25]

console.log(duplicados2)

console.groupEnd()

// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola.

console.groupCollapsed("Ejercicio 24")

let duplicadosLimpio = []

duplicados2.forEach(num => {
    if (!duplicadosLimpio.includes(num)) {
        duplicadosLimpio.push(num)
    }
})

console.log(duplicados2)
console.log(duplicadosLimpio)

console.groupEnd()

// 25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.

console.groupCollapsed("Ejercicio 25")

let nombres1 = ["caro", "pablo", "santi"]
let nombres2 = ["juan", "diego", "marlon"]

console.log(nombres1)
console.log(nombres2)

console.groupEnd()

// 26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la consola.

console.groupCollapsed("Ejercicio 26")

let concatenado = nombres1.concat(nombres2)
console.log(concatenado)

console.groupEnd()

// 27. Crea un array llamado colores que contenga al menos 5 colores diferentes.

console.groupCollapsed("Ejercicio 27")

let colores = ["azul", "amarillo", "verde", "violeta", "blanco"]
console.log(colores)

console.groupEnd()

// 28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola.

console.groupCollapsed("Ejercicio 28")

console.log(colores.length)

console.groupEnd()
