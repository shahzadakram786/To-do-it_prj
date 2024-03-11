const inputbox = document.getElementById('input-box');
const listCont = document.getElementById('list-Container');


function addTask(){
    if(inputbox.value === ''){
        alert("Please enter a task");
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listCont.appendChild(li);
    }

inputbox.value  = '' ; 
}
