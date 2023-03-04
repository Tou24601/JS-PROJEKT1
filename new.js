let incomeList = [];

const balance = document.querySelector("#balance");

//income inputs
const incomeNameInput = document.querySelector("#incomeNameInput");
const incomeNumber = document.querySelector("#incomeNumber");
const incomeButton = document.querySelector("#incomeButton");

//income ul
const listIncome = document.querySelector("#listIncome");

//income sum
const incomeSum = document.querySelector("#incomeSum");

const addItem = () => {
    const newItem = {
        name : incomeNameInput.value,
        value : incomeNumber.value,
        id : Date.now()
    };

    incomeList.push(newItem);
    renderIcomes()
 
};

const renderIcomes = () => {
    incomeList.forEach(element => {
        createListItem(element);
    })};

const createListItem = (element) => {
    //list item
    const liElement = document.createElement("li");
    liElement.classList.add("mt-4");
    liElement.classList.add("fs-5");
    liElement.innerText = `${element.name}` + ": " + `${element.value}` + " zł";
    
    //edit button
    const editButton = document.createElement("button");
    editButton.innerText = "Edytuj";
    editButton.classList.add("btn");
    editButton.classList.add("btn-primary");
    editButton.classList.add("me-4");
    editButton.classList.add("ms-4");
    
    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Usuń";
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-primary");
    deleteButton.classList.add("me-4");

    //append list item and buttons

    listIncome.appendChild(liElement);
    liElement.appendChild(editButton);
    liElement.appendChild(deleteButton);

    const editListItem = () => {
        const newRow = document.createElement("div");
        newRow.setAttribute("style", "background-color: white");
        newRow.classList.add("row");

        const nameInputHolder = document.createElement("div");
        nameInputHolder.classList.add("col-12");
        nameInputHolder.classList.add("col-lg-6");
        newRow.appendChild(nameInputHolder);

        const newNameInput = document.createElement("input");
        newNameInput.value = element.name;
        newNameInput.classList.add("form-control");
        newNameInput.classList.add("form-control-lg");
        nameInputHolder.appendChild(newNameInput);

        const numberInputHolder = document.createElement("div");
        numberInputHolder.classList.add("col-4");
        newRow.appendChild(numberInputHolder);

        const newNumberInput = document.createElement("input");
        newNumberInput.value = element.value;
        newNumberInput.classList.add("form-control");
        newNumberInput.classList.add("form-control-lg");
        newNumberInput.classList.add("mt-2");
        newNumberInput.classList.add("mt-lg-0");
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
            element.name = newNameInput.value;
            element.value = newNumberInput.value;
            liElement.innerText = `${element.name}` + ": " + `${element.value}` + " zł";


            /*const editButton = document.createElement("button");
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
            liElement.appendChild(editButton);
            liElement.appendChild(deleteButton);*/

            newRow.remove();
        };

        newAddButton.addEventListener("click", newAddButtonFunction);
    }
    editButton.addEventListener("click", editListItem);

    const deleteListItem = () => {
        //usun z incomeList
        liElement.remove();
        console.log(incomeList);
    }
    deleteButton.addEventListener("click", deleteListItem);

    incomeNameInput.value = "";
    incomeNumber.value = "";

    const incomeAfterReduce = incomeList.reduce((acc, number) => {
        return acc + number;
    }, 0);
    console.log(incomeAfterReduce)
    incomeSum.innerHTML = incomeAfterReduce;
}


incomeButton.addEventListener("click", addItem);

