let search__input = document.querySelector('.search__input');
let search__conteiner = document.querySelector('.search__conteiner');
let search = document.querySelector(".search");
let search__button = document.querySelector(".search__button");
let display_dark = document.querySelector(".dispay-dark");
let main_contenier = document.querySelector(".main-contenier");
let page_content_weather = document.querySelector(".page-content-weather")

// search buttons actions
search__input.addEventListener('focus', function(event) {
    search_focus();
})
search__input.addEventListener('blur', function(event) {
    search_blur();
})
search__button.addEventListener('mouseover', function(event) {
    this.style = "transition: .3s ease";
})
search__button.addEventListener('focus', function(event) {
    search_focus();
})
search__button.addEventListener('blur', function(event) {
    search_blur();
})
function search_focus() {
    search__conteiner.className = "search__conteiner search__conteiner-focus";
    search.className = "search search-focus";
    search__input.className = "search__input search__input-focus";
    search__input.placeholder = "";
    search__button.className = "search__button click-button search__button-focus";
    search__button.style = "transition: 0s ease;";
    display_dark.className = "dispay-dark dispay-dark-on";
    main_contenier.style = "overflow: hidden;";
    page_content_weather.style = "pointer-events: none;"
}
function search_blur() {
    search__conteiner.className = "search__conteiner";
    search.className = "search";
    search__input.className = "search__input";
    search__input.placeholder = "Введите название города...";
    search__button.className = "search__button click-button";
    search__button.style = "transition: 0s ease;";
    display_dark.className = "dispay-dark";
    main_contenier.style = "";
    page_content_weather.style = "";
}
