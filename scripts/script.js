let controls = document.querySelectorAll(".control")
let sections = document.querySelectorAll(".section")
controls.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.target.style.transition = "all .5s"
        let currentActive = document.querySelector(".controls li.active")
        currentActive.classList.remove("active")
        e.target.classList.add("active")

        for(let i = 0; i < controls.length; i++) {
            if (controls[i].classList.contains("active")) {
                sections[i].classList.add("active")
                console.log("Activated");
            }
            else {
                sections[i].classList.remove("active")
                console.log("Deactivated");
            }
        }
    })
})

// for(let i = 0; i < controls.length; i++) {
//     if (controls[i].classList.contains("active")) {
//         sections[i].classList.add("active")
//         console.log("Activated");
//     }
//     else {
//         sections[i].classList.remove("active")
//         console.log("Deactivated");
//     }
// }