 /*const lista1 = [
     100,
     200,
     300,
     500

 ];

let sumaLista1 = 0;
for(let i = 0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedio = sumaLista1 / lista1.length;
*/

function calcularMediaAritemtica(lista){
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
    }

    const promedio = sumaLista / lista.length;
    return promedio;
}