const inputbox = document.getElementById("input-box");
const listCont = document.getElementById("list-Container");
let popup = document.querySelector(".pop");
let p = document.getElementById("p");
let iR = document.getElementById("iR");
let iG = document.getElementById("iG");
let line = document.getElementById("line");

function addTask() {


    // setTimeout(function() {
    //     popup.style.display = "none";
    // },2000)


  if (inputbox.value === "") {
    console.log("if its empty");
    iR.style.display = "block";
    iG.style.display = "none";
    line.style.background = "red";
    p.innerText = "Please provide a value";
    popup.style.display = "block";

    // alert("Please enter a task");

  } else {


    console.log("provided a value", inputbox.value);
    popup.style.display = "block";
    p.innerText = "Item Added To The List";
    line.style.background = "#4FBD11";

    iR.style.display = "none";
    iG.style.display = "block";








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