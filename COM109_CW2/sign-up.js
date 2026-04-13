$(document).ready(function() {
    const $form = $("#signupForm");
    // these probably need to be deleted
    const pass = $("#password").val();
    const cPass = $("#confirmPassword").val();

    // this is for the burger menu for responsive navbar
    $("#navbar").on("click", function () {
        $("#navbar-toggler").toggleClass("show");
    });


    $form.on("submit", function(e) {
        if(!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        $form.addClass("was-validated");

        // password checker
        // this does not work
        if (cPass !== pass) {
            console.log("passwords do not match")
        } else {
            console.log("passwords match")
        };
        });

    $form.find(".form-control").on("input", function(e) {
        if (this.checkValidity()) {
            $(this).addClass("is-valid").removeClass("is-invalid");
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid");
        }
    });
});
