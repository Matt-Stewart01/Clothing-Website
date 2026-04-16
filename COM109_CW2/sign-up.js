// cookies

// jQuery to check if the page is ready -- for signup Form Page
$(document).ready(function() {

    // this is for the burger menu for responsive navbar
    $("#navbar").on("click", function () {
        $("#navbar-toggler").toggleClass("show");
    });

    // form JS (sign-up and contact-us pages)
    const form = $("#inputForm");

    form.on("submit", function(event) {
        if(!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.addClass("was-validated");

    form.find(".form-control").on("input", function(e) {
        if (this.checkValidity()) {
            $(this).addClass("is-valid").removeClass("is-invalid");
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid");
        }
    });
    });

    // password checker
    
    // email regEx
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    form.find("#Email").on("input", function() {
        const email = $(this).val();

        if(regEx.test(email)) {
            $(this).addClass("is-valid").removeClass("is-invalid");
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid");
        };
    });
});
