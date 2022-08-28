let addTask=document.querySelector('.task_input h3');
let newTask=document.querySelector('.new_task');
let taskInput=document.querySelector('.task_input input');

addTask.addEventListener('click',( )=>{
  if (taskInput.value.length<10) {
    taskInput.value=`cannot be less than 10`
  } else if(taskInput.value.length>21){
    taskInput.value=`cannot be greater than 21`
  }else{

  let editDelete=document.createElement('div');
  editDelete.classList.add('edit_delete')
  let editTask=document.createElement('h3');
  editTask.innerText='Edit';
  let deleteTask=document.createElement('h3');
  deleteTask.innerText='Delete';
  editDelete.appendChild(editTask);
  editDelete.appendChild(deleteTask);
  let task=document.createElement('div');
  task.classList.add('task_content');
  let taskItem=document.createElement('p');
  task.appendChild(taskItem);
  task.appendChild(editDelete);
  newTask.appendChild(task);
  taskItem.innerText=taskInput.value;
  taskInput.value=` `;
  editTask.addEventListener('click',()=>{
    if (editTask.innerText.toLowerCase()===`edit`) {
      editTask.innerText=`Save`;
      taskInput.value=taskItem.innerText;
    } else if(editTask.innerText.toLowerCase()===`save`) {
      if (taskInput.value.length<10  ) {
        alert(`too short`);
      } else if(taskInput.value.length>21){
        alert(`too long`);
      }else{
        editTask.innerText=`Edit`;
        taskItem.innerText=taskInput.value;
        taskInput.value=` `; 
      }
    }
  });
  deleteTask.addEventListener('click',()=>{
    task.removeChild(taskItem);
    task.removeChild(editDelete);
    newTask.removeChild(task);
    editDelete.removeChild(editTask);
    editDelete.removeChild(deleteTask);
  });
  }
});
taskInput.addEventListener('click',()=>{
  if (taskInput.value.length<10 || taskInput.value.length>21 ) {
    taskInput.value=''; 
  } else {
    taskInput.value=taskItem.innerText;
  }
})
