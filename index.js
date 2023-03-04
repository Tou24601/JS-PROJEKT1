let incomeList = [];


const balance = document.querySelector("#balance");
const incomeForm = document.querySelector("incomeForm");
const incomeNameInput = document.querySelector("#incomeNameInput");
const incomeNumber = document.querySelector("#incomeNumber");
const incomeButton = document.querySelector("#incomeButton");
const incomeSum = document.querySelector("#incomeSum");
const listIncome = document.querySelector("#listIncome");

const createListItem = () => {
    
    const liElement = document.createElement("li");
    liElement.classList.add("mt-4");
    liElement.classList.add("fs-5");
    const liName = incomeNameInput.value;
    const liNumber = incomeNumber.value
    liElement.innerText = `${liName}: ${liNumber} zł`;

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

    listIncome.appendChild(liElement);
    liElement.appendChild(editButton);
    liElement.appendChild(deleteButton);


    const editListItem = () => {
        const newRow = document.createElement("div");
        newRow.classList.add("row");

        const nameInputHolder = document.createElement("div");
        nameInputHolder.classList.add("col-12");
        nameInputHolder.classList.add("col-lg-6");
        newRow.appendChild(nameInputHolder);

        const newNameInput = document.createElement("input");
        newNameInput.value = liName;
        newNameInput.classList.add("form-control");
        newNameInput.classList.add("form-control-lg");
        nameInputHolder.appendChild(newNameInput);

        const numberInputHolder = document.createElement("div");
        numberInputHolder.classList.add("col-4");
        newRow.appendChild(numberInputHolder);

        const newNumberInput = document.createElement("input");
        newNumberInput.value = liNumber;
        newNumberInput.classList.add("form-control");
        newNumberInput.classList.add("form-control-lg");
        newNumberInput.classList.add("mt-2");
        newNumberInput.classList.add("mt-lg-0");
        liElement.innerHTML = "";
        numberInputHolder.appendChild(newNumberInput);

        const buttonHolder = document.createElement("div");
        buttonHolder.classList.add("col-2");
        newRow.appendChild(buttonHolder);

        const newAddButton = document.createElement("button");
        newAddButton.classList.add("btn");
        newAddButton.classList.add("btn-primary");
        newAddButton.classList.add("mt-2");
        newAddButton.classList.add("mt-lg-0");
        newAddButton.classList.add("me-4");
        newAddButton.classList.add("me-xl-0");
        newAddButton.classList.add("me-xl-0");
        newAddButton.innerText = "Dodaj";
        buttonHolder.appendChild(newAddButton);

        liElement.appendChild(newRow);

        const newAddButtonFunction = () => {
            liElement.remove();
        };

        newAddButton.addEventListener("click", createListItem);
        newAddButton.addEventListener("click", newAddButtonFunction);
    }
    editButton.addEventListener("click", editListItem);

    const deleteListItem = () => {
        liElement.remove();
    }
    deleteButton.addEventListener("click", deleteListItem);

    incomeNameInput.value = "";
    incomeNumber.value = "";

    return liElement;
}

/*const createListItem = () => {

    const ulItemId = Date.now();
    const ulItemName = incomeNameInput.value;
    const ulItemValue = incomeNumber.value;

    const ulItem = {
        id: ulItemId,
        name: ulItemName,
        value: ulItemValue,
        isDone: true
    }
    ulItems.push(ulItem);
    renderIdItem(ulItem);

    incomeNameInput.value = "";
    incomeNumber.value = "";
}*/


incomeButton.addEventListener("click", createListItem);



/*

const createListItem = () => {
    const liIncome = document.createElement("li");
    liIncome.classList.add("mt-4");
    liIncome.classList.add("fs-5");
    const liName = incomeNameInput.value;
    const liNumber = incomeNumber.value
    liIncome.innerText = `${liName}: ${liNumber} zł`;

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

    const renderListItem = () => {

    }

    const editListItem = () => {
        const newNameInput = document.createElement("input");
        newNameInput.value = incomeNameInput.value;
        newNameInput.classList.add("form-control");
        newNameInput.classList.add("form-control-lg");

        const newNumberInput = document.createElement("input");
        newNumberInput.value = incomeNumber.value;/*here is the problem
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

*/