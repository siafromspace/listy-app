const taskList = document.querySelector('.task-list')
const addTask = document.getElementById('add-task')

addTask.addEventListener("click", addNewTask)
function addNewTask(e) {
    var newTask = document.getElementById('input-task').value

    if (newTask === "") {
        alert("Enter new Task")
    } else {
        e.preventDefault()
        const listContainer = document.querySelector('.tasks')
        listContainer.classList.remove('remove')

        var li = document.createElement('li')
        li.className = 'task-list-item'

        li.innerHTML = `<span>${newTask}</span>
        <button class="delete" onclick="delListItem(this)">&#x2715;</button>
        <button class="done">&check;</button>`

        document.getElementById('input-task').value = ""

        taskList.appendChild(li)
    }
}

const inputTask = document.getElementById('input-task')
inputTask.addEventListener("keypress", enterNewTask)
function enterNewTask(e) {
    if (e.key === "Enter") {
        addNewTask()
    }
}

const dlt = document.getElementsByClassName('delete')
for (var i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener("click", delListItem)
}

function delListItem(e) {
    e.parentNode.remove()
}



// function delListItem(e) {
//     if (e.target.className == "delete") {
//         if (confirm("Are you sure?")) {
//             var li = e.target.parentElement
//             taskList.removeChild(li)
//         }
//     }
// }

// const check = document.querySelectorAll('.done')
// for (var i = 0; i < check.length; i++) {
//     dlt[i].addEventListener("click", checkList)
// }
// function checkList() {
//     this.parentNode.style.backgroundColor = "green"
// }
