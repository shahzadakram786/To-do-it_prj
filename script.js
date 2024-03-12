const inputbox = document.getElementById("input-box");
const listCont = document.getElementById("list-Container");

function addTask() {
  if (inputbox.value === "") {
    console.log("if its empty");

    alert("Please enter a task");

  } else {
    console.log("if adding some text in the iput");

    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listCont.appendChild(li);
    let  span =  document.createElement("span");
    span.innerHTML = `<i class="fa-solid fa-x"></i>`;
    li.appendChild(span);
  }

  inputbox.value = "";
}

listCont.addEventListener("click" , function(e){


    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");;
        // console.log(e.target.classList.toggle("checked"));
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }


})