const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("ToDo can't be empty, write something!");
    }else{
        let li = document.createElement("li"); //creates new list element
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li); //appends this newly created list item to the listcontainer.

        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //delete icon
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}


listcontainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

 }, false);

 
 function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
 }

 function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
 }
 showTask();