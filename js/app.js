let items = [];

window.onload = function() {
    document.getElementById("submit-input").onclick = createItem;
}

const createItem = function() {
    let input = document.getElementById("enter-input").value;

    window.alert(input);

    document.getElementById("enter-input").value = "";
}
