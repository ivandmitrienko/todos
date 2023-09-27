import { useState } from 'react';
import { IAddTask } from '../types/typeAction';
import { useTasksDispatch } from './TasksProvider';
import { Constants } from '../types/actions';
import { Button, Input } from 'antd';

let nextId = 0;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch() as React.Dispatch<IAddTask>;
  return (
    <>
      <Input style={{ width: '20%' }}
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button type = "primary" onClick={() => {
        setText('');
        dispatch({
          type: Constants.ADD_TASK,
          id: nextId++,
          text: text
        }); 
      }}>Add</Button>
    </>
  );
}


