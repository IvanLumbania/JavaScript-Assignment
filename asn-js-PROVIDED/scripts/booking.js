/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let daysSelected = 0;
let totalAmount = 0;

const fullDay = document.getElementById("full");
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const halfDay = document.getElementById('half');
const clear = document.getElementById('clear-button');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here"
monday.addEventListener("click", mondayClicked);
tuesday.addEventListener("click", tuesdayClicked);
wednesday.addEventListener("click", wednesdayClicked);
thursday.addEventListener("click", thursdayClicked);
friday.addEventListener("click", fridayClicked);

function mondayClicked(){
    if (monday.classList.contains("clicked")){
        monday.classList.remove("clicked");
        daysSelected --;
        calculateDaysSelected();
    } else{
        monday.classList.add("clicked");
        daysSelected ++;
        calculateDaysSelected();
    }
}

function tuesdayClicked(){
    if (tuesday.classList.contains("clicked")){
        tuesday.classList.remove("clicked");
        daysSelected --;
        calculateDaysSelected();
    } else{
        tuesday.classList.add("clicked");
        daysSelected ++;
        calculateDaysSelected();
    }
}

function wednesdayClicked(){
    if (wednesday.classList.contains("clicked")){
        wednesday.classList.remove("clicked");
        daysSelected --;
        calculateDaysSelected();
    } else{
        wednesday.classList.add("clicked");
        daysSelected ++;
        calculateDaysSelected();
    }
}

function thursdayClicked(){
    if (thursday.classList.contains("clicked")){
        thursday.classList.remove("clicked");
        daysSelected --;
        calculateDaysSelected();
    } else{
        thursday.classList.add("clicked");
        daysSelected ++;
        calculateDaysSelected();
    }
}

function fridayClicked(){
    if (friday.classList.contains("clicked")){
        friday.classList.remove("clicked");
        daysSelected --;
        calculateDaysSelected();

    } else{
        friday.classList.add("clicked");
        daysSelected ++;
        calculateDaysSelected();
    }
}






/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear.addEventListener('click',clearButtonClicked);

function clearButtonClicked(){
    if (monday.classList.contains("clicked")){
        monday.classList.remove("clicked");
    }

    if (tuesday.classList.contains("clicked")){
        tuesday.classList.remove("clicked");
    }

    if (wednesday.classList.contains("clicked")){
        wednesday.classList.remove("clicked");
    }

    if (thursday.classList.contains("clicked")){
        thursday.classList.remove("clicked");
    }
    
    if (friday.classList.contains("clicked")){
        friday.classList.remove("clicked");
    }
    daysSelected = 0;
    calculateDaysSelected();
}






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener('click', halfDayButton);
function halfDayButton(){
    if (halfDay.classList.contains('clicked')) {
        daysSelected = daysSelected;
        costPerDay = 20;
        calculateDaysSelected();
    }else  {
        fullDay.classList.remove('clicked');
        halfDay.classList.add('clicked');
        costPerDay = 20;
        calculateDaysSelected();
    }
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener('click', fullDayButton);
function fullDayButton(){
    if (fullDay.classList.contains('clicked')) {
        costPerDay = 35;
        calculateDaysSelected();
    }else {
        halfDay.classList.remove('clicked');
        fullDay.classList.add('clicked');
        costPerDay = 35;
        calculateDaysSelected();
    }
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateDaysSelected(){
    const priceChange = document.getElementById('calculated-cost');
    if (daysSelected  == 0){
        priceChange.innerHTML = 0;
    }else{
        totalAmount = daysSelected * costPerDay;
        priceChange.innerHTML = totalAmount;
    }
}
