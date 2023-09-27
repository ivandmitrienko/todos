import { useState } from 'react';
import { useTasksDispatch } from './TasksProvider.js';
import { Constants } from '../../types/actions.js';
import { IAddTask } from '../../types/typeAction.js';

let nextId = 0;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch as React.Dispatch<IAddTask>;
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


