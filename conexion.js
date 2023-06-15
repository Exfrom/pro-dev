function saveMachine() {
    // Obtener los valores ingresados en el formulario
    var name = document.getElementById("machine-name").value;
    var brand = document.getElementById("machine-brand").value;
    var model = document.getElementById("machine-model").value;
    var serial = document.getElementById("machine-serial").value;
    var date = document.getElementById("machine-date").value;
    var issue = document.getElementById("machine-issue").value;
    
    // Crear una nueva fila en la tabla con los valores ingresados
    var table = document.getElementById("machine-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML = name;
    cell2.innerHTML = brand;
    cell3.innerHTML = model;
    cell4.innerHTML = serial;
    cell5.innerHTML = date;
    cell6.innerHTML = issue;
    cell7.innerHTML = "En Mantenimiento"; // Se establece el estado inicial en "En Mantenimiento"
}

function guardarDatos(button) {
    // Obtener la fila de la tabla donde se encuentra el botón
    var row = button.parentNode.parentNode;
    
    // Cambiar el estado de la máquina a "Reparado"
    var statusCell = row.cells[6];
    statusCell.innerHTML = "Reparado";
}