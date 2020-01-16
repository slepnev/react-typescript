import React, { useRef } from 'react';

interface OwnProps {
  onAdd(title: string): void
}

type Props = OwnProps;

const TodoForm: React.FC<Props> = props => {
  /* Реализация через State */
  // const [title, setTitle] = useState<string>('');

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  // const keyPressHandler = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     console.log(title);
  //     setTitle('');
  //   }
  // };

  /* Реализация через Ref */
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}

        ref={ref}

        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  );
};

export default TodoForm;

