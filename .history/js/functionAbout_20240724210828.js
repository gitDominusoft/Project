// jQuery
$(document).ready(function () {
    console.log("jQuery")

    $("button").click(function () {
        $("h1").text("Hello jQuery!")
        // $("h1").css("color", "red")
        $("h1").css({ color: "red", fontSize: "30px" })
    })
    $("form").on("submit", function (event) {
        event.preventDefault()
        let info = $('input[type="text"]').val()
        // ol, "<li>"+info+"</li>"
        // $("<li>" + info + "</li>").insertAfter("ol")
        // $("ol").after("<li>" + info + "</li>")
        // $("<li>" + info + "</li>").insertBefore("ol")
        // $("ol").before("<li>" + info + "</li>")
        $("<li>" + info + "</li>").appendTo("ol")
    })
})