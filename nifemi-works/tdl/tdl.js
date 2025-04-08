inputBox = document.getElementById("inputbox");
addNew = document.getElementById("addnew");
callOut = document.getElementById("callout");

let tasksArray = [];

function tasks () {
    callOut.innerHTML = "";
    if (inputBox.value != "") {
        if (!tasksArray.includes(inputBox.value)) {
            tasksArray.push(inputBox.value);
        }else {
            alert("Error")
        }
        tasksArray.forEach(item => {
            let liTag = document.createElement("li");
            callOut.appendChild(liTag);
            liTag.textContent = item;
            liTag.style.color = "blue";
            liTag.className = "listItem";
            console.log(item);
        });
    }
}