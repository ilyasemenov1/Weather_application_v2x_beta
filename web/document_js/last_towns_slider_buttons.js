let is_left_active = true;
let is_right_active = true;

let slider_button_left_contener = document.querySelector('.slider-button-conteiner__left');
let slider_button_left = document.querySelector('.left-slider-button');

slider_button_left_contener.addEventListener('mouseover', function(event) {
    slider_button_left.className = "slider-button right-slider-button left-slider-button-active";
    is_left_active = false;
})
slider_button_left_contener.addEventListener('mouseout', function(event) {
    slider_button_left.className = "slider-button left-slider-button";
    is_left_active = true;
})


let slider_button_right_contener = document.querySelector('.slider-button__conteiner-right');
let slider_button_right = document.querySelector('.right-slider-button');

slider_button_right_contener.addEventListener('mouseover', function(event) {
    slider_button_right.className = "slider-button right-slider-button right-slider-button-active";
    is_right_active = false;
})
slider_button_right_contener.addEventListener('mouseout', function(event) {
    slider_button_right.className = "slider-button right-slider-button";
    is_right_active = true;
})

let last_tows_slider_conteiner = document.querySelector('.last-tows__slider-conteiner');
let slider_button = document.querySelectorAll('.slider-button');

last_tows_slider_conteiner.addEventListener('mouseover', function(event) {
    if (is_left_active) {
        slider_button[0].className = "slider-button left-slider-button active";
    }
    if (is_right_active) {
        slider_button[1].className = "slider-button right-slider-button active";
    }
})
last_tows_slider_conteiner.addEventListener('mouseout', function(event) {
    slider_button[0].className = "slider-button left-slider-button hidden";
    slider_button[1].className = "slider-button right-slider-button hidden";
})