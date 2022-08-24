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


