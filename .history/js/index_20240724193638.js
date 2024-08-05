console.log("Hello HTML!")


// Viti
document.getElementById("year").textContent = new Date().getFullYear()


let btn = document.getElementsByClassName("btn-dark")[0]
let element = document.getElementsByClassName("hide")[0]
btn.addEventListener("click", function () {
    if (element.style.display == "block") {
        element.style.display = "none"
        btn.textContent = "Read More"
    } else {
        element.style.display = "block"
        btn.textContent = "Read Less"
    }
})

// Heart

let heart = document.getElementsByClassName("fa-heart")
console.log(heart)
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function () {
        heart[i].classList.toggle("fa-solid")
    })
}




// jQuery

$(document).ready(function () {
    let nav = $(".navbar").css("background-color")
    console.log(nav)
    $(".navbar").css("background-color", "red")
})