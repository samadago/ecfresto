$(document).ready(function() {
    $('#login-form').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
      $.ajax({
        type: 'POST',
        url: 'login.php',
        data: {username: username, password: password},
        success: function(response) {
          if (response === 'success') {
            window.location.href = 'home.php';
          } else {
            $('#error-message').text('Nom d\'utilisateur ou mot de passe incorrect.');
          }
        },
        error: function() {
          $('#error-message').text('Erreur lors de la connexion au serveur.');
        }
      });
    });
  });
  