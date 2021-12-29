//variables
const originalPrice = 100;

const coupons = [
    "Winter_Coupon",
    "Summer_Coupon",
    "Spring_Coupon",
    "Autumn_Coupon"  
];
  
//funcion para calculo de descuento

function calcularPrecioConDescuento(originalPrice, discount){
    const precioFinal = parseInt((originalPrice * (100 - discount))/100);
    return precioFinal;
}

//function to get html values

calcularPrecioConDescuento();

function onCLickButtonPriceDiscountCalculator(){
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = parseInt(inputPrice.value);
    const inputCoupon = document.getElementById("inputCoupon");
    const valueCoupon = inputCoupon.value;
    
    let discount;

    //Switch to select the coupons

       
    if (!coupons.includes(valueCoupon)) {
        alert("El cupón " + valueCoupon + "no es válido");
     } else if (valueCoupon === "Winter_Coupon") {
        discount = 15;
     } else if (valueCoupon === "Summer_Coupon") {
        discount = 25;
     } else if (valueCoupon === "Spring_Coupon") {
        discount = 35;
     } else if (valueCoupon === "Autumn_Coupon") {
        discount = 45;
     }

    //Fucntion to calculate the price with discount
    
    const discountPrice = calcularPrecioConDescuento(valuePrice,discount);
    
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio que debes pagar ya con el descuento es: $" + discountPrice; 
    
}




