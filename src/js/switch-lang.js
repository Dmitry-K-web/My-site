const langToggle = document.querySelector('[data-lang-toggle]');
let translations = {};

// Получение значения по вложенному ключу
function getNestedTranslation(obj, keyPath) {
    return keyPath.split('.').reduce((acc, key) => acc && acc[key] !== undefined ? acc[key] : null, obj);
}

// Применение переводов к тексту
function applyTextTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = getNestedTranslation(translations, key);
        if (translated) {
            el.innerHTML = translated;
        }
    });
}

// Применение переводов к атрибутам
function applyAttrTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n-attr-title], [data-i18n-attr-aria-label], [data-i18n-attr-alt], [data-i18n-attr-placeholder]');
    elements.forEach(el => {
        ['title', 'aria-label', 'alt', 'placeholder'].forEach(attrName => {
            const attrKey = `data-i18n-attr-${attrName}`;
            if (el.hasAttribute(attrKey)) {
                const key = el.getAttribute(attrKey);
                const translated = getNestedTranslation(translations, key);
                if (translated) {
                    el.setAttribute(attrName, translated);
                }
            }
        });
    });
}

function applyTranslations(lang) {
    applyTextTranslations(lang);
    applyAttrTranslations(lang);
}

function setLanguage(lang) {
    fetch(`locales/${lang}-i18n.json`)
        .then(res => res.json())
        .then(data => {
            translations = data;
            applyTranslations(lang);
            localStorage.setItem('language', lang);
            if (langToggle) langToggle.checked = lang === 'ru';
        })
        .catch(err => {
            console.error('Ошибка загрузки переводов:', err);
        });
}

langToggle?.addEventListener('change', () => {
    const lang = langToggle.checked ? 'ru' : 'en';
    setLanguage(lang);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || (navigator.language.startsWith('ru') ? 'ru' : 'en');
    setLanguage(savedLang);
});
