let task = document.querySelector("#new-task");
let addTaskBtn = document.querySelector("#addTask");
let showtask = document.querySelector("#items");
let showDeletedTask = document.querySelector("#deleted");


addTaskBtn.addEventListener('click', function(event){
    event.preventDefault();
    let newTask = document.createElement('li');
    newTask.id = "taskId";
    let label = document.createElement('label');
    let input = document.createElement('input');
    label.innerText = task.value;
    input.type='checkbox';
    newTask.appendChild(input);
    newTask.appendChild(label);
    if (task.value != " "){
        showtask.appendChild(newTask);
    }
    task.value = " ";
    input.addEventListener('click', function(){
        newTask.removeChild(input);
        showDeletedTask.appendChild(newTask);
        newTask.addEventListener('dblclick', function(){
            if(showDeletedTask.querySelector('#taskId')){
                newTask.remove();
            }
        })
    })
    }
);


