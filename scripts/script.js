let controls = document.querySelectorAll(".control")
controls.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.target.style.transition = "all .3s"
        let currentActive = document.querySelector(".controls li.active")
        currentActive.classList.remove("active")
        e.target.classList.add("active")
    })
})
