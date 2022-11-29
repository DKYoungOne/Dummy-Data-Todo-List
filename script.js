

const todoList = document.getElementById('todo-list');
console.log(todoList);

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

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (let i = 0, len=arrayOfTodos.length, text = arrayOfTodos[i].title; i < len; i++) {addElement(i)}
}


const addElement = (i) =>
 {
    const newLi = document.createElement('li');
    const liContent = document.createTextNode(arrayOfTodos[i].title);

    newLi.appendChild(liContent);
    todoList.append(newLi);
 }