/*array incomes = [
    id: string,
    name: string.
]
]*/

const balance = document.querySelector("#balance");
const incomeForm = document.querySelector("incomeForm");
const incomeNameInput = document.querySelector("#incomeNameInput");
const incomeSumInput = document.querySelector("#incomeSumInput");
const incomeButton = document.querySelector("#incomeButton");
const incomeSum = document.querySelector("#incomeSum");
const listIncome = document.querySelector("#listIncome");

/*const incomeCreate = (event) => {
    event.pre
}*/


const incomeCreate = (event) => {
    event.preventDefault();
    /*const liIncome = document.createElement("li");
    liIncome.innerText = '${incomeNameInput.value}: ${incomeSumInput.value} zł';
    listIncome.appendChild(liIncome);
    return liIncome;*/
}

incomeForm.addEventListener("submit", incomeCreate());
