import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
Fancybox.bind("[data-fancybox]", {
    Toolbar: true,        // Панель управления (стрелки, закрыть, зум)
    closeButton: "top",   // Кнопка закрытия сверху
    Thumbs: false,        // Миниатюры отключены
    dragToClose: true,    // Закрытие перетаскиванием
    wheel: "zoom",        // Зум колесом мыши
    infinite: true,       // Зацикливать галерею
    animated: true,       // Анимация перехода

});