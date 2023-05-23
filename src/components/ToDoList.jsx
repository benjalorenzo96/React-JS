import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';

const ToDoList = () => {
  const { user, getTasks, getPriorities } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getTasks();
      const prioritiesData = await getPriorities();
      setTasks(tasksData);
      setPriorities(prioritiesData);
    };

    fetchData();
  }, [getTasks, getPriorities]);

  // Resto del código del componente
};

export default ToDoList;

