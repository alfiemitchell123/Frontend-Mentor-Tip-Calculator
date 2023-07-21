let billInput = document.querySelector('#bill-input');
let peopleInput = document.querySelector('#people-input');
let total;
let tipPerPerson;

const percentageButtons = document.getElementsByName('tip-radio');
const customBtn = document.querySelector('#custom-btn');
const resetBtn = document.querySelector('#reset-btn');
const tipAmt = document.querySelector('#tip-amt');
const totalAmt = document.querySelector('#total-amt');

const calculateTotal = function () {
    let selected = Array.from(percentageButtons).find(radio => radio.checked);
    tipPerPerson = (billInput.value * selected.value) / peopleInput.value;
    // Round to two decimal places
    tipPerPerson = Math.round(tipPerPerson * 100) / 100;
    tipPerPerson = tipPerPerson.toFixed(2);

    total = (parseFloat(billInput.value) + parseFloat(tipPerPerson)) / parseFloat(peopleInput.value);
    // Round to two decimal places
    // total = total.toFixed(2);

    tipAmt.innerHTML = tipPerPerson;
    totalAmt.innerHTML = total;
}

billInput.addEventListener('input', calculateTotal);
peopleInput.addEventListener('input', calculateTotal);