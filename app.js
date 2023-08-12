const menuLinksFhoneBtn = document.querySelector(".menuLinksFhoneBtn");
const menuLinksFhone = document.querySelector(".menuLinksFhone");

menuLinksFhoneBtn.addEventListener("click" , () => {
    menuLinksFhone.classList.toggle("hidden");
    menuLinksFhoneBtn.classList.toggle("bg-white");
});

const itemMenuPhone = document.querySelectorAll(".itemMenuPhone");

itemMenuPhone.forEach((item) => {
    item.addEventListener("click" , () => {
        menuLinksFhone.classList.toggle("hidden");
        menuLinksFhoneBtn.classList.toggle("bg-white");
    });
});

const darkModeBtn = document.querySelector(".darkModeBtn");

darkModeBtn.addEventListener("click" , () => {
    document.body.classList.toggle("dark")});









