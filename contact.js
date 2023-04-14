
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

  if (email.value == "") {  //monter le span d'erreur erreurEmail
    showElement('erreurEmail');

  } else { //cacher le span d'erreur erreurEmail
    hideElement('erreurEmail');
  }



}

function checkTel() {
  let contactFormulaire = document.getElementById("contactFormulaire");
  let telephone = contactFormulaire.telephone;

  if (telephone.value == "") {
    showElement('erreurTelephone');
  } else{
    hideElement('erreurTelephone');
  }


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
