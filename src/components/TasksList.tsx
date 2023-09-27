import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksProvider';
import { IState, Task } from 'types/typeState';
import { Constants } from 'types/actions';
import { PartialTask } from 'types/typeAction';
import {  Input } from 'antd';
import moment from 'moment';

export default function TaskList() {
  const tasks = useTasks() as IState;
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <CreateTask task={task} />
        </li>
      ))}
    </ul>
  );
}

interface Props {
  task: Task
}



function CreateTask({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch() as React.Dispatch<PartialTask> ;
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <Input style={{ width: '20%' }}
          value={task.text}
          onChange={e => {
            dispatch({
              type: Constants.CHANGE_TASK,
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      {moment().format('D/MM/YYYY')}
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: Constants.DELETE_TASK,
          id: task.id
        });
      }}>
        Delete
      </button>
    </label>
  );
}
