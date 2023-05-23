
function showElement(identifia) {
  let elt = document.getElementById(identifia);
  elt.style.display = 'block';
}

function hideElement(identifia) {
  let elt = document.getElementById(identifia);
  elt.style.display = 'none';
}

function checkEmail() {

  let contactFormulaire = document.getElementById("contactFormulaire");
  let email = contactFormulaire.email;

  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {  //monter le span d'erreur erreurEmail
    hideElement('erreurEmail');

  } else { //cacher le span d'erreur erreurEmail
    showElement('erreurEmail');
  }



}

function checkTel() {
  let contactFormulaire = document.getElementById("contactFormulaire");
  let telephone = contactFormulaire.telephone;
  if(/^((\+?\d{1,3})?[\(\- ]?\d{3,5}[\)\- ]?)?(\d[.\- ]?\d)+$/.test(telephone.value)&&telephone.value.replace(/\D/g,"").length<=15){
    hideElement('erreurNumeroTelephone'); 
    hideElement('erreurTelephone');
    return true;
} else  if (telephone.value == "") {
  showElement('erreurTelephone');
} else { 
  showElement('erreurNumeroTelephone');  
  return false;
}
/*
  if (telephone.value == "") {
    showElement('erreurTelephone');
  } else{
    hideElement('erreurTelephone');
  }
*/

}

function checkMessage() {
  let contactFormulaire = document.getElementById("contactFormulaire");
  let message = contactFormulaire.message;

  if (message.value == "") {
    showElement('erreurMessage');


  } else {

    hideElement('erreurMessage');
  }

  return;
}



let boutonEnvoyer = document.getElementById("submit");
boutonEnvoyer.addEventListener('click', function (event) {
  checkEmail();
  checkTel();
  checkMessage();
  event.preventDefault();
});
