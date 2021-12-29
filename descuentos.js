const precioOriginal = 100;
const descuento = 15;


//console.log({precioOriginal,descuento,precioFinal});

function calcularPrecioConDescuento(precioOriginal, descuento){
    const precioFinal = parseInt((precioOriginal * (100 - descuento))/100);
    return precioFinal;
}

calcularPrecioConDescuento();

function onCLickButtonPriceDiscountCalculator(){
    const inputPrice = document.getElementById("inputPrice");
    const valueInputPrice = parseInt(inputPrice.value);
    const inputDiscount = document.getElementById("inputDiscount");
    const valueInputDiscount = parseInt(inputDiscount.value);
    
    const precioConDescuento = calcularPrecioConDescuento(valueInputPrice,valueInputDiscount);
    
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio que debes pagar ya con el descuento es: $" + precioConDescuento; 
    
}


/*
function suma(num1,num2){
    const suma = num1 + num2;
    return suma;
}

function onCLickButtonPriceDiscountCalculator(){
    const input1 = document.getElementById("inputPrice");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputDiscount");
    const value2 = parseInt(input2.value);

    const calculoSuma = suma(value1,value2);
    alert(calculoSuma);


}
*/