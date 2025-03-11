function openMenuMobile() {
  document.querySelector("#menu").classList.add("open"); // Ajouter la classe "open" à l'élément avec l'ID "menu"
  document.querySelector("#overlay").classList.add("visible"); // Ajouter la classe "visible" à l'élément avec l'ID "overlay"
}

function closeMenuMobile() {
  document.querySelector("#menu").classList.remove("open"); // Retirer la classe "open" de l'élément avec l'ID "menu"
  document.querySelector("#overlay").classList.remove("visible"); // Retirer la classe "visible" de l'élément avec l'ID "overlay"
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("studentModal"); // Récupérer l'élément avec l'ID "studentModal"
  const addStudentBtn = document.getElementById("addStudentBtn"); // Récupérer l'élément avec l'ID "addStudentBtn"
  const closeModal = document.querySelector(".close"); // Récupérer l'élément avec la classe "close"
  const saveStudentBtn = document.getElementById("saveStudent"); // Récupérer l'élément avec l'ID "saveStudent"
  const studentTableBody = document.getElementById("studentTableBody"); // Récupérer l'élément avec l'ID "studentTableBody"

  // Ajouter un élément pour afficher les erreurs
  const errorMessage = document.createElement("p"); // Créer un élément <p> pour afficher les messages d'erreur
  errorMessage.style.color = "red"; // Définir la couleur du texte en rouge
  errorMessage.style.display = "none"; // Cacher l'élément par défaut
  errorMessage.id = "error-message"; // Définir l'ID de l'élément
  document.querySelector(".modal-content").appendChild(errorMessage); // Ajouter l'élément à l'intérieur de l'élément avec la classe "modal-content"

  // Ouvrir la pop-up
  addStudentBtn.addEventListener("click", function () {
    modal.style.display = "block"; // Afficher la modal
  });

  // Fermer la pop-up
  closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Cacher la modal
    errorMessage.style.display = "none"; // Cacher l'erreur si la pop-up est fermée
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Cacher la modal si on clique en dehors de celle-ci
      errorMessage.style.display = "none"; // Cacher l'erreur si la pop-up est fermée
    }
  });

  // Ajouter un étudiant
  saveStudentBtn.addEventListener("click", function () {
    const nom = document.getElementById("nom").value; // Récupérer la valeur du champ "nom"
    const prenom = document.getElementById("prenom").value; // Récupérer la valeur du champ "prenom"
    const email = document.getElementById("email").value; // Récupérer la valeur du champ "email"
    const dob = document.getElementById("dob").value; // Récupérer la valeur du champ "dob"
    const date = new Date(dob); // Créer un objet Date avec la valeur de "dob"
    const formattedDate = date.toLocaleDateString('fr-FR'); // Formater la date en format français
    const promotion = document.getElementById("promotion").value; // Récupérer la valeur du champ "promotion"

    if (nom && prenom && email && dob) {
      const row = document.createElement("tr"); // Créer un élément <tr> pour la nouvelle ligne
      row.innerHTML = `
          <td>${nom}</td> <!-- Ajouter le nom dans une cellule -->
          <td>${prenom}</td> <!-- Ajouter le prénom dans une cellule -->
          <td>${email}</td> <!-- Ajouter l'email dans une cellule -->
          <td>${formattedDate}</td> <!-- Ajouter la date de naissance formatée dans une cellule -->
          <td>
          <select>
              <option ${promotion === "Promo-mu" ? "selected" : ""}>Promo-mu</option> <!-- Ajouter l'option "Promo-mu" et la sélectionner si elle correspond -->
              <option ${promotion === "Promo-alt" ? "selected" : ""}>Promo-Alternance</option> <!-- Ajouter l'option "Promo-Alternance" et la sélectionner si elle correspond -->
          </select>
          </td>
          <td><button class="edit-btn"><img src="../assets/images/crayon.png" alt="Edit"></button></td> <!-- Ajouter un bouton d'édition -->
          <td><button class="delete-btn"><img src="../assets/images/supprimer.png" alt="Supprimer"></button></td> <!-- Ajouter un bouton de suppression -->
          `;

      studentTableBody.appendChild(row); // Ajouter la nouvelle ligne au tableau

      // Effacer les champs et cacher le message d'erreur
      document.getElementById("nom").value = ""; // Réinitialiser le champ "nom"
      document.getElementById("prenom").value = ""; // Réinitialiser le champ "prenom"
      document.getElementById("email").value = ""; // Réinitialiser le champ "email"
      document.getElementById("dob").value = ""; // Réinitialiser le champ "dob"
      errorMessage.style.display = "none"; // Cacher le message d'erreur
      modal.style.display = "none"; // Cacher la modal

      // Ajouter la fonctionnalité de suppression
      row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove(); // Supprimer la ligne du tableau
      });
    } else {
      errorMessage.textContent = "Veuillez remplir tous les champs"; // Afficher un message d'erreur si tous les champs ne sont pas remplis
      errorMessage.style.display = "block"; // Afficher le message d'erreur
    }
  });
});

// Ajouter la fonctionnalité de modification

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn") || event.target.closest(".edit-btn")) {
    const row = event.target.closest("tr"); // Récupérer la ligne contenant le bouton d'édition
    const cells = row.querySelectorAll("td"); // Récupérer toutes les cellules de la ligne

    document.getElementById("nom").value = cells[0].textContent; // Remplir le champ "nom" avec la valeur de la cellule correspondante
    document.getElementById("prenom").value = cells[1].textContent; // Remplir le champ "prenom" avec la valeur de la cellule correspondante
    document.getElementById("email").value = cells[2].textContent; // Remplir le champ "email" avec la valeur de la cellule correspondante
    document.getElementById("dob").value = cells[3].textContent; // Remplir le champ "dob" avec la valeur de la cellule correspondante
    document.getElementById("promotion").value = cells[4].querySelector("select").value; // Remplir le champ "promotion" avec la valeur de la cellule correspondante

    document.getElementById("studentModal").style.display = "block"; // Afficher la modal
    row.remove(); // Supprimer la ligne du tableau
  }
});