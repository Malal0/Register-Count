const inputs = document.querySelectorAll('input');
const totalText = document.querySelector('#total');
const resetBtn = document.querySelector('#reset-btn');

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

function updateTotal(e) {
    const dataSet = e.target.dataset;
    cash[dataSet.name] = e.target.value * parseInt(dataSet.value);
    //code for adding cash totals
    const arr = Object.values(cash);
    total = arr.reduce((total, num) => total + num, 0);
    //code for adding cash totals
    totalText.innerHTML = (total / 100).toFixed(2);
};

inputs.forEach((each) => {
    each.addEventListener('input', (e) => {
        console.log(typeof each.value)
        if (parseFloat(each.value) || each.value == '') {
            each.classList.remove('error');
        } else {
            console.log('error')
            each.classList.add('error');
        }

        //  fix empty above

        updateTotal(e);
    })
    each.addEventListener('blur', () => {
        if (each.value === 0) {
            each.value = '';
        }
    })
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    inputs.forEach((input) => input.value = '');
    total = (0).toFixed(2);
    totalText.innerHTML = total;
    const cashArr = Object.keys(cash);
    cashArr.forEach((key) => cash[key] = 0);
})

///////////////code for darkmode toggle

const toggleBtn = document.querySelector('#toggle-btn');
const toggleContainer = document.querySelector('.toggle-container');
const body = document.querySelector('body');
let isDarkMode = true;

toggleContainer.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    isDarkMode ? toggleContainer.classList.add('flex-end') : toggleContainer.classList.remove('flex-end');

    isDarkMode ? body.classList.add('lightmode') : body.classList.remove('lightmode');

    isDarkMode = !isDarkMode;
}