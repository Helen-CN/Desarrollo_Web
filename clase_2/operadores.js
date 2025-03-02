let numero = 6

console.log(numero < 7)
console.log(numero == '6') //dos iguales compara lo que almacema
console.log(numero === 6) //tres iguales evalua el tipo de dato, tiene que ser el mismo (int int)

console.log(5 > 10 && 15 < 20) //and
console.log(5 > 10 || 15 < 20) //or
console.log(5 < 10 && 20 < 15 || 20 < 3) 

let esta_lloviendo = false
esta_lloviendo ? console.log ("Esta lloviendo") : console.log ("no esta lloviendo") // ? operador ternario, es como un if, solo 
//lee una linea, :  separa el true y el false

//longitud 
let nombre_completo = "kas patiño neri"
console.log (nombre_completo.length)
console.log (nombre_completo)

//acceso a index
console.log(nombre_completo[6])
console.log(nombre_completo.slice(6,15)) //para que muestre una subcadena (silce)7

let mensaje_largo =`hola como estas
yo muy bien
y tu que tal`
console.log (mensaje_largo)
//remplazar caracteres
console.log (nombre_completo.replace("helen" , "cuevas"))
let nombre_remplazo = nombre_completo.replace ("helen", "cuevas")
console.log (nombre_completo.includes("ppa"))
let opcion = 0
switch (opcion) {
    case 1:
        console.log("entraste a la opcion 1")
        break;
    case 2:
        console.log("entraste a la opcion 2")
        break

    default:
        console.log("No se encontró opcion")
        break;
}