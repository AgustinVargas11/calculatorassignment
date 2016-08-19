'use strict';

// collect inputs from input elements, add them then write value to the dom
function add() {
    var number1 = document.getElementById('add1').value,
        number2 = document.getElementById('add2').value,
        result  = document.getElementById('addition-screen');
    
    result.innerHTML = Number(number1) + Number(number2);
}


// collect inputs from input elements, subtract them then write value to the dom
function subtract() {
    var number1 = document.getElementById('sub1').value,
        number2 = document.getElementById('sub2').value,
        result  = document.getElementById('subtraction-screen');
    
    result.innerHTML = Number(number1) - Number(number2);
}


// collect inputs from input elements, multiply them then write value to the dom
function multiply() {
    var number1 = document.getElementById('mult1').value,
        number2 = document.getElementById('mult2').value,
        result  = document.getElementById('multiplication-screen');
    
    result.innerHTML = Number(number1) * Number(number2);
}



// expand input boxes or shrink if already expanded
function expandInputs() {
    if (!this.expanded) {
        this.expanded = true;
        this.parentNode.children[2].classList.add('full-width-toggle');
        this.parentNode.children[3].classList.add('full-width-toggle');
    } else {
        this.parentNode.children[2].classList.remove('full-width-toggle');
        this.parentNode.children[3].classList.remove('full-width-toggle');
        this.expanded = false;
    }
}

// add event listeners
var addButton = document.getElementById('addition');
addButton.addEventListener('click', add);

var subButton = document.getElementById('minus');
subButton.addEventListener('click', subtract);

var multButton = document.getElementById('times');
multButton.addEventListener('click', multiply);


var toggles = document.getElementsByClassName('input-toggle');

// add even listener to all elements in the toggles array
for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', expandInputs);
}



