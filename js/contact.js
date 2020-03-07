$(function() {
  ["from", "to", "subject", "emailbody"].forEach(function(field) {
    $("#" + field).attr("required", true);
    $("#" + field).focus(function() {
      $(".success-help").fadeOut("fast");
    });
  });
  $(".sendEmail").submit(function(e) {
    $(".mdl-spinner").fadeIn("slow").css("display", "inline-block");
    e.preventDefault();
    var from = $("#from").val();
    var to = $("#to").val();
    var subject = "CONTACT FORM";
    var emailbody = "hhhhh";
    
    $.ajax({
      url: "https://mybench-sendingemail.backbench.io/send",
      data: {
        from: from,
        to: to,
        subject: subject,
        emailbody:emailbody

      },
      error: function() {
        $(".mdl-spinner").fadeOut("fast");
        $(".success-help").html("An error has occurred").fadeIn("slow");
      },
      success: function(data) {
        $(".mdl-spinner").fadeOut("fast");
        ["from", "to", "subject", "emailbody"].forEach(function(field) {
          $("#" + field).val("");
        });
        $(".success-help").fadeIn("slow");
      },
      type: "POST"
    });
  });
});

