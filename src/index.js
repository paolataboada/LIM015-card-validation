import validator from './validator.js';
//console.log(validator);

//Esta función se utilizará para verificar el valor ingresado
const cardValidation = document.getElementById("cardValidation");
function btnValidar() {
  const cardNumber = document.getElementById("cardNumber").value;
  if(cardNumber.length == 0){
    alert("Introduzca los datos para validar.")
    document.getElementById("cardNumber").focus();
  } else {
    return validator.isValid(cardNumber);
  }
}
cardValidation.addEventListener("click", btnValidar);

//Esta función guardará la información del usuario (por el momento aparecerá en un alert)
const checkbox = document.getElementById("checkbox");
function checkSaveInfo() {
  const userInfo1 = document.getElementById("cardNumber").value;
  const userInfo2 = document.getElementById("cardOwner").value;
  const userInfo3 = document.getElementById("expirationDate").value;
  const userInfo4 = document.getElementById("securityCode").value;
  if(checkbox.checked && userInfo1.length == 0 && userInfo2.length == 0 && userInfo3.length == 0 && userInfo4.length == 0){
    alert("No hay datos para guardar.");
    checkbox.checked = false
  } else if (checkbox.checked && userInfo1.length !== 0 || userInfo2.length !== 0 || userInfo3.length !== 0 || userInfo4.length !== 0){
    alert("La información ha sido guardada ✔.");
    localStorage.setItem('Credit_Card', userInfo1);
    localStorage.setItem('User_Name', userInfo2);
  } 
}
checkbox.addEventListener("click", checkSaveInfo);

//Esta función mostrará la segunda página: "Sección de pago"
const continueProcess = document.getElementById("continueProcess");
function showPageTwo() {
  const cardNumber = document.getElementById("cardNumber").value;
  const userInfo2 = document.getElementById("cardOwner").value;
  const userInfo3 = document.getElementById("expirationDate").value;
  const userInfo4 = document.getElementById("securityCode").value;
  if(cardNumber.length>10 && userInfo2.length!==0 && userInfo3.length!==0 && userInfo4.length!==0){
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "block";
    let addCardNumber = document.getElementById("addCardNumber");
    addCardNumber.innerHTML = " Pagar con Nro. de Tarjeta: " + validator.maskify(cardNumber)+"</br>Nombre de Usuario: " + userInfo2;
    //Agregando los montos a pagar
    let addSubtotal = document.getElementById("addSubtotal");
    addSubtotal.innerHTML = "s/. "+ "205.00";
    let addShipping = document.getElementById("addShipping");
    addShipping.innerHTML = "s/. "+ "30.00";
    let addTotal = document.getElementById("addTotal");
    addTotal.innerHTML = "s/. "+ "235.00";
  } else {
    alert("No es posible continuar. Ingrese la información solicitada.")
  }
}
continueProcess.addEventListener("click", showPageTwo);

//Esta función se utilizará para regresar a la página anterior.
const previousPage = document.getElementById("previousPage");
function btnRegresar() {
  document.getElementById("pageOne").style.display = "block";
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageOne").style.paddingLeft = "30px";
}
previousPage.addEventListener("click", btnRegresar);

//Esta función se utilizará para ir a la página siguiente.
const nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click", () => alert('La próxima vista todavía está en construcción 🧰⚒️.'));