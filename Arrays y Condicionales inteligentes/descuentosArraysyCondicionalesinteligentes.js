//variables
const originalPrice = 100;

const coupons = [
   { 
   name: "Winter_Coupon",
   discount: 15
   },
   {
   name: "Summer_Coupon",
   discount: 25
   },
   { 
   name: "Spring_Coupon",
   discount: 35
   },
   { 
   name: "Autumn_Coupon",
   discount: 45
   },
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
 
    
  function isCouponValueValid(coupon) {
      return coupon.name === valueCoupon;
  };
  
  console.log(coupons.find(isCouponValueValid));
  

  const userCoupon = coupons.find(isCouponValueValid);
  console.log(userCoupon);
  
  if (!userCoupon) {
      alert("El cupón " + valueCoupon + " no es válido");
   }else {
      const userDiscount = userCoupon.discount;
      console.log(coupons.discount);
      const precioConDescuento = calcularPrecioConDescuento(valuePrice, userDiscount);
  
      const resultPrice = document.getElementById("resultPrice");
      resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
   

}




