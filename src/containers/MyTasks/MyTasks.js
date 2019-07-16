import React from 'react';
import { connect } from 'react-redux';
import TaskCard from '../../components/TaskCard/TaskCard';

const MyTasks = ({tasks, projectId, projects}) => {
    let filteredTasks
    let taskCards

    if (!!projectId) {
        filteredTasks = tasks.filter(task=>task.attributes.project_id === parseInt(projectId))
        taskCards = filteredTasks.map(task => <TaskCard key={task.id} task={task}/>)
    } else {
        taskCards = tasks.map(task => <TaskCard key={task.id} task={task}/>)
    }
    return (        
        taskCards.length > 0 ? taskCards : <h1>No Tasks Assigned</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.myTasks.directory,
        currentUser: state.currentUser,
        projects: state.projects.listing,
        projectId: state.myTasks.filterProjectId,
    }
}

export default connect(mapStateToProps)(MyTasks)