/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var totalCost = 0;
var daysSelected = 0;
var dailyRate = 35;

const calculatedCost = document.getElementById("calculated-cost");
const mon = document.getElementById("monday");
const tues = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thur= document.getElementById("thursday");
const fri = document.getElementById("friday");
const clearDays = document.getElementById("clear-button");

const full = document.getElementById("full");
const half = document.getElementById("half");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
mon.addEventListener("click", mP);
tues.addEventListener("click", tuP);
wed.addEventListener("click", wP);
thur.addEventListener("click", thP);
fri.addEventListener("click", fP);

function mP() {

    mon.classList.add("clicked");
    calculate();
}

function tuP() {

    tues.classList.add("clicked");
    calculate();
}

function wP() {

    wed.classList.add("clicked");
    calculate();
}
function thP() {

    thur.classList.add("clicked");
    calculate();
}
function fP() {

    fri.classList.add("clicked");
    calculate();
}
function dayCounter() {

    if (mon.classList.contains("clicked")) {
        daysSelected ++;
    }
    if (tues.classList.contains("clicked")) {
        daysSelected ++;
    }
    if (wed.classList.contains("clicked")) {
        daysSelected ++;
    }
    if (thur.classList.contains("clicked")) {
        daysSelected ++;
    }
    if (fri.classList.contains("clicked")) {
        daysSelected ++;
    }

    console.log("Days Selected: "+daysSelected);
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDays.addEventListener("click", clear);

function clear() {

    console.log("clear-button");

    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");

    totalCost = 0;
    daysSelected = 0;

    calculate();
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener("click", halfRate);

function halfRate() {

    dailyRate = 20;

    full.classList.remove("clicked");
    half.classList.add("clicked");

    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click", fullRate);

function fullRate() {

    dailyRate = 35;

    half.classList.remove("clicked");
    full.classList.add("clicked");

    calculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {

    totalCost = 0;

    dayCounter();

    totalCost = daysSelected * dailyRate;

    daysSelected = 0;

    console.log("Total Cost: " + totalCost);

    calculatedCost.innerHTML = totalCost;
}

