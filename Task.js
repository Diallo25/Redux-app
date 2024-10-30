// src/components/Task.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from './actions/taskAction';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateTask(task.id, newDescription));
        setIsEditing(false);
    };

    return (
        <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.description}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
        </div>
    );
};

export default Task;
