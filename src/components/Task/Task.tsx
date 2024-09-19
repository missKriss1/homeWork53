import React from 'react';

interface TaskProps {
    text: string;
    remove: React.MouseEventHandler
}

const Task: React.FC <TaskProps> = ({text, remove}) => {
    return (
        <div className="taskForDone">
            <p className="textTask">{text}</p>
            <button className="buttonTask" type="button" onClick={remove}>Удалить задачу</button>
        </div>
    );
};

export default Task;