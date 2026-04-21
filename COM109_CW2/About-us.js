// jQuery to check if the page is ready -- for signup Form Page
$(document).ready(function() {

    // this is for the burger menu for responsive navbar
    $("#navbar").on("click", function () {
        $("#navbar-toggler").toggleClass("show");
    });

    document.getElementById('event1').classList.add('show')
    document.getElementById('event1').classList.add('active-item')

});

function toggleDetails(id) {
    const detailElement = document.getElementById(id);
    const parentItem = document.getElementById('parent-' + id);

    const currentlyActive = document.querySelector('.active-item');

    if (currentlyActive && currentlyActive !== parentItem) {
        currentlyActive.classList.remove('active-item');
        document.querySelector('.details.show').classList.remove('show');
    }

    detailElement.classList.add('show');
    parentItem.classList.add('active-item');
}

