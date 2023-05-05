
//  hamburger
let ham = document.querySelectorAll(".hamburger");
let sidemenu = document.querySelector(".sidemenu");
let img = document.querySelectorAll(".cross");
let toggle = true;
for (let x of ham) {
    x.addEventListener("click", () => {
        sidemenu.classList.toggle("active");
        toggle = !toggle;
        for (let yu of img) {
            if (toggle) {
                yu.src = "./images/icon-menu.svg"
            } else {
                yu.src = "./images/icon-close-menu.svg"
            }
        }
    })
}
//menu
let ff = document.querySelector(".ff");
let cc = document.querySelector(".cc");
let sfcont = document.querySelector(".sfcont");
let sccont = document.querySelector(".sccont");
ff.addEventListener("click", () => {
    sfcont.classList.toggle("active");
})
cc.addEventListener("click", () => {
    sccont.classList.toggle("active");
})
