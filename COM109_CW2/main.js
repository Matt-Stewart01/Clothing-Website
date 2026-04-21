// Local Storage
function setLocalStorage() {
    const titleData = document.getElementById('title').value;
    const fNameData = document.getElementById('firstName').value;
    const lNameData = document.getElementById('lastName').value;
    const emailData = document.getElementById('Email').value;
    const dobData = document.getElementById('DOB').value;
    const conNumData = document.getElementById('contactNum').value;
    const houseNoData = document.getElementById('houseNo').value;
    const postCodeData = document.getElementById('postCode').value;
    localStorage.setItem('title', titleData);
    localStorage.setItem('firstName', fNameData);
    localStorage.setItem('lastName', lNameData);
    localStorage.setItem('Email', emailData);
    localStorage.setItem('DOB', dobData);
    localStorage.setItem('contactNum', conNumData);
    localStorage.setItem('houseNo', houseNoData);
    localStorage.setItem('postCode', postCodeData);
};

// jQuery to check if the page is ready
$(document).ready(function() {

    // navbar burger menu
    $("#navbar").on("click", function () {
        $("#navbar-toggler").toggleClass("show");
    });

    // page variables
    const form = $(".inputForm");
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    // form validation for signup and contact us pages
    form.on("submit", function(event) {

        const formID = $(this).prop("id")
        if(!this.checkValidity()) {
            event.preventDefault();
        } else if (formID === "contactForm") { // checks for form ID on successful submission
            alert("Your message was successfully sent!")
        } else if (formID === "signupForm") { // checks for form ID on successful submission
            alert("Your account was successfully created!")
        }

        form.addClass("was-validated");

        // form validation 
        form.find(".form-control").on("input", function(e) {
            if (this.checkValidity()) {
                $(this).addClass("is-valid").removeClass("is-invalid");
            } else {
                $(this).addClass("is-invalid").removeClass("is-valid");
            }
        });

    });
    
    // email regEx
    form.find("#Email").on("input", function() {
        const email = $(this).val();

        if(regEx.test(email)) {
            $(this).addClass("is-valid").removeClass("is-invalid");
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid");
        };
    });
});
