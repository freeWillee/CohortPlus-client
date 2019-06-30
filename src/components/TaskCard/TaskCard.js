import React from 'react'
import classes from './TaskCard.module.css';

const TaskCard = (props) => {
    const {title, content, status, due_date} = props.task.attributes
    
    return (
        <div className={classes.TaskCard}>
            <p>Task Title: {title}</p>
            <p>Task Content: {content}</p>
            <p>Status: {status}</p>
            <p>Due date: {due_date}</p>
        </div>
    )
}

export default TaskCard