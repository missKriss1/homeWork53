import * as React from "react";
interface AddTaskFormType {
    OnChangeAdd: React.ChangeEventHandler<HTMLInputElement>;
    addTask: React.MouseEventHandler;
    text: string
}

const AddTaskForm: React.FC <AddTaskFormType> = ({OnChangeAdd, addTask, text }) => {
    return (
        <div>
            <input className="inputTask" type={"text"} placeholder="Введите задачу" onChange={OnChangeAdd} value={text}/>
            <button className="buttonAdd" type="button" onClick={addTask } >Добавить</button>
        </div>
    );
 }

export default AddTaskForm;