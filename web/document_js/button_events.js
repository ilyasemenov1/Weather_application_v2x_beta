var weekly_forecast_day = document.querySelectorAll('.weekly-forecast-day');

// five days buttons actions
let button;
for (button of weekly_forecast_day) {
    button.addEventListener('mouseover', function(event) {
        let button_hover = this.getElementsByClassName('day-info-button')[0];
        button_hover.style = "transform: translateY(-3px);";
    }) 
    button.addEventListener('mouseout', function(event) {
        let button_hover = this.getElementsByClassName('day-info-button')[0];
        button_hover.style = "transform: translateY(0px);";
    })    
}