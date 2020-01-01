let items = [];

window.onload = function() {
    document.getElementById("submit-input").onclick = createItem;
}

const createItem = function() {
    let input = document.getElementById("enter-input").value;
    if (input === "") {}
    else {
        let object = {
            task: input,
            completed: false,
            prioritized: false,
        }

        items.push(object);

        let id = items.indexOf(object);

        let newRow = document.createElement("tr");
        newRow.setAttribute("id", "row-" + id);
        document.getElementById("task-table").append(newRow);

        let priorityButton = document.createElement("td");
        priorityButton.setAttribute("id", "priority-button-" + id);
        priorityButton.innerHTML = "!";
        document.getElementById("row-" + id).append(priorityButton);

        let newTask = document.createElement("td");
        newTask.innerHTML = input;
        document.getElementById("row-" + id).append(newTask);

        let completedButton = document.createElement("td");
        completedButton.setAttribute("id", "completed-button-" + id);
        completedButton.innerHTML = "O";
        document.getElementById("row-" + id).append(completedButton);

        let removeButton = document.createElement("td");
        removeButton.setAttribute("id", "remove-button-" + id);
        removeButton.innerHTML = "X";
        document.getElementById("row-" + id).append(removeButton);
    }
    document.getElementById("enter-input").value = "";
}
