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



document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {

        const action = button.dataset.action;
        const value = button.textContent;

        if (action === 'delete') {
            //   deleteLastChar();
        } else if (action === 'operator') {
            //  chooseOperation(button.textContent);
        } else if (action === 'number') {
            if (currentOperand === '0') {
                currentOperand = value;
            } else {
                currentOperand += value;
            }
            updateDisplay();
        }
    });
});



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

