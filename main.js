function addNewTask() {

    var table = document.getElementById("table");


    var taskName = document.getElementById("task_name").value;


    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");
    var text = document.createTextNode(taskName);
    newCell.appendChild(text);
    newRow.appendChild(newCell);

    // Adiciona a nova linha à tabela
    table.appendChild(newRow);
}