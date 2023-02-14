
const balance = document.querySelector("#balance");
const incomeForm = document.querySelector("incomeForm");
const incomeNameInput = document.querySelector("#incomeNameInput");
const incomeNumber = document.querySelector("#incomeNumber");
const incomeButton = document.querySelector("#incomeButton");
const incomeSum = document.querySelector("#incomeSum");
const listIncome = document.querySelector("#listIncome");


const createListItem = () => {
    const liIncome = document.createElement("li");
    liIncome.classList.add("mt-4");
    liIncome.classList.add("fs-5");
    liIncome.innerText = `${incomeNameInput.value}: ${incomeNumber.value} zł`;

    const editButton = document.createElement("button");
    editButton.innerText = "Edytuj";
    editButton.classList.add("btn");
    editButton.classList.add("btn-primary");
    editButton.classList.add("me-4");
    editButton.classList.add("ms-4");
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Usuń";
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-primary");
    deleteButton.classList.add("me-4");

    listIncome.appendChild(liIncome);
    liIncome.appendChild(editButton);
    liIncome.appendChild(deleteButton);

    const editListItem = () => {
        const newNameInput = document.createElement("input");
        newNameInput.value = incomeNameInput.value;
        newNameInput.classList.add("form-control");
        newNameInput.classList.add("form-control-lg");

        const newNumberInput = document.createElement("input");
        newNumberInput.value = incomeNumber.value;
        newNumberInput.classList.add("form-control");
        newNumberInput.classList.add("form-control-lg");
        newNumberInput.classList.add("mt-2");
        newNumberInput.classList.add("mt-lg-0");
        liIncome.innerHTML = "";

        const newButton = document.createElement("button")
        newButton
        liIncome.appendChild(newNameInput);
        liIncome.appendChild(newNumberInput);
        liIncome.appendChild(newButton);

        const newButtonFunction = () => {
            liIncome.style.setProperty("display", "none");
        };

        newButton.addEventListener("click", newButtonFunction);
    }
    editButton.addEventListener("click", editListItem);

    const deleteListItem = () => {
        liIncome.style.setProperty("display", "none");
    }
    deleteButton.addEventListener("click", deleteListItem, createListItem);

    return liIncome;
}

incomeButton.addEventListener("click", createListItem);

