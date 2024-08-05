$(document).ready(function () {
    console.log("Hello")


    $("#formContact").on("submit", function (event) {
        event.preventDefault()
        let firstName = $("#firstName").val()
        let lastName = $("#lastName").val()
        let email = $("#email").val()
        let comment = $("#comment").val()
        let alert = $(".alert")
        if (firstName == "" || lastName == "" || email == "") {
            alert.html("<p> Fill all the fields.</p>")
            alert.addClass("alert-danger")
            alert.removeClass("alert-success")
        } else {
            alert.html("<p>Thank You " + firstName + " " + lastName + "</p>")
            alert.addClass("alert-success")
            alert.removeClass("alert-danger")
        }


    })

})