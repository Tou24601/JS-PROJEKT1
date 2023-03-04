let incomeList = [];

/*

*/

const balance = document.querySelector("#balance");
//const incomeForm = document.querySelector("incomeForm");
const incomeNameInput = document.querySelector("#incomeNameInput");
const incomeNumber = document.querySelector("#incomeNumber");
const incomeButton = document.querySelector("#incomeButton");
const incomeSum = document.querySelector("#incomeSum");
const listIncome = document.querySelector("#listIncome");

const addItem = () => {
    const newItem = {
        name : incomeNameInput.value,
        value : incomeNumber.value,
        id : Date.now()
    };

    console.log(incomeList);
    incomeList.push(newItem);
    console.log(incomeList);
    renderIcomes()
 
};

const renderIcomes = () => {
    incomeList = "";
    incomeList.forEach(function(element) {
        createListItem(element);
    })

};

const createListItem = (element) => {

    const liElement = document.createElement("li");
    liElement.classList.add("mt-4");
    liElement.classList.add("fs-5");
    liElement.innerText = `${element.name}` + ": " + `${element.value}` + " zł";

    

    incomeNameInput.value = "";
    incomeNumber.value = "";

    return liElement;
};



incomeButton.addEventListener("click", addItem);