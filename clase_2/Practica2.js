let opc = 5

switch (opc) 
{
    case 0:
        console.log("If")
        let edad = 21
        if (edad>=18) 
        {
            console.log("Eres mayor de edad")
        } else
        {
            console.log("No eres mayor de edad")
        }
        break;
    case 1:
        console.log("For")
        for (let i = 5 ; i<=5 ; i++) 
        {
            console.log("Numero: " +i)
            
        }
        break
    case 2:
        console.log("Do while")
        let contador = 0
        do 
        {
            console.log("Numero: " + contador)
            contador++;
        } while (contador <=3);
        break
    case 3:
        console.log("Suma")
        let a = 7
        let b = 3
        console.log("La suma es ->", a + b)
        break
    case 4:
        console.log("Potencia")
        let c = 2
        let d = 6
        console.log(Math.pow(c,d))
        break
    case 5:
        console.log("Array")
        let arre = []   
        for (let j =1 ; j < 7; j++) 
        {
            arre.push(j)
            
        }

        for (let j = 0; j < arre.length; j++) 
        {
            console.log(arre[j])
            
        }
        break
    default:
        console.log("Opcion Inválida")
        break;
}