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
        <button class="done" onclick="checkList(this)">&check;</button>`

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

function delListItem(e) {
    if (confirm("Are you sure?")) {
        e.parentNode.remove()
    }
}

function checkList(e) {

    var text = e.previousElementSibling
    text.previousElementSibling.classList.toggle('check')
    if (text.previousElementSibling.classList.contains('check')) {
        e.parentNode.style.backgroundColor = "lightGreen"
    } else {
        e.parentNode.style.backgroundColor = "white"
    }
}

function filterItems() {
    var input = document.getElementById('filterInput')
    var filter = input.value.toUpperCase()
    var li = taskList.getElementsByTagName('li')

    for (var i = 0; i < li.length; i++) {
        var span = li[i].getElementsByTagName('span')[0]
        var textValue = span.textContent || span.innerText

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }
}