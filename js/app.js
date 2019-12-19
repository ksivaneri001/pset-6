let items = [];

window.onload = function() {
    document.getElementById("test").onclick = createItem;
}

const createItem = function() {
    let newItem = window.prompt();
    newItem = newItem.trim();

    items.push(newItem);

    window.alert(items);
}
