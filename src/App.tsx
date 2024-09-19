import './App.css'
import React, {useState} from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from "./components/Task/Task.tsx";


const App = () => {

    const [tasks, setTasks] = useState([
        { id: '1', text: 'Первая задача' },
        { id: '2', text: 'Вторая задача' },
        { id: '3', text: 'Третья задача' }
    ]);
    const [newTasks, setNewTask] = useState('');

    const ChangeAdd = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNewTask(e.target.value);
    }

    const addTask = () => {
        const data = new Date();
        const dataString = data.toString();
        const newTask = {
            id: dataString,
            text: newTasks,
        };
        setTasks([...tasks, newTask]);

        console.log(newTasks);

    }

    const delateTask = (id:string) =>{
        setTasks(tasks.filter(task => task.id !== id));
    }


    return (
        <>
            <div className="container">
            <AddTaskForm OnChangeAdd={ChangeAdd} addTask={addTask} text={newTasks}/>
            <h1>Список задач</h1>
            <hr/>

            {tasks.map(tasks => (
                <Task key={tasks.id} text={tasks.text} remove={() => delateTask(tasks.id)}/>
            ))}
            </div>
        </>
    )
};

export default App
