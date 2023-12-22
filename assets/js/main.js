let btn = document.getElementById("btn")
let TaskInput = document.getElementById("TaskInput")
let boxes = document.querySelectorAll(".Box")
let drag = null;
// Adding new task function
btn.onclick = () => {
    if (TaskInput.value != '') {
        boxes[0].innerHTML += `
    <p class="task" draggable="true">${TaskInput.value}</p>
    `
        TaskInput.value = ''
    }
    taskDrag();
}
// Dragging function 'task from one box to another'
function taskDrag() {
    let tasks = document.querySelectorAll('.task')
    tasks.forEach(task => {
        //darg start
        task.addEventListener('dragstart', () => {
            drag = task
            task.style.opacity = '0.5'
        });
        //drag end
        task.addEventListener('dragend', () => {
            darg = null;
            task.style.opacity = '1'
        });
        boxes.forEach(Box => {
            Box.addEventListener('dragover', (e) => {
                e.preventDefault()
                Box.style.background = 'green'
                Box.style.color = '#fff'
            });
            Box.addEventListener('dragleave', () => {
                Box.style.background = '#fff'
                Box.style.color = '#000'
            });
            ///drop event/*/*/*/*/
            Box.addEventListener('drop', () => {
                Box.append(drag)
                Box.style.background = '#fff'
                Box.style.color = '#000'
            });
        })
    })
}
