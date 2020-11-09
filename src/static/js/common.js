import IMask from 'imask';
const headerMobileButton = document.querySelector("#top-menu-mobile-btn")
const headerMobileMenuContainer = document.querySelector("#top-menu-mobile-container")

headerMobileButton.addEventListener("click", () => {
    headerMobileMenuContainer.classList.toggle("top-menu__mobile_visible")
})
const requestCallInput = document.querySelector("#request_call_input")
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};
const mask = IMask(requestCallInput, maskOptions);