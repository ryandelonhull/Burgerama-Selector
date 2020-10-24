$(function () {
  $(".btn-devour").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true },
    }).then(function () {
      console.log("devoured burger", id);
      location.reload();
    });
  });
  function validate(burger) {
    if (burger.burger_name && burger.burger_name.length > 0) {
      return true;
    }
    $("#burger_name").addClass("invalid");
    return false;
  }
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: false,
    };
    if (!validate(newBurger)) {
      return;
    }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
});
