let items = [];

let elements = document.getElementsByClassName("row");
let priorityButtons = document.getElementsByClassName("priority-button");
let completedButtons = document.getElementsByClassName("completed-button");
let removeButtons = document.getElementsByClassName("remove-button");

let itemRemoved;

window.onload = function() {
    document.getElementById("task-table").onclick = removeButtonCheck;

    document.getElementById("submit-input").onclick = createItem;
}

const test = function() {
    alert("test");
}

// const updateId = function() {
//     for (let i = 0; i < items.length; i++) {
//         items[i].htmlRow.setAttribute("id", "row-" + i);
//         items[i].htmlPriorityButton.setAttribute("id", "priority-button-" + i);
//         items[i].htmlCompletedButton.setAttribute("id", "completed-button-" + i);
//         items[i].htmlRemoveButton.setAttribute("id", "remove-button-" + i);
//     }
// }

function removeItem(y) {
    const elementToRemove = elements[y];
    elementToRemove.remove();
    items.splice(y, 1);

    updateId();

    itemRemoved = true;
}

const removeButtonCheck = function() {
    itemRemoved = false;

    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].onclick = test;

        if (itemRemoved) {
            break;
        }
    }
}
const createItem = function() {
    let input = document.getElementById("enter-input").value;
    if (input === "") {}
    else {
        let object = {
            task: input,
            completed: false,
            prioritized: false,
            htmlRow: null,
            htmlPriorityButton: null,
            htmlText: null,
            htmlCompletedButton: null,
            htmlRemoveButton: null
        }

        items.push(object);

        let x = items.indexOf(object);

        items[x].htmlRow = document.createElement("tr");
        // items[x].htmlRow.setAttribute("id", "row-" + x);
        items[x].htmlRow.setAttribute("class", "row");
        document.getElementById("task-table").append(items[x].htmlRow);

        items[x].htmlPriorityButton = document.createElement("td");
        // items[x].htmlPriorityButton.setAttribute("id", "priority-button-" + x);
        items[x].htmlPriorityButton.setAttribute("class", "priority-button");
        items[x].htmlPriorityButton.innerHTML = "!";
        // document.getElementById("row-" + x).append(items[x].htmlPriorityButton);
        elements[x].append(items[x].htmlPriorityButton);

        items[x].htmlText = document.createElement("td");
        items[x].htmlText.innerHTML = items[x].task;
        // document.getElementById("row-" + x).append(items[x].htmlText);
        elements[x].append(items[x].htmlText);

        items[x].htmlCompletedButton = document.createElement("td");
        // items[x].htmlCompletedButton.setAttribute("id", "completed-button-" + x);
        items[x].htmlCompletedButton.setAttribute("class", "completed-button");
        items[x].htmlCompletedButton.innerHTML = "O";
        // document.getElementById("row-" + x).append(items[x].htmlCompletedButton);
        elements[x].append(items[x].htmlCompletedButton);

        items[x].htmlRemoveButton = document.createElement("td");
        // items[x].htmlRemoveButton.setAttribute("id", "remove-button-" + x);
        items[x].htmlRemoveButton.setAttribute("class", "remove-button");
        items[x].htmlRemoveButton.innerHTML = "X";
        // document.getElementById("row-" + x).append(items[x].htmlRemoveButton);
        elements[x].append(items[x].htmlRemoveButton);

        // updateId();
    }
    document.getElementById("enter-input").value = "";
}
