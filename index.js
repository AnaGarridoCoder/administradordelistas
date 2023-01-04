const form = document.getElementById("Studentsform");

addEventListener("submit", function (event) {
    event.preventDefault();
    let formFieldFormData = new FormData(form);

    let studentsTableRef = document.getElementById("studentsTable")

    let newtableRowRef = studentsTableRef.insertRow(-1);

    newTypeCellRef = newtableRowRef.insertCell(0)
    newTypeCellRef.textContent = formFieldFormData.get("nameData")

    newTypeCellRef = newtableRowRef.insertCell(1)
    newTypeCellRef.textContent = formFieldFormData.get("ageData")

    newTypeCellRef = newtableRowRef.insertCell(2)
    newTypeCellRef.textContent = formFieldFormData.get("eyecolorData")
})

let formFieldFormData = new FormData(form);
formFieldFormData.get