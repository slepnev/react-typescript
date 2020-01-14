import React, { Fragment, useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {

  };

  const removeHandler = () => {

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
