import React from 'react';
import { connect } from 'react-redux';
import TaskCard from '../../components/TaskCard/TaskCard';

const MyTasks = ({tasks}) => {
    const taskCards = tasks.map(task => <TaskCard key={task.id} task={task}/>)
    return (
        taskCards.length > 0 ? taskCards : null
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.myTasks,
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(MyTasks)