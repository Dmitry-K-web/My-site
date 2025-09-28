const burgerBtn = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;
const menuLinks = document.querySelectorAll('.mobile-menu__link');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    body.classList.toggle('lock');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
        body.classList.remove('lock');
    });
});