//GET DATE
export function getDateNow(){
    const time = new Date();
    return  `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;
}

//DARK THEME
export function turnDarkTheme(input){
    if(input.checked === true){
        input.parentNode.classList.add('dark');
        input.nextSibling.classList.add('line-through');
    }else{
        input.parentNode.classList.remove('dark');
        input.nextSibling.classList.remove('line-through');
    }
}