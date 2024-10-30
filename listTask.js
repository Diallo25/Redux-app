// src/components/ListTask.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from '../Task';
import { toggleFilter } from '../actions/taskAction';

const ListTask = () => {
    const { tasks, filterStatus } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter(task => {
        if (filterStatus === 'done') return task.isDone;
        if (filterStatus === 'notDone') return !task.isDone;
        return true;
    });

    return (
        <div>
            <button onClick={() => dispatch(toggleFilter('all'))}>Tous</button>
            <button onClick={() => dispatch(toggleFilter('done'))}>Fait</button>
            <button onClick={() => dispatch(toggleFilter('notDone'))}>Non fait</button>

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id} >
                        <Task task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListTask;
