// Calculator state
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let resetScreen = false;

// !------ Dom elements ------ !
// Screens
const currentOperandElement = document.querySelector('.current-operand');
const previousOperandElement = document.querySelector('.previous-operand');

// Buttons 
const numberButtons = document.querySelectorAll('[data-action="number"]');
const operatorButtons = document.querySelectorAll('[data-action="operator"]');
const equalsButton = document.querySelector('[data-action="calculate"]');
const clearButton = document.querySelector('[data-action="clear"]');
const deleteButton = document.querySelector('[data-action="delete"]');
const decimalButton = document.querySelector('[data-action="decimal"]');



// Update calculator display
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
}

function appendNumber() {

}

// function for the button 'del'
function deleteChar() {
    currentOperand = currentOperand.slice(0, -1);
}

// fuction for the button 'AC'
function clearScreen() {
    currentOperand = '0';

}

function chooseOperation() {
    console.log(value);

    if (value === '+') {
        console.log('Plus operation selected');
    } else if (value === '-') {

    } else if (value === '×') {

    } else if (value === '÷') {

    }
}






document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {

        const action = button.dataset.action;
        const value = button.textContent; // use it to get the value : numbers, operators 

        if (action === 'operator') {
            chooseOperation(value);
            // updateDisplay();

        } else if (action === 'number') {
            if (currentOperand === '0') {
                currentOperand = value;
            } else {
                currentOperand += value;
            }

        } else if (action == 'delete') {

            deleteChar();

            if (currentOperand.length === 0) {
                currentOperand = '0';
            }

        } else if (action == 'clear') {
            clearScreen();
        }
        updateDisplay();
    });
});

// adding keyboard support - only numbers 
document.addEventListener('keydown', (e) => {


    if (e.key >= '0' && e.key <= '9') {
        console.log(e.key);
        let value = e.key;
        if (currentOperand === '0') {
            currentOperand = value;
        } else {
            currentOperand += value;
        }
        updateDisplay();

    }
})




// Keyboard support 

// document.addEventListener("keydown", (e) => {
//     if (e.key >= '0' && e.key <= '9') {
//         appendNumber(e.key);
//         updateDisplay();
//     } else if (e.key === '.') {
//         addDecimal();
//         updateDisplay();
//     } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
//         chooseOperation(e.key === '*' ? '×' : e.key === '/' ? '÷' : e.key);
//         updateDisplay();
//     } else if (e.key === 'Enter' || e.key === '=') {
//         compute();
//         updateDisplay();
//     } else if (e.key === 'Backspace') {
//         deleteDigit();
//         updateDisplay();
//     } else if (e.key === 'Escape') {
//         clear();
//         updateDisplay();
//     }
// })


// the colour changing button

const themeToggler = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const container = document.querySelector('.container');

// Start with a dark theme instead of pink (optional)
calculator.classList.remove('pink');
calculator.classList.add('dark');
// If you also want the container background to change:
container.classList.add('dark');

themeToggler.addEventListener('click', () => {
    themeToggler.classList.toggle('active');

    // flip calculator theme
    container.classList.toggle('dark');
    container.classList.toggle('pink');

    // optional: flip container background too
    //container.classList.toggle('dark');
});


