import React from 'react';
import { ITodo } from '../interfaces';

type Props = {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
};

const TodoList: React.FC<Props> = ({todos, onRemove, onToggle}) => {
  if (todos.length === 0) {
    return (
      <p className="center">Пока ничего нет</p>
    )
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('copleted');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
              <span>{todo.title}</span>
              <i className="material-icons red-text"
                 onClick={(event) => removeHandler(event, todo.id)}
              >delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};

export default TodoList;
