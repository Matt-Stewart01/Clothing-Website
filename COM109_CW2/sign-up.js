$(document).ready(function() {
    $("#fNameCheck, lNameCheck").show();

    // first name check
    $("#firstName").on("input", function() {
        let fName = $(this).val();

        if (fName !== '') {
            $("#fNameCheck").hide();
        } else {
            $("#fNameCheck").show();
        }
    });

    // last name check
    $("#lastName").on("input", function() {
        let lName = $(this).val();

        if (lName !== '') {
            $("#lNameCheck").hide();
        } else {
            $("#lNameCheck").show();
        }
    });

    // email check, if empty
});