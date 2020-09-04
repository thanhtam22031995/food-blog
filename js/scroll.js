const toTop = document.querySelector(".to-top");
const hideMenu = document.querySelector(".header-bot__menu")
const hihiMenu = document.querySelector(".header-bot")
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})