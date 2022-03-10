//STORAGE
export function getStorageData(){
    let todos = JSON.parse(localStorage.getItem('todos'));
    return todos ??= [];
}

export function setStorageData(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
}
