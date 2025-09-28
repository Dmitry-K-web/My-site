import AOS from 'aos';

window.addEventListener('DOMContentLoaded', () => {
    const preload = document.querySelector('[data-preload]');
    if (!preload) return;

    setTimeout(() => {
        preload.classList.add('is-hidden');
    }, 400);

    preload.addEventListener('transitionend', () => {
        preload.remove();
        // Запускаем AOS после удаления прелоадера
        AOS.init({
            delay: 200,
            duration: 600,
            once: true,
            anchorPlacement: 'center-top',
        });
    });
});


