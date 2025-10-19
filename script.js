const menuOpenButton = document.querySelector("#open-menu-button");
const menuCloseButton = document.querySelector("#close-menu-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());