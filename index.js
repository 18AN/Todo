'use strict'

//CREATE ELEMENTS
import { createHeader, createMain, createCard, createTodo} from './templates.js';

//STORAGE
import {getStorageData,setStorageData} from './storageAPI.js';

//DARK THEME
import {turnDarkTheme} from './utils.js';

//BODY
const root = document.getElementById('root');
const header = createHeader();
root.append(header);
let main = createMain();
root.append(main);
const todos = getStorageData();
render (todos);

//EVENT LISTENERS
header.addEventListener('click', onHeader);

//EVENT HANDLERS
function onHeader(event){
    if(event.target.id === 'delete-all'){
        main.innerHTML = "";
        setStorageData([]);
    }else if(event.target.id === 'add-card'){
        const todos = createTodo();
        render(todos);
        document.getElementById('header-input').value = '';
    }  
}

function onCard(event){
    if(event.target.id === 'delete-card'){
       setStorageData(getStorageData().filter(item => item.id !== event.target.parentNode.id));
       this.remove();
    }else if(event.target.id === 'checkbox'){
       turnDarkTheme(event.target);
       setCheckBoxStatus(event.target);
    }
}

//CHECKBOX STATUS
function setCheckBoxStatus(input){
    const todos = getStorageData();
    const todo = todos.find(item => item.id === input.parentNode.id);
    if(input.checked === true){
        todo.isChecked = true;
    }else{
        todo.isChecked = false;
    }
    setStorageData(todos);
}

//RENDER
function render (todos){
    main.innerHTML = '';
    todos.forEach((todo) =>{
        const card = createCard(todo);
        card.addEventListener('click', onCard);
        main.append(card);
    });
}      
