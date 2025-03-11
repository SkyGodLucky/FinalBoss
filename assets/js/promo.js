function openMenuMobile() {
  document.querySelector("#menu").classList.add("open");
  document.querySelector("#overlay").classList.add("visible");
}

function closeMenuMobile() {
  document.querySelector("#menu").classList.remove("open");
  document.querySelector("#overlay").classList.remove("visible");
}

// Fonction pour ouvrir le formulaire
function openForm() {
  document.querySelector('#form-container').style.display = 'block';
  document.querySelector('#overlay').style.display = 'block';  // Afficher l'overlay pour empêcher l'interaction
}

// Fonction pour fermer le formulaire
function closeForm() {
  document.querySelector('#form-container').style.display = 'none';
  document.querySelector('#overlay').style.display = 'none';  // Cacher l'overlay
}

// Fonction pour traiter le formulaire lors de la soumission
document.querySelector('#promo-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher la soumission du formulaire par défaut

  // Récupérer les valeurs du formulaire
  const promoName = document.querySelector('#promo-name').value;
  const startDate = document.querySelector('#start-date').value;
  const endDate = document.querySelector('#end-date').value;

  // Afficher ces valeurs dans la console (ou les utiliser autrement)
  console.log(`Nom de la promo: ${promoName}`);
  console.log(`Date de début: ${startDate}`);
  console.log(`Date de fin: ${endDate}`);

  // Fermer le formulaire après soumission
  closeForm();


});
