// script.js
let currentOperand = '';
let previousOperand = '';
let operation = null;

const math = {
    'π': Math.PI,
    'e': Math.E,
    '^': (a, b) => Math.pow(a, b),
    '√': (a) => Math.sqrt(a),
    '%': (a, b) => a % b,
    'sin': (a) => Math.sin(a),
    'cos': (a) => Math.cos(a),
    'tan': (a) => Math.tan(a),
    'log': (a) => Math.log10(a),
    'ln': (a) => Math.log(a)
};

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function appendFunction(func) {
    if (currentOperand !== '') {
        currentOperand = `${func}(${currentOperand})`;
        compute();
    } else {
        currentOperand = `${func}(`;
    }
    updateDisplay();
}

function compute() {
    let computation;
    if (currentOperand.includes('(')) {
        let func = currentOperand.match(/[a-z]+/)[0];
        let num = parseFloat(currentOperand.match(/\(([^)]+)\)/)[1]);
        if (isNaN(num)) return;
        computation = math[func](num);
    } else {
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        computation = math[operation](prev, current);
    }
    currentOperand = computation;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentOperand;
}
