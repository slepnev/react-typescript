import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';

const App: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar/>
      <div className='container'>
        <TodoForm/>
      </div>
    </Fragment>
  );
};

export default App;
