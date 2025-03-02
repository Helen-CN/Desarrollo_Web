//array 1
let myarray = []
let myarray2 = new Array()
console.log(typeof(myarray))

myarray = [1,2,3,4,5]
//888
myarray [7] = 8
myarray.push("kas") //insertar hasta el final de todo
console.log(myarray)

//Set = estructura de datos como el array
let myset = new Set (["1" , "2" , 5]) 
console.log(myset)
myset.add("elemento nuevo") //add igual inserta hasta el final
myset.delete("10")
console.log(myset) 


//MAP Estructura de datos que se ocupan para diccionarios
let mymap = new Map()
mymap = new Map([
    ["name" , "kas"],
    ["ap" , "patiño"],
    ["edad", 21]
])
mymap.set("name" , "ks")
console.log(mymap)
console.log(mymap.get("name"))
mymap.delete("ap")
console.log(mymap)

//Loops
for (let i = 0; i < 5; i++) {
    console.log("interaccion->" +i)
    
}
for (let index = 0; index < myarray.length; index++) {
    console.log("Elemento del Array" + myarray[index])
}
for(let valor of mymap){
    console.log("Interaccion->" +valor)
}
let i=0
while (i<5) {
    console.log("Elemento del while->" +1)
    i++
}
do {
    console.log("Elemento del do while->" +i)
    i++ 
} while (i<10);