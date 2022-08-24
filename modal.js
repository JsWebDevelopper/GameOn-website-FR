function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//************ Fermer la Modale ******************//
// On récupère le btn close de la modal
const btnClose = document.querySelector(".close"); 

// On écoute l'évenement click avec la fonction closeModal
btnClose.addEventListener('click', closeModal);

//On crée la fonction closeModal qui permet de fermer la modal
function closeModal () {
  modalbg.style.display = "none";
}

// On écoute l'évenement click avec la fonction refresh
btnClose.addEventListener('click', refresh);

//On crée la fonction refresh pour actualiser la pages a la fermeture de la modal pour avoir une modal vide à sa reouverture
function refresh () {
  location.reload(true);
}

//************* Traitement Formulaire */
//On crée une variable en recuperant notre formulaire
let myFormValidation = document.getElementById("modalForm") 

//On crée une fonction pour la validation du formulaire
myFormValidation.addEventListener('submit', function(e) {

  // On récupère tout les elements du formulaire
  let firstName = document.querySelector("#first");
  let lastName = document.querySelector("#last");
  let email = document.querySelector("#email");
  let birthdate = document.querySelector("#birthdate");
  let quantity = document.querySelector("#quantity");
  let city = document.querySelectorAll(".city");
  let userConditions = document.querySelector("#checkbox1");

  // Expression reguliere
  let validEmailRegex = /.+\@.+\..+/;
  let validBirthdateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  let validQuantityRegex = /^[0-9]+$/;

   // Variables permettant de dire que le champs et valide ou pas afin de faire la transaction avec la seconde modal
   let firstNameFormValid = true;
   let lastNameFormValid = true;
   let emailFormValid = true;
   let birthdateFormValid = true;
   let quantityFormValid = true;
   let cityFormValid = true;
   let userConditionsFormValid = true;
 
     e.preventDefault();

      //Algorithme de validation du champs prenom
    if (firstName.value.length <2) {
      let myError = document.querySelector(".errorFirstName");
      let myBorder = document.querySelector(".text-control1");
      myError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      myBorder.style.borderColor = "red";
      firstNameFormValid = false; 
    } else{
      let myError = document.querySelector(".errorFirstName");
      let myBorder = document.querySelector(".text-control1");
      myError.style.display = "none";
      myBorder.style.borderColor = "green";
    }



});

