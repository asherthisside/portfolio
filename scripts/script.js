// let controls = document.querySelectorAll(".control")
// let sections = document.querySelectorAll(".section")
// controls.forEach((element) => {
//     element.addEventListener("click", (e) => {
//         e.target.style.transition = "all .5s"
//         let currentActive = document.querySelector(".controls li.active")
//         currentActive.classList.remove("active")
//         e.target.classList.add("active")

//         for(let i = 0; i < controls.length; i++) {
//             if (controls[i].classList.contains("active")) {
//                 sections[i].classList.add("active")
//                 console.log("Activated");
//             }
//             else {
//                 sections[i].classList.remove("active")
//                 console.log("Deactivated");
//             }
//         }
//     })
// })           // Alternative 1

const controlButtons = document.querySelectorAll(".control");
const sections = document.querySelectorAll(".section");

controlButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        controlButtons.forEach((btn) => btn.classList.remove("active"));
        sections.forEach((sec) => sec.classList.remove("active"));

        button.classList.add("active");
        sections[index].classList.add("active");
    });
});             // Alternative 2

let btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
})