function addTask(){
    var taskInput = document.getElementById('to-input');
    // it helps to get the value of the input entered by the user
    var taskText = taskInput.value.trim();
    // it helps to remove the white spaces from the input entered by the user

    if (taskText !== '') { // it checks whether the input is empty or not, it may happen that user may enter the empty input

      var todoList = document.getElementById('todo-list');
// it helps to get the ul element where the tasks will be added
// why ul element is used to add the tasks?
// because ul element is used to create the list of items, but by callling element what will happen?
// it will create the list of items in the ul element

      var li = document.createElement('li');
    //   it helps to create the li element
    // This line creates a new list item (<li>) element using the document.createElement method. This element is later used to represent an individual task in the to-do list. The reference to this newly created list item is stored in the variable li.

      li.innerHTML = 
      ` <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>`;

      todoList.appendChild(li);

      taskInput.value = '';
    }
}


function removeTask(button) {
    var li = button.parentElement;
    li.remove();
}