let date = document.getElementById("date");
let expense = document.getElementById("expense");
let ammount = document.getElementById("ammount");
let submitButton = document.getElementById("submit");
let tableBody = document.getElementById("tableBody");

//Submit button event listener
submitButton.addEventListener('click', function(){
    let tableRow = document.createElement('tr');

    let dateRow = document.createElement('td');
    let expenseRow = document.createElement('td');
    let ammountRow = document.createElement('td');

    //Delete button
    let deleteRow = document.createElement('button');
    deleteRow.innerText = 'Remove';

    //Getting the value from the input fields and assigning them 
    dateRow.innerText = date.value;
    ammountRow.innerText = ammount.value;
    expenseRow.innerText = expense.value;

    //Appending to the table row    
    tableRow.appendChild(dateRow);
    tableRow.appendChild(expenseRow);
    tableRow.appendChild(ammountRow);
    tableRow.appendChild(deleteRow);

    //Event listener for the remove button
    deleteRow.addEventListener('click', function(){
        tableBody.removeChild(tableRow);
    })

    tableBody.appendChild(tableRow);

    //Resets the input fields after submission to empty
    date.value = ""
    expense.value = ""
    ammount.value = ""

})
