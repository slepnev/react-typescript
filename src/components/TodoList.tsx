import React from 'react';
import { ITodo } from '../interfaces';

type Props = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
};

const TodoList: React.FC<Props> = ({todos, onRemove, onToggle}) => {
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('copleted');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label htmlFor="">
              <input type="checkbox" name="" id="" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
              <span>{todo.title}</span>
              <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};

export default TodoList;
