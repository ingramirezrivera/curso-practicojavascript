

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




function calcularModa(){
    const lista1Count = {};


//Recorrer la lista
lista1.map(
    function(elemento){
        if (lista1Count[elemento]){
        lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }

    }
);


const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado,nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);
    const modaPos = lista1Array[lista1Array.length - 1];
    const moda = parseInt(modaPos[0]);
    return document.getElementById("calculoModa").innerHTML = "La moda de la lista es: " + moda + "<br>" + "Con una frecuencia de: " + modaPos[1];
}