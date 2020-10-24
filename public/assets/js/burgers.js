// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".btn-devour").on("click", function(event) {
      var id = $(this).data("id");

  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured: true}
      }).then(
        function() {
          console.log("devoured burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    function validate(burger){
        if (burger.burger_name && burger.burger_name.length > 0) {
            return true;
        }
        $("#burger_name").addClass("invalid");
        return false;
    }
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: false
      };
      if (!validate(newBurger)) {
          return;
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  