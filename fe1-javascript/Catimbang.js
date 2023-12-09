const sum = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const btnOperations = document.querySelector("#button-perform-operation");
const btnReset = document.querySelector("#reset-button");
const addBox = document.querySelector("#addBox");
const subBox = document.querySelector("#subBox");
const mulBox = document.querySelector("#mulBox");
const divBox = document.querySelector("#divBox");

let sumVal = 0;
let subVal = 0;
let mulVal = 1;
let divVal = 1024;

btnOperations.addEventListener("click", () => {
    addOperations();
    subOperations();
    mulOperations();
    divOperations();
})

btnReset.addEventListener("click", () => {
    resetOperations();
})

addBox.addEventListener("click", () => {
    addOperations();
})

subBox.addEventListener("click", () => {
    subOperations();
})

mulBox.addEventListener("click", () => {
    mulOperations();
})

divBox.addEventListener("click", () => {
    divOperations();
})

function resetOperations()
{
    sum.textContent = sumVal = 0;
    sub.textContent = subVal = 0;
    mul.textContent = mulVal = 1;
    div.textContent = divVal = 1024;
}

function addOperations ()
{
    sum.textContent = sumVal += 2;
}

function subOperations ()
{
    sub.textContent = subVal -= 2;
}

function mulOperations ()
{
    mul.textContent = mulVal *= 2;
}

function divOperations ()
{
    div.textContent = divVal /= 2;
}
