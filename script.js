let array = [];

// Get the HTML elements
const elementInput = document.getElementById("elementInput");
const indexInput = document.getElementById("indexInput");
const arrayElements = document.getElementById("arrayElements");
const message = document.getElementById("message");

// Display the current array using forEach()
function displayArray() {
    arrayElements.innerHTML = "";

    if (array.length === 0) {
        arrayElements.textContent = "The array is empty.";
        return;
    }

    array.forEach(function (element, index) {
        const item = document.createElement("div");
        item.className = "array-item";

        const text = document.createElement("span");
        text.textContent = "Element " + index + ": " + element;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            removeElement(index);
        });

        item.appendChild(text);
        item.appendChild(deleteButton);
        arrayElements.appendChild(item);
    });
}

// Add an element to the end using push()
function addElement() {
    const element = elementInput.value.trim();

    if (element === "") {
        message.textContent = "Please enter a value.";
        return;
    }

    array.push(element);
    elementInput.value = "";
    message.textContent = "Element added to the end.";
    displayArray();
}

// Add an element to the beginning using unshift()
function addFirst() {
    const element = elementInput.value.trim();

    if (element === "") {
        message.textContent = "Please enter a value.";
        return;
    }

    array.unshift(element);
    elementInput.value = "";
    message.textContent = "Element added to the beginning.";
    displayArray();
}

// Remove the last element using pop()
function removeLast() {
    if (array.length === 0) {
        message.textContent = "The array is already empty.";
        return;
    }

    const removed = array.pop();
    message.textContent = "Removed: " + removed;
    displayArray();
}

// Remove the first element using shift()
function removeFirst() {
    if (array.length === 0) {
        message.textContent = "The array is already empty.";
        return;
    }

    const removed = array.shift();
    message.textContent = "Removed: " + removed;
    displayArray();
}

// Remove one element at a specific index using splice()
function removeElement(index) {
    if (!Number.isInteger(index) ||
        index < 0 || index >= array.length) {
        message.textContent = "Please enter a valid index.";
        return;
    }

    const removed = array.splice(index, 1);
    message.textContent = "Removed: " + removed[0];
    displayArray();
}

// Connect the buttons to their functions
document.getElementById("addLastButton")
    .addEventListener("click", addElement);

document.getElementById("addFirstButton")
    .addEventListener("click", addFirst);

document.getElementById("removeLastButton")
    .addEventListener("click", removeLast);

document.getElementById("removeFirstButton")
    .addEventListener("click", removeFirst);

document.getElementById("removeIndexButton")
    .addEventListener("click", function () {
        const index = indexInput.value.trim();

        if (index === "") {
            message.textContent = "Please enter an index.";
            return;
        }

        removeElement(Number(index));
        indexInput.value = "";
    });

// Show the initial array
displayArray();
