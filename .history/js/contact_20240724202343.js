$(document).ready(function () {
    console.log("Hello")


    $("#formContact").on("submit", function (event) {
        event.preventDefault()
        let firstName = $("#firstName").val()
        let lastName = $("#lastName").val()
        let email = $("#email").val()
        let comment = $("#comment").val()

    })

})