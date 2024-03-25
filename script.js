function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task.");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";

    // Add delete functionality
    var deleteButton = document.createElement("span");
    deleteButton.appendChild(document.createTextNode("\u00D7"));
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
    li.appendChild(deleteButton);
}

// Press Enter key to add task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});
