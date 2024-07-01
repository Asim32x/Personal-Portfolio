
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const text = document.querySelector(".section__text__p2");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-End-Developer!";
    }, 1000);

    setTimeout(() => {
        text.textContent = "React Developer";
    }, 3000);


}

textLoad();