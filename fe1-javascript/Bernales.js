const sum = document.querySelector("#sum");
const difference = document.querySelector("#difference");
const product = document.querySelector("#product");
const quotient = document.querySelector("#quotient");

const performButton = document.querySelector("#perform-button");

let sumVal = 0;
let differenceVal = 0;
let productVal = 1;
let quotientVal = 1024;

performButton.addEventListener("click", () => {
    computeSum();
    computeDifference();
    computeProduct();
    computeQuotient();
})

function computeSum() {
    sum.textContent = sumVal+=2;
}
function computeDifference() {
    difference.textContent = differenceVal-=2;
}
function computeProduct() {
    product.textContent = productVal*=2;
}
function computeQuotient() {
    quotient.textContent = quotientVal/=2;
}




/******************** ALTERNATIVE *******************
performButton.addEventListener("click", () => {
    sumVal = addTwo(sumVal);
    differenceVal = subtractTwo(differenceVal);
    productVal = multiplyTwo(productVal);
    quotientVal = divideTwo(quotientVal);
    sum.textContent = sumVal;
    difference.textContent = differenceVal;
    product.textContent = productVal;
    quotient.textContent = quotientVal;
})
function addTwo(num) {
    return num + 2;
}
function subtractTwo(num) {
    return num - 2;
}
function multiplyTwo(num) {
    return num * 2;
}
function divideTwo(num) {
    return num / 2;
}
******************************************************/
