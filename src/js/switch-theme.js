const checkbox = document.querySelector('[data-theme-toggle]');

checkbox?.addEventListener('change', () => {
    const isDark = checkbox.checked;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

    const checkbox = document.querySelector('[data-theme-toggle]');
    if (checkbox) checkbox.checked = isDark;
});


