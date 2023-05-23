import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom'; 

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const { user, createTask } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const taskData = {
      name: taskName,
      priority,
      user: user.id, 
    };

    await createTask(taskData);
    navigate('/'); 
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select id="priority" value={priority} onChange={handlePriorityChange}>
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;

