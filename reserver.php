<?php

// Vérification que la requête est une requête POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Récupération des données du formulaire
  $date = $_POST['date'];
  $nb_personnes = $_POST['nb_personnes'];

  // Connexion à la base de données
  $host = "localhost";
  $user = "nom_utilisateur";
  $password = "mot_de_passe";
  $dbname = "nom_base_de_donnees";
  $conn = mysqli_connect($host, $user, $password, $dbname);

  // Vérification de la connexion à la base de données
  if (!$conn) {
    die("Connexion échouée: " . mysqli_connect_error());
  }

  // Requête SQL pour insérer la réservation dans la base de données
  $sql = "INSERT INTO reservations (date, nb_personnes) VALUES ('$date', '$nb_personnes')";

  // Exécution de la requête SQL
  if (mysqli_query($conn, $sql)) {
    echo "Réservation effectuée avec succès !";
  } else {
    echo "Erreur lors de la réservation : " . mysqli_error($conn);
  }

  // Fermeture de la connexion à la base de données
  mysqli_close($conn);
}

?>
