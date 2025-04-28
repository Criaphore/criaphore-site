$(document).ready(function() {
    $("#waiting-list-form").submit(function(event) {
      event.preventDefault(); // Empêche l'envoi classique du formulaire
  
      $.ajax({
        type: "POST",
        url: $(this).attr("action"),
        data: $(this).serialize(),
        success: function(response) {
          $(".waiting-list-form").html("<p>✅ Thank you for joining the iOS waiting list! We'll notify you when the app is ready.</p>");
        },
        error: function() {
          $(".waiting-list-form").html("<p>❌ Oops! Something went wrong. Please try again later.</p>");
        }
      });
    });
  });