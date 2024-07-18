
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const roles = ["Front-End Developer", "React Developer", "Software Developer"];
    const roleElement = document.getElementById('role');
    let currentIndex = 0;

    function changeRole() {
        roleElement.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            roleElement.textContent = roles[currentIndex];
            roleElement.style.opacity = 1;
        }, 500);
    }

    setInterval(changeRole, 4000);
});