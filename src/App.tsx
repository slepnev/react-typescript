import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

declare var confirm: (question: string) => boolean;

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('todos')
  }, [])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      console.log(todo.completed);

      return todo;
    }));
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены что хотите удалить?');
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return (
    <Fragment>
      <Navbar/>
      <div className='container'>
        <TodoForm onAdd={addHandler}/>

        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    </Fragment>
  );
};

export default App;
