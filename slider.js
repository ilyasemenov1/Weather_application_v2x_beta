let slider_elements = document.querySelector(".slider__elements");
let slider_left_button = document.querySelector(".slider__left-button");
let slider_right_button = document.querySelector(".slider__right-button");
let slider__elements_conteiner = document.querySelector('.slider__elements-conteiner');

let slider_right_button_conteiner = document.querySelector('.slider__right-button-conteiner');
let slider_left_button_conteiner = document.querySelector('.slider__left-button-conteiner');

slider_elements.style.transform = "translateX(0px)";

tourch_slider_events();

slider_left_button.addEventListener('click', function(event) {
    left_button_event();
})
slider_left_button_conteiner.addEventListener('click', function(event) {
    left_button_event();
})


slider_right_button.addEventListener('click', function(event) {
    right_button_event();
})
slider_right_button_conteiner.addEventListener('click', function(event) {
    right_button_event();
})

function left_button_event() {
    const conteiner_width = slider__elements_conteiner.clientWidth;
    const element_width = 70 * 12;
    const max_scroll_width = (element_width - conteiner_width) * -1;
    const left = get_translateX(slider_elements);
    if (left > -140) {
        slider_elements.style.transform = "translateX(0px)";
    } else if (left <= -140) {
        slider_elements.style.transform = "translateX(" + (left + 140) + "px)";
    }
    if ((left + 140) < 0) {
        slider_left_button.style = "";
        slider_left_button.className = "slider__left-button slider__button slider__left-button-active";
    } else {
        slider_left_button.style = "background: rgba(230, 230, 230, .3)";
        slider_left_button.className = "slider__left-button slider__button";
    }
    if (!((left - 140) > max_scroll_width)) {
        slider_right_button.style = "";
        slider_right_button.className = "slider__right-button slider__button slider__right-button-active";
    }
}
function right_button_event() {
    const conteiner_width = slider__elements_conteiner.clientWidth;
    const element_width = 70 * 12;
    const max_scroll_width = (element_width - conteiner_width) * -1;
    const left = get_translateX(slider_elements);
    if ((left + -140) > max_scroll_width) {
        slider_elements.style.transform = "translateX(" + (left - 140) + "px)";
    } else {
        slider_elements.style.transform = "translateX(" + max_scroll_width + "px)";
    }
    if ((left - 140) > max_scroll_width) {
        slider_right_button.style = '';
        slider_right_button.className = "slider__right-button slider__button slider__right-button-active";
    } else {
        slider_right_button.style = "background: rgba(230, 230, 230, .3)";
        slider_right_button.className = "slider__right-button slider__button";
    }
    if (!((left + 140) < 0)) {
        slider_left_button.className = "slider__left-button slider__button slider__left-button-active";
        slider_left_button.style = "";
    }
}
function tourch_slider_events() {

    const left_ = get_translateX(slider_elements);

    let start_pos;
    let slider_pos_element;
    let mouse_pos;

    const conteiner_width = slider__elements_conteiner.clientWidth;
    const element_width = 70 * 12;
    const max_scroll_width = (element_width - conteiner_width) * -1;

    let anable_mousedown;

    if (left_ < 0) {
        slider_left_button.style = "";
        slider_left_button.className = "slider__left-button slider__button slider__left-button-active";
    } else {
        slider_left_button.style = "background: rgba(230, 230, 230, .3)";
        slider_left_button.className = "slider__left-button slider__button";
    }
    if (left_ > max_scroll_width) {
        slider_right_button.style = "";
        slider_right_button.className = "slider__right-button slider__button slider__right-button-active";
    } else {
        slider_right_button.style = "background: rgba(230, 230, 230, .3)";
        slider_right_button.className = "slider__right-button slider__button";
    }

    // for mouse events
    slider__elements_conteiner.addEventListener("mousedown", function(event) {
        start_pos = event.clientX;
        console.log("start pos: " + start_pos);
        anable_mousedown = true;
    })
    slider__elements_conteiner.addEventListener('mouseup', function(event) {
        anable_mousedown = false;
        const left = get_translateX(slider_elements);
        start_pos = event.clientX;
    })
    slider__elements_conteiner.addEventListener("mousemove", function(event) {
        if (anable_mousedown) {

            const left = get_translateX(slider_elements);

            mouse_pos = event.clientX;

            console.log("left:" + left);
            console.log("mouse pos: " + mouse_pos);

            slider_pos_element = start_pos - mouse_pos;

            console.log("slider pos element: " + slider_pos_element);

            const conteiner_width = slider__elements_conteiner.clientWidth;
            const element_width = 70 * 12;
            const max_scroll_width = (element_width - conteiner_width) * -1;

            if ((left - slider_pos_element) > 0) {
                slider_elements.style.transform = "translateX(" + 0 + "px)";
            } else if ((left - slider_pos_element) < max_scroll_width) {
                slider_elements.style.transform = "translateX(" + max_scroll_width + "px)";
            } else {
                    slider_elements.style = "transform: translateX(" + (left - slider_pos_element) + "px); transition-duration: .5s;";
            }

            if (left <= -5) {
                slider_left_button.style = "";
            } else {
                slider_left_button.style = "background: rgba(230, 230, 230, .3)";
            }
            if (left > max_scroll_width + 5) {
                slider_right_button.style = "";
            } else {
                slider_right_button.style = "background: rgba(230, 230, 230, .3)";
            }
        }
    })

    // for touch events
    slider__elements_conteiner.addEventListener("touchstart", function(event) {
        start_pos = event.clientX;
        console.log("start pos: " + start_pos);
        anable_mousedown = true;
    })
    slider__elements_conteiner.addEventListener('touchend', function(event) {
        anable_mousedown = false;
        const left = get_translateX(slider_elements);
        start_pos = event.clientX;
    })
    slider__elements_conteiner.addEventListener("touchmove", function(event) {
        if (anable_mousedown) {

            const left = get_translateX(slider_elements);

            mouse_pos = event.clientX;

            console.log("mouse pos: " + mouse_pos);

            slider_pos_element = start_pos - mouse_pos;

            console.log("slider pos element: " + slider_pos_element);

            const conteiner_width = slider__elements_conteiner.clientWidth;
            const element_width = 70 * 12;
            const max_scroll_width = (element_width - conteiner_width) * -1;

            if ((left - slider_pos_element) > 0) {
                slider_elements.style.transform = "translateX(" + 0 + "px)";
            } else if ((left - slider_pos_element) < max_scroll_width) {
                slider_elements.style.transform = "translateX(" + max_scroll_width + "px)";
            } else {
                if (parseInt(slider_pos_element) > 100 || parseInt(slider_pos_element) < -100) {
                    console.log("slow");
                    slider_elements.style = "transform: translateX(" + (left - slider_pos_element) + "px); transition-duration: 2s;";
                } else {
                    slider_elements.style.transform = "translateX(" + (left - slider_pos_element) + "px)";
                }
            }
        }
    })
}
function get_translateX(element) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }
