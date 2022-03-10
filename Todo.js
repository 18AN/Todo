//TODO CONSTRUCTOR
export function Todo(text, time, isChecked = false){
    this.id = (Math.random()*100).toString(10);
    this.text = text;
    this.time = time;
    this.isChecked = isChecked;
} 