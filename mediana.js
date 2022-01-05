

//definimos el array
const lista1 = [

];


//Funcion para añadir numeros a la lista
function añadirNumeroALista(){
    const input = document.getElementById("inputNumber");
    const value = parseInt(input.value);
    console.log(value);
    document.getElementById("dataInput").reset(); //para resetear la entrada del input
    
    return lista1.push(value), document.getElementById("arrayOutput").innerHTML = lista1;;

}


//Funcion para borrar el array
function borrarArray(){
    alert("Tu lista será borrada");
    lista1.length = 0;
    console.log(lista1);
    return document.getElementById("arrayOutput").innerHTML = lista1;

}

//Función para ordenar el array
function ordenarArray(){
    lista1.sort();
    return document.getElementById("arrayOutput").innerHTML = lista1;
}



//Función para calcular la Media
function calcularPromedio(calculaP){
    function calulaP(lista1){
        alert("vamos a calcular el promedio" + lista1);
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        const result = lista1.reduce(reducer);
        return console.log(result);
    }
    return ;
}


//Funcion para calcular el promedio
function calculoPromedio(){
    const reducer = (previousValue, currentValue) => {return previousValue + currentValue}
    const resulSuma = lista1.reduce(reducer);

    const promedio = resulSuma / lista1.length;
    
    return document.getElementById("resultadoPromedio").innerHTML = "El promedio de la lista ingresada es: " + promedio;

}

//CALCULO DE MEDIANA

let medianaPar;
let medianaImpar;

function calcularMediana(){
    const mitadLista = parseInt(lista1.length /2);
    
    function esPar(numero){
        if (numero % 2 == 0){
            return true;
        }else{
            return false;
        }
    }

    let number1 = lista1[mitadLista - 1];
    let number2 = lista1[mitadLista];

    if(esPar(parseInt(lista1.length))){
        const promediNum1y2 = parseInt((number1 + number2) / 2);
        let medianaPar = promediNum1y2;
    
        return document.getElementById("resultadoMediana").innerHTML = "El resultado de la mediana es: " + medianaPar;


    }else{
        let medianaImpar = lista1[mitadLista]
        
        return document.getElementById("resultadoMediana").innerHTML = "El resultado de la mediana es: " + medianaImpar;  
    }
    
}





  


