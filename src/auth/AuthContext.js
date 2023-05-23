import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children, db }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, password) => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);

      if (response.user) {
        const userRef = db.collection('users').doc(response.user.uid);
        await userRef.set({
          id: response.user.uid,
          email: response.user.email,
          name: '',
        });

        setUser(response.user);

        const tasksRef = db.collection('tasks');
        const querySnapshot = await tasksRef.where('user', '==', null).get();

        const batch = db.batch();

        querySnapshot.forEach((doc) => {
          batch.update(doc.ref, { user: response.user.uid });
        });

        await batch.commit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (response.user) {
        setUser(response.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (taskData) => {
    try {
      const taskRef = db.collection('tasks');
      await taskRef.add(taskData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try {
      const tasksRef = db.collection('tasks');
      const snapshot = await tasksRef.get();
      const tasksData = snapshot.docs.map((doc) => doc.data());
      return tasksData;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const updateTaskStatus = async (taskId, completed) => {
    try {
      const taskRef = db.collection('tasks').doc(taskId);
      await taskRef.update({ completed });
    } catch (error) {
      console.log(error);
    }
  };

  const updateTaskPriority = async (taskId, priority) => {
    try {
      const taskRef = db.collection('tasks').doc(taskId);
      await taskRef.update({ priority });
    } catch (error) {
      console.log(error);
    }
  };

  const getPriorities = async () => {
    try {
      const prioritiesRef = db.collection('priority');
      const snapshot = await prioritiesRef.get();
      const prioritiesData = snapshot.docs.map((doc) => doc.data());
      return prioritiesData;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        createTask,
        getTasks,
        updateTaskStatus,
        updateTaskPriority,
        getPriorities,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


