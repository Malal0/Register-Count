const inputs = document.querySelectorAll('input');
const totalText = document.querySelector('#total');

let total = 0;

const cash = {
    pennies: 0,
    nickles: 0,
    dimes: 0,
    quarters: 0,
    "five dollars": 0,
    "ten dollars": 0,
    "twenty dollars": 0,
    "fifty dollars": 0,
    "one hundred dollars": 0,
};

inputs.forEach((each) => {
    each.addEventListener('input', (e) => updateTotal(e))
});

function updateTotal(e) {
    const dataSet = e.target.dataset;
    cash[dataSet.name] = e.target.value * parseInt(dataSet.value);

    //code for adding cash totals
    const arr = Object.values(cash);
    total = arr.reduce((total, num) => total + num, 0);
    //code for adding cash totals

    // console.log(cash);
    console.log(total);
    totalText.innerHTML = total / 100;
};

Object.keys(cash).forEach((key) => console.log(cash[key]));

console.log(Object.keys(cash));