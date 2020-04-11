$(document).ready(function() {
    
  $(".devour").on("submit", function(event) {
    event.preventDefault();

    var  burgerId= $(this).children(".burgerId").val();
    $.ajax({
      method: "PUT",
      url: "/burger/" + burgerId
    }).then(function(data) {
      location.reload();
    });

  });
});


