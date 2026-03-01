let taskbtn = document.querySelector(".task-btn");
let form = document.querySelector("#form");
let modal = document.querySelector(".modal");
let bgremove = document.querySelector(".bg");
let addtskbtn = document.querySelector(".add-btn");
let titleInput  = document.querySelector("#task-title-input");
let titleAmount  = document.querySelector("#task-amnt-input");
let categorySelect = document.querySelector("select");
let table = document.querySelector("table")


function newDiv(){

    let newRow = document.createElement("tr");

    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");

    let cell5 = document.createElement("td");

    let actionButton = document.createElement("button")
    actionButton.innerText = "Delete";
    actionButton.className = "del-btn";
    actionButton.addEventListener("click", () =>{
        newRow.remove();
    });
 

    cell1.textContent = titleInput.value.trim();
    cell2.textContent = titleAmount.value.trim();
    cell3.textContent = categorySelect.value;
    cell4.textContent = titleAmount.value.trim();

    cell5.appendChild(actionButton);


    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);


    table.appendChild(newRow)
}


taskbtn.addEventListener("click", function(){
    modal.classList.add("active");

    form.reset();
})

bgremove.addEventListener("click", function(){
    modal.classList.remove("active");
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    let input = titleInput.value.trim();
    let amount = titleAmount.value.trim();
    let select = categorySelect.value;

    
    console.log(input, amount, select)
    modal.classList.remove("active");


    newDiv()
    
})


