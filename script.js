let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function renderTasks() {
    document.getElementById('todo-list').innerHTML = tasks.map((task, i) =>
        `<li>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${i})">
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="deleteTask(${i})">Delete</button>
        </li>`).join('')
}
function addTask() {
    let taskText = document.getElementById('new-task').value.trim()
    if (taskText) {
        tasks.push({ text: taskText, completed: false })
        saveTasks()
    }
    document.getElementById('new-task').value = ''
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks()
}

function deleteTask(index) {
    tasks.splice(index, 1)
    saveTasks()
}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
}
renderTasks()