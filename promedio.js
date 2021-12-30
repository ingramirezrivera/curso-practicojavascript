
//-Primer paso: definir formulas
//-Segundo paso: implementar las formulas en Javascript
//-Tercer paso: crear funciones
//-Cuarto paso: integrar JS con HTML


//calcular promedio

const lista1 = [100,200,300,500];
let sumaLista1 = 0;



for (let i = 0; i < lista1.length ; i++ ) {
     sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;
console.log(sumaLista1);
console.log(lista1.length);
console.log(promedioLista1);

