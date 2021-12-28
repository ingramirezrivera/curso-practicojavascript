//Este es el codigo del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
/*console.log(
    "Los lados del cuadrado miden: " 
    + ladoCuadrado 
    + "cms"
);
*/

function perimetroCuadrado(lado){
return lado * 4;
}

perimetroCuadrado()

/*
console.log(
    "El périmetro de mi cuadrado es: " 
    + perimetroCuadrado 
    + "cms
);
*/

function areaCuadrado(lado){
return lado * lado;
}

areaCuadrado()
/*
console.log(
    "El area de mi cuadrado es de: " 
    + areaCuadrado 
    + "cms²"
);

*/

console.groupEnd()


//Código del Triángulo


console.group("Triángulo");

/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;

console.log(
    "Los lados del Triangulo miden: " 
    + ladoTriangulo1 
    + " cms, " 
    + ladoTriangulo2 
    + " cms, " 
    + baseTriangulo3 
    + " cms" 
);
*/
/*
const alturaTriangulo = 5.5;
console.log(
    "La altura del Tríangulo es de: "
    + alturaTriangulo 
    +" cms"
);
*/


function perimetroTriangulo(lado1,lado2,base){ 
return lado1 + lado2 + base; 
}

perimetroTriangulo();


/*
console.log(
    "El perímetro del triángulo es: "
    + perimetroTriangulo
    + " cms"
);
*/


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

areaTriangulo();

console.groupEnd();
//########Fin de grupo Triángulo #########

// Codigo circulos
console.group("Círculo");

//Radio

function radioCirculo(radio){
return radio;
}

/*
console.log(
    "El radio del círculo es: " 
    + radioCirculo
    + " cms"
);
*/


//Diámetro
function diametroCirculo(radio){
return radio * 2;
}

diametroCirculo();

/*
console.log(
    "El Diámetro del círculo es: " 
    + diametroCirculo
    + " cms"
);
*/


//Pi
const Pi = 3.1415;
const PI = Math.PI;
console.log(
    "EL valor de Pi es: "
    + PI

);

//Circunferencia

function perimetroCirculo(radio){ 
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

perimetroCirculo();

/*
console.log(
    "EL perimetro del círculo es: " 
    + perimetroCirculo
    + " cms"
);
*/


//Area

function areaCirculo(radio){
    return  (radio * radio) * PI;
}

areaCirculo();
/*
console.log(
    "El área del círculo es: "
    + areaCirculo
    + "cms²"
);
*/
console.groupEnd();

//Aquí interractuamos con el html

/*

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    
}

*/
//Cálculo de Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    const area = areaCuadrado(value);
    alert(area);
}

//Cálculo de Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1Triangulo");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado2Triangulo");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputBaseTraingulo");
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputBaseTraingulo");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputAlturaTriangulo");
    const value2 = parseInt(input2.value);
    
    const area = areaTriangulo(value1,value2);
    alert(area);


}

//Cálculo de circulo

function calcularCircunferencia(){
    const input = document.getElementById("inputRadioCirculo");
    const value = parseInt(input.value);

    const circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadioCirculo");
    const value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(area);
}

