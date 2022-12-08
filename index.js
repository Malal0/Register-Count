const inputs = document.querySelectorAll('input');

const cash = new Map();

cash.set([1, 0]);
cash.set([5, 0]);
cash.set([10, 0]);
cash.set([25, 0]);
cash.set([100, 0]);
cash.set([500, 0]);
cash.set([1000, 0]);
cash.set([2000, 0]);
cash.set([5000, 0]);
cash.set([10000, 0]);

inputs.forEach((each) => {
    each.addEventListener('input', (e) => console.log(console.log(e.target.value * parseInt(e.target.dataset.value))))
});