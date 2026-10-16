const plus = document.getElementById('plus');
const value = document.getElementById('value');
const minus = document.getElementById('minus');
const price = document.querySelector('.price');
const size = document.querySelector('.size');
const plus1 = document.getElementById('plus1');
const value1 = document.getElementById('value1');
const minus1 = document.getElementById('minus1');
const price1 = document.querySelector('.price1');
const size1 = document.querySelector('.size1');
let cost = 1500;
size.addEventListener('click', function(event) {
let clickTarget = event.target;
let currentActive = document.querySelector('.active');
if (clickTarget.classList.contains('medium')) {
cost = 1500;
price.textContent = Number(value.textContent) * cost + '$'
clickTarget.classList.add('active');
currentActive.classList.remove('active')
} else if (clickTarget.classList.contains('large')){
cost = 1700;
price.textContent = Number(value.textContent) * cost + '$'
clickTarget.classList.add('active');
currentActive.classList.remove('active')
};
});
function increment() {
let result = Number(value.textContent) + 1;
value.textContent = result;
price.textContent = Number(value.textContent) * cost + '$';
}
function decrement() {
if (Number(value.textContent) > 1){
let result = Number(value.textContent) - 1;
value.textContent = result;
}
price.textContent = Number(value.textContent) * cost + '$';
}
plus.onclick = increment;
minus.onclick = decrement;




let cost1 = 1500;
size1.addEventListener('click', function(event) {
let clickTarget1 = event.target;
let currentActive = document.querySelector('.active');
if (clickTarget1.classList.contains('medium1')) {
cost1 = 1500;
price1.textContent = Number(value1.textContent) * cost1 + '$'
clickTarget1.classList.add('active');
currentActive.classList.remove('active')
} else if (clickTarget1.classList.contains('large1')){
cost1 = 1700;
price1.textContent = Number(value1.textContent) * cost1 + '$'
clickTarget1.classList.add('active');
currentActive.classList.remove('active')
};
});

function increment1() {
let result = Number(value1.textContent) + 1;
value1.textContent = result;
price1.textContent = Number(value1.textContent) * cost1 + '$';
}
function decrement1() {
if (Number(value1.textContent) > 1){
let result1 = Number(value1.textContent) - 1;
value1.textContent = result1;
}
price1.textContent = Number(value1.textContent) * cost1 + '$';
}
plus1.onclick = increment1;
minus1.onclick = decrement1;