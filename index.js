"use strict";

let incomeList = [];
let expensesList = [];

const balance = document.querySelector("#balance");

//income inputs
const incomeNameInput = document.querySelector("#incomeNameInput");
const incomeNumber = document.querySelector("#incomeNumber");
const incomeButton = document.querySelector("#incomeButton");

//income ul
const unorderedListIncome = document.querySelector("#unorderedListIncome");

//income sum
const incomeSum = document.querySelector("#incomeSum");

//expenses inputs
const expensesNameInput = document.querySelector("#expensesNameInput");
const expensesNumber = document.querySelector("#expensesNumber");
const expensesButton = document.querySelector("#expensesButton");

//expenses ul
const unorderedListexpenses = document.querySelector("#unorderedListexpenses");

//expenses sum
const expensesSum = document.querySelector("#expensesSum");

const reduceValues = (listName, sumName) => {
  const valueAfterReduce = listName.reduce((acc, item) => {
    return acc + Number(item.value);
  }, 0);
  sumName.innerText = valueAfterReduce;
  const balanceValue =
    Number(incomeSum.innerHTML) - Number(expensesSum.innerHTML);
  if (balanceValue === 0) {
    balance.innerHTML = "Bilans wynosi zero";
  } else if (balanceValue > 0) {
    balance.innerHTML = `Możesz jeszcze wydać ${balanceValue} zł`;
  } else if (balanceValue < 0) {
    balance.innerHTML = `Bilans jest ujemny. Jesteś na minusie ${
      balanceValue * -1
    } zł`;
  }
};

const addItem = (nameInput, inputNumber, listName, ulList, sumName) => {
  if (
    nameInput.value === "" ||
    inputNumber.value === "" ||
    inputNumber.value <= 0
  ) {
    alert("Wprowadź poprawne dane");
  } else {
    const newItem = {
      name: nameInput.value,
      value: inputNumber.value,
      id: Date.now(),
    };
    listName.push(newItem);
    createListItem(newItem, listName, ulList, sumName);
    nameInput.value = "";
    inputNumber.value = "";
  }
};

const createListItem = (element, listName, ulListName, sumName) => {
  //list item
  const liElement = document.createElement("li");
  liElement.classList.add("mt-4");
  const textHolder = document.createElement("span");
  textHolder.classList.add("fs-5");
  textHolder.innerText = `${element.name}: ${element.value} zł`;

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
  deleteButton.id = element.id;

  //append list item and buttons

  liElement.appendChild(textHolder);
  liElement.appendChild(editButton);
  liElement.appendChild(deleteButton);
  ulListName.appendChild(liElement);

  const editListItem = () => {
    liElement.setAttribute("style", "position: relative");

    const newRow = document.createElement("div");
    newRow.setAttribute(
      "style",
      "background-color: white; position: absolute; top: -2px"
    );
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
    newNumberInput.setAttribute("type", "number");
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
      if (
        newNameInput.value === "" ||
        newNumberInput.value === "" ||
        newNumberInput.value <= 0
      ) {
        alert("Wprowadź poprawne dane");
      } else {
        element.name = newNameInput.value;
        element.value = newNumberInput.value;
        textHolder.innerText = `${element.name}: ${element.value} zł`;
        newRow.remove();
        reduceValues(listName, sumName);
      }
    };

    newAddButton.addEventListener("click", newAddButtonFunction);
  };
  editButton.addEventListener("click", editListItem);

  const deleteListItem = (event) => {
    const index = listName.findIndex((element) => {
      return element.id == event.target.id;
    });
    listName.splice(index, 1);
    liElement.remove();
    reduceValues(listName, sumName);
  };
  deleteButton.addEventListener("click", deleteListItem);
  reduceValues(listName, sumName);
};

incomeButton.addEventListener("click", () =>
  addItem(
    incomeNameInput,
    incomeNumber,
    incomeList,
    unorderedListIncome,
    incomeSum
  )
);

expensesButton.addEventListener("click", () =>
  addItem(
    expensesNameInput,
    expensesNumber,
    expensesList,
    unorderedListexpenses,
    expensesSum
  )
);
