$(document).ready(function() {
    const $form = $("#signupForm");

    $form.on("submit", function(e) {
        if(!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        $form.addClass("was-validated");
        });

    $form.find(".form-control").on("input", function(e) {
        if (this.checkValidity()) {
            $(this).addClass("is-valid").removeClass("is-invalid");
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid");
        }
    });
});