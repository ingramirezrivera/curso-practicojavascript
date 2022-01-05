

//definimos el array
const lista1 = [100,200,600,500,400000000];


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

const mitadLista = lista1.length /2;
let mediana;

function esPar(numero){
    if (numero % 2 === 0){
        const rut = numero % 2;
        return true;
    }else{
        return false;
    }
}


if(esPar(parseInt(lista1.length))){
    //promedio
    //mediana


}else{
    mediana = lista1[mitadLista]


}
    //posicion mitad de lista 1
    //mediana

