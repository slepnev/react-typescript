import React, { useState } from 'react';

interface OwnProps {
}

type Props = OwnProps;

const TodoForm: React.FC<Props> = () => {
  const [title, setTitle] = useState('');

  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Введите название дела"/>
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  );
};

export default TodoForm;

