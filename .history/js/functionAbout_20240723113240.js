// jQuery
$(document).ready(function () {
    console.log("jQuery")

    $("button").click(function () {
        $("h1").text("Hello jQuery!")
        // $("h1").css("color", "red")
        $("h1").css({ color: "red", fontSize: "30px" })
    })
})