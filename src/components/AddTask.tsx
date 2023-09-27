import { useState } from 'react';
import { IAddTask } from '../types/typeAction';
import { useTasksDispatch } from './TasksProvider';
import { Constants } from '../types/actions';

let nextId = 0;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch() as React.Dispatch<IAddTask>;
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: Constants.ADD_TASK,
          id: nextId++,
          text: text
        }); 
      }}>Add</button>
    </>
  );
}


