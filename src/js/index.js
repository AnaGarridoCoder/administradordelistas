const form = document.getElementById("Studentsform");

addEventListener("submit", function (event) {
    event.preventDefault();
    let formFieldFormData = new FormData(form);

    let studentsTableRef = document.getElementById("studentsTable")

    let newtableRowRef = studentsTableRef.insertRow(-1);

    newTypeCellRef = newtableRowRef.insertCell(0)
    newTypeCellRef.textContent = formFieldFormData.get("nameData")

    newTypeCellRef = newtableRowRef.insertCell(1)
    newTypeCellRef.textContent = formFieldFormData.get("savedData")

    newTypeCellRef = newtableRowRef.insertCell(2)
    newTypeCellRef.textContent = formFieldFormData.get("evaluationData")

    let newDeleteCell = newtableRowRef.insertCell(3)
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    newDeleteCell.appendChild(deleteButton)

    deleteButton.addEventListener("click", (event) => {
       event.target.parentNode.parentNode.remove()
    }
    )

document.getElementById("nameData").value="";
document.getElementById("savedData").value="";
document.getElementById("evaluationData").value="";
document.getElementById("nameData").focus();

})

let formFieldFormData = new FormData(form);
formFieldFormData.get




