const inputs = document.querySelectorAll('input');

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
    // console.log(e.target.value * parseInt(dataSet.value));

    Object.keys(cash).forEach((key) => console.log(cash[key]));

    console.log(cash);
    console.log(total);
};

Object.keys(cash).forEach((key) => console.log(cash[key]));

console.log(Object.keys(cash));