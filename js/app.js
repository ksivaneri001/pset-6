let items = [];

let elements = document.getElementsByClassName("row");
let priorityButtons = document.getElementsByClassName("priority-button");
let text = document.getElementsByClassName("text");
let completedButtons = document.getElementsByClassName("completed-button");
let removeButtons = document.getElementsByClassName("remove-button");

let priorityChanged;
let completionChanged;
let itemRemoved;

// Runs other functions once page loads
window.onload = function() {
    document.getElementById("task-table").onclick = runModificationFunctions;

    document.getElementById("submit-input").onclick = createItem;
};

// Creates item when user presses enter key
document.addEventListener("keyup", function(pressEnter) {
  if (pressEnter.keyCode === 13) {
    createItem();
  }
});

// Function that changes priority of object and moves both element and object
const prioritizeItem = function() {
    priorityChanged = false;

    for (let i = 0; i < priorityButtons.length; i++) {
        priorityButtons[i].onclick = function() {
            if (items[i].prioritized === false) {
                const elementToPrioritize = elements[i];
                priorityButtons[i].style.color = "red";
                elements[0].before(elementToPrioritize);
                items[i].prioritized = true;

                const objectToMove = items[i];
                items.splice(i, 1);
                items.unshift(objectToMove);
                priorityChanged = true;
            }
            else if (items[i].prioritized) {
                const elementToPrioritize = elements[i];
                priorityButtons[i].style.color = "black";
                elements[elements.length - 1].after(elementToPrioritize);
                items[i].prioritized = false;

                const objectToMove = items[i];
                items.splice(i, 1);
                items.push(objectToMove);
                priorityChanged = true;
            }
        };

        if (priorityChanged) {
            break;
        }
    }
};

// Marks items as complete
const markAsComplete = function() {
    completionChanged = false;

    for (let i = 0; i < completedButtons.length; i++) {
        completedButtons[i].onclick = function() {
            if (items[i].completed === false) {
                text[i].style.setProperty("text-decoration", "line-through");
                text[i].style.backgroundColor = "#baff66";
                items[i].completed = true;
            }
            else if (items[i].completed) {
                text[i].style.setProperty("text-decoration", "none");
                text[i].style.backgroundColor = "transparent";
                items[i].completed = false;
            }
        };

        if (priorityChanged) {
            break;
        }
    }
};

// Removes element and object
const removeItem = function() {
    itemRemoved = false;

    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].onclick = function() {
            const elementToRemove = elements[i];
            elementToRemove.remove();
            items.splice(i, 1);
            itemRemoved = true;
        };

        if (itemRemoved) {
            break;
        }
    }
}

// Runs the prioritization, completion, and removal functions
const runModificationFunctions = function() {
    prioritizeItem();
    markAsComplete();
    removeItem();
};

// Creates new object and corresponding element
const createItem = function() {
    let input = document.getElementById("enter-input").value;
    if (input === "") {}
    else {
        let object = {
            task: input,
            prioritized: false,
            completed: false,
            htmlRow: null,
            htmlPriorityButton: null,
            htmlText: null,
            htmlCompletedButton: null,
            htmlCheckImage: null,
            htmlRemoveButton: null
        }

        items.push(object);

        let x = items.indexOf(object);

        items[x].htmlRow = document.createElement("tr");
        items[x].htmlRow.setAttribute("class", "row");
        document.getElementById("task-table").append(items[x].htmlRow);

        items[x].htmlPriorityButton = document.createElement("td");
        items[x].htmlPriorityButton.setAttribute("class", "priority-button");
        items[x].htmlPriorityButton.innerHTML = "!";
        elements[x].append(items[x].htmlPriorityButton);

        items[x].htmlText = document.createElement("td");
        items[x].htmlText.innerHTML = items[x].task;
        items[x].htmlText.setAttribute("class", "text");
        elements[x].append(items[x].htmlText);

        items[x].htmlCompletedButton = document.createElement("td");
        items[x].htmlCompletedButton.setAttribute("class", "completed-button");
        elements[x].append(items[x].htmlCompletedButton);

        items[x].htmlCheckImage = document.createElement("img");
        items[x].htmlCheckImage.src = "images/check.png";
        items[x].htmlCheckImage.setAttribute("class", "check");
        completedButtons[x].append(items[x].htmlCheckImage);

        items[x].htmlRemoveButton = document.createElement("td");
        items[x].htmlRemoveButton.setAttribute("class", "remove-button");
        items[x].htmlRemoveButton.innerHTML = "X";
        elements[x].append(items[x].htmlRemoveButton);
    }
    document.getElementById("enter-input").value = "";
};
