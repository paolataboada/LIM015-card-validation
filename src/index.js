import validator from './validator.js';
//console.log(validator);

//Esta función se utilizará para verificar el valor ingresado
const cardValidation = document.getElementById("cardValidation");
function btnValidar() {
  const cardNumber = document.getElementById("cardNumber").value;
  if(cardNumber.length == 0){
    alert("Introduzca los datos para continuar")
    document.getElementById("cardNumber").focus();
  } else {
    return validator.isValid(cardNumber);
  }
}
cardValidation.addEventListener("click", btnValidar);

//Esta función guardará la información del usuario (por el momento aparecerá en un alert)
const checkbox = document.getElementById("checkbox");
function checkSaveInfo() {
  const userInformation1 = document.getElementById("cardNumber").value;
  const userInformation2 = document.getElementById("cardOwner").value;
  const userInformation3 = document.getElementById("expirationDate").value;
  const userInformation4 = document.getElementById("securityCode").value;
  if(userInformation1.length>0 || userInformation2.length>0 || userInformation3.length>0 || userInformation4.length>0){
    alert("Información: Tarjeta " + userInformation1 + " Nombre " + userInformation2 + " Fecha "+userInformation3 + " CVV " + userInformation4);
    return true;
  } else {
    alert("No se ha encontrado información");
    return false;
  }
}
checkbox.addEventListener("click", checkSaveInfo);

//Esta función mostrará la segunda página o sección de pago
const continueProcess = document.getElementById("continueProcess");
const general = document.getElementById("general");
function btnContinuar() {
  const paymentSection = document.getElementById("pageTwo");
  const userInformation1 = document.getElementById("cardNumber").value;
  const userInformation2 = document.getElementById("cardOwner").value;
  const userInformation3 = document.getElementById("expirationDate").value;
  const userInformation4 = document.getElementById("securityCode").value;
  if(userInformation1.length>0 || userInformation2.length>0 || userInformation3.length>0 || userInformation4.length>0){
    return paymentSection.style.display="", general.style.display="none";
  } else {
    alert("Debe ingresar la información solicitada")
  }
}
continueProcess.addEventListener("click", btnContinuar);

//Esta función esconderá los últimos dígitos de la tarjeta
const ocultarTarjeta = document.getElementById("ocultarTarjeta");
function btnOcultar(){
  const cardNumber = document.getElementById("cardNumber").value;
  let finalNumber = document.getElementById("nextPage");
  let finalNumberContent = document.createElement("li");
  finalNumberContent.innerHTML = "Pagar con: " + validator.maskify(cardNumber);
  finalNumber.insertAdjacentElement("afterbegin", finalNumberContent);
  
  let finalSubtotal = document.getElementById("nextPage");
  let finalSubtotalContent = document.createElement("li");
  finalSubtotalContent.innerHTML = "Subtotal: s/. 250.00";
  finalSubtotal.insertAdjacentElement("beforeend", finalSubtotalContent);
  
  let finalShipping = document.getElementById("nextPage");
  let finalShippingContent = document.createElement("li");
  finalShippingContent.innerHTML = "Envío: s/. 30.00" ;
  finalShipping.insertAdjacentElement("beforeend", finalShippingContent);

  let finalTotal = document.getElementById("nextPage");
  let finalTotalContent = document.createElement("li");
  finalTotalContent.innerHTML = "Total: s/. 280.00 ";
  finalTotal.insertAdjacentElement("beforeend", finalTotalContent);
}
ocultarTarjeta.addEventListener("click",btnOcultar);