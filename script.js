
const userIdSelection = document.getElementById("userIdNumber");

const todoList = document.getElementById('todo-list');
console.log(todoList);

let todoCompletion = true;

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]


    

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => console.log(arrayOfTodos);


const populateTodos = (array) => { for (let i = 0, len=array.length; i < len; i++) {addElement(i, array)} }


const filterTodos = () => {
    clearTodos()
    // I needed to use the less specific == to get this to work, since I realized the value is seen as a string rather than a number and I don't
    // want to take up space converting it to a num. This got my code working as intended.
    const filteredTodoList = arrayOfTodos.filter(todo => {
            if (todo.userId == userIdSelection.value) {
                return true;
            } else {return false;}    
        }
    )
    populateTodos(filteredTodoList);
    console.log(filteredTodoList);
    
}

const filterTodoByCompletion = (filter) => {
    todoCompletion = filter;
    clearTodos()
    const filteredTodoList = arrayOfTodos.filter(todo => {
            if (todo.userId == userIdSelection.value && todo.completed === todoCompletion) {
                return true;
            } else {return false;}    
        }
    )
    populateTodos(filteredTodoList);
    console.log(filteredTodoList);
}

const addElement = (i, array) =>
 {
    const newLi = document.createElement('li');
    const liContent = document.createTextNode(array[i].title);

    newLi.appendChild(liContent);
    todoList.append(newLi);
 }

 const clearTodos = () =>  todoList.innerHTML = '';


 const testUserInput = () => console.log(userIdSelection.value);