console.log("Arrays pt2")

// Ejercicios Arrays pt 2

// 1. Crea un lista que almacene 10 nombres completos y ordenados alfabéticamente

console.group("Ejercicio 1")

let nombres = [
    "carolina",
    "dario",
    "melisa",
    "julian",
    "myriam",
    "angelica",
    "mario",
    "piedad",
    "teresa",
    "pedro",
    "fernando"
]
console.log(nombres.toSorted())

console.groupEnd()

// 2. Crea una 
// 3. Utilizar un bucle for para sumar todos los elementos de un array de números.

console.group("Ejercicio 3")

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let suma = 0

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]
}
console.log(suma)
console.groupEnd()


// 4. Iterar sobre las propiedades de un objeto utilizando un bucle for...in e imprimir sus valores.

console.group("Ejercicio 4")

let mascota = {
    nombre: "Milu",
    especie: "perro",
    edad: 1,
    color: "negro",
    esterilizada: false,

}

for (const propiedad in mascota) {
    console.log(propiedad + ": " + mascota[propiedad])
}

console.groupEnd()

// 5. Utilizar un bucle for...of para sumar todos los números de un array.

console.group("Ejercicio 5")

let suma2 = 0 // Declaro otra variable suma para que no se acumule con la anterior (3 ejercicio)

for (const num of numeros) {
    suma2 = suma2 + num
}

console.log(suma2)

console.groupEnd()

// 6. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de strings.

console.group("Ejercicio 6")

let arrayStrings = ["hola", "mundo", "riwi", "coders", "desarrollo", "software"]

arrayStrings.forEach(string => console.log(string))

console.groupEnd()

// 7. Utilizar el método map() para obtener un nuevo array con cada elemento de un array de números multiplicado por 2.

console.group("Ejercicio 7")

let multiplicados = numeros.map(num => num * 2)
console.log(multiplicados)

console.groupEnd()

// 8. Utilizar el método filter() para obtener un nuevo array con solo los números pares de un array dado.

console.group("Ejercicio 8.")

let pares = numeros.filter(num => num % 2 === 0)
console.log(pares)

console.groupEnd()

// 9. Utilizar el método some() para comprobar si al menos uno de los elementos de un array de números es mayor que 10.

console.group("Ejercicio 9.")

console.log(`Al menos uno es mayor que 10?: ${numeros.some(num => num > 10)}`)

console.groupEnd()

// 10. Utilizar el método every() para comprobar si todos los elementos de un array de números son positivos.

console.group("Ejercicio 10")

console.log(`Todos son positivos?: ${numeros.every(num => num > 0)}`)

console.groupEnd()

// 11. Utilizar el método sort() para ordenar un array de números de menor a mayor.

console.group("Ejercicio 11")

let numerosOrdenar = [2, 4, 5, 23, 3, 31, 40, 1, 10]

console.log(numerosOrdenar.sort((a, b) => a - b))
console.groupEnd()

// 12. Utilizar el método reverse() para invertir el orden de un array dado.

console.group("Ejercicio 12")

console.log(`El array de Strings con reverse(): ${arrayStrings.reverse()}`)

console.groupEnd()

// 13. Crear una función toReversed() que tome un array y devuelva un nuevo array con los elementos en orden inverso.

console.group("Ejercicio 13")

function reversarArray(array) {
    return array.toReversed()
}
console.log(`Array original: ${numerosOrdenar}`)
console.log(`Función toReversed: ${reversarArray(numerosOrdenar)}`)

console.groupEnd()

// 14. Utilizar el método forEach() para calcular la suma de todos los elementos de un array de números.

console.group("Ejercicio 14")

let suma3 = 0

numerosOrdenar.forEach(num => {
    return suma3 = suma3 + num
})

console.log(suma3)

console.groupEnd()

// 15. Iterar sobre las propiedades de un objeto y contar cuántas son de tipo string utilizando un bucle for...in.

console.group("Ejercicio 15")

let contador = 0

for (const propiedad in mascota) {  
    if (typeof mascota[propiedad] === "string"){
        contador++
    }
}

console.log(contador)
console.groupEnd()

// 16. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de objetos.

console.group("Ejercicio 16")

let arrayObjetos = [
    {
        nombre: "caro",
        edad: 26,
        clan: "Dell"
    },
    {
        nombre: "santi",
        edad: 26,
        clan: "Dell"
    },
    {
        nombre: "juan",
        edad: 18,
        clan: "Dell"
    },{
        nombre: "pablo",
        edad: 20,
        clan: "Dell"
    }
]

arrayObjetos.forEach(objeto => {
    console.log(objeto)
    
})

console.groupEnd()

// 17. Utilizar el método map() para obtener un nuevo array con la longitud de cada string en un array dado.

console.group("Ejercicio 17")

console.groupEnd()

// 18. Utilizar el método filter() para obtener un nuevo array con solo las strings que contengan la letra 'a' en un array dado.

console.group("Ejercicio 18")

console.groupEnd()

// 19. Utilizar el método some() para comprobar si alguna string en un array dado tiene una longitud mayor que 10 caracteres.

console.group("Ejercicio 19")

console.groupEnd()

// 20. Utilizar el método every() para comprobar si todas las strings en un array dado contienen al menos una vocal.

console.group("Ejercicio 20")

console.groupEnd()

// 21. Dado un array de objetos que representan libros con propiedades titulo y paginas, utilizar filter() para obtener un nuevo array con solo los libros que tengan más de 300 páginas.

console.group("Ejercicio 21")

console.groupEnd()

// 22. Dado un array de números, utilizar filter() para obtener un nuevo array con solo los números que sean divisibles por 3.

console.group("Ejercicio 22")

console.groupEnd()

// 23. Dado un array de strings, utilizar filter() para obtener un nuevo array con solo las strings que tengan una longitud mayor que 5.

console.group("Ejercicio 23")

console.groupEnd()

// 24. Dado un array de objetos que representan personas con propiedades nombre y edad, utilizar filter() para obtener un nuevo array con solo las personas mayores de 18 años.

console.group("Ejercicio 24")

console.groupEnd()

// 25. Dado un array de booleanos, utilizar filter() para obtener un nuevo array con solo los valores true.

console.group("Ejercicio 25")

console.groupEnd()

// 26. Dado un array de números, utilizar map() para obtener un nuevo array con el cuadrado de cada número.

console.group("Ejercicio 26")

console.groupEnd()

// 27. Dado un array de strings, utilizar map() para obtener un nuevo array con cada string en mayúsculas.

console.group("Ejercicio 27")

console.groupEnd()

// 28. Dado un array de objetos que representan productos con propiedades nombre y precio, utilizar map() para obtener un nuevo array con solo los precios de los productos.

console.group("Ejercicio 28")

console.groupEnd()

// 29. Dado un array de objetos que representan personas con propiedades nombre y edad, utilizar map() para obtener un nuevo array con solo los nombres de las personas.

console.group("Ejercicio 29")

console.groupEnd()

// 30. Dado un array de números, utilizar map() para obtener un nuevo array con la raíz cuadrada de cada número.

console.group("Ejercicio 30")

console.groupEnd()
