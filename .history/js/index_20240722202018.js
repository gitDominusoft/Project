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

let heart1 = document.getElementsByClassName("fa-heart")[0]
heart1.addEventListener("click", function () {
    heart1.classList.toggle("fa-solid")
})

let heart2 = document.getElementsByClassName("fa-heart")[1]
heart2.addEventListener("click", function () {
    heart2.classList.toggle("fa-solid")
})