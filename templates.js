import {getStorageData, setStorageData} from './storageAPI.js';
import {getDateNow} from './utils.js';
import {Todo} from './Todo.js';

export {createHeader, createMain, createTodo, createCard};

//CREATE ELEMENTS
function createElement(tag,className,text = ''){
    const element = document.createElement(tag);
    const textElement = document.createTextNode(text);
    element.className = className;
    element.append(textElement);
    return element;
}


function createHeader(){
    const header = createElement('header', 'todo-header', '');
    const deleteButton = createElement('button', 'button', 'Delete All');
    deleteButton.id = 'delete-all';
    const input = createElement('input', 'input', '');
    input.id = 'header-input';
    input.placeholder = 'Enter todo...';
    const addButton = createElement('button', 'button', 'Add');
    addButton.id = 'add-card';
    header.append(deleteButton, input, addButton);
    return header;
}

function createMain(){
    const main = createElement('main', 'todo-main', '');
    return main;
}

function createCard(todo){
    const article = createElement('article', 'todo-card', '');
    article.id = todo.id;
    const input = createElement('input', 'check-box', '');
    input.type = 'checkbox';
    input.id = 'checkbox';
    input.checked = todo.isChecked;
    const paragraph = createElement('p', 'todo-text', todo.text);
    if(input.checked === true){
        article.classList.add('dark');
        paragraph.classList.add('line-through');
    }
    const removeButton = createElement('button', 'x-button', 'X');
    removeButton.id = 'delete-card';
    const date = createElement('p', 'article-date', todo.time );
    article.append(input, paragraph, removeButton, date);
    return article;
}

function createTodo(){
    const todos = getStorageData();
    const text = document.getElementById('header-input').value;
    const dateNow = getDateNow();
    const todo = new Todo(text,dateNow);
    todos.push(todo);
    setStorageData(todos);
    return todos
}

