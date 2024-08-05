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

let heart = document.getElementsByClassName("fa-heart")[0]
heart.addEventListener("click", function () {
    heart.classList.add("fa-solid")
})