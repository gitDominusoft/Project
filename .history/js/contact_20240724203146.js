$(document).ready(function () {
    console.log("Hello")


    $("#formContact").on("submit", function (event) {
        event.preventDefault()
        let firstName = $("#firstName").val()
        let lastName = $("#lastName").val()
        let email = $("#email").val()
        let comment = $("#comment").val()

        if (firstName == "") {
            $(".alert").html("<p> Fill the First name field.</p>")
            $(".alert").addClass("alert-success")
        } else {
            $(".alert").html("<p>Thank You " + firstName + " " + lastName + "</p>")
            $(".alert").addClass("alert-success")
        }


    })

})