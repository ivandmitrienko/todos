import React, { useContext, useReducer, createContext } from 'react'
import { IState } from '../types/typeState';
import { IAction } from '../types/typeAction';
import { Constants } from '../types/actions';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null)

export default function TasksProvider({ children }) {

    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks
    )
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

const defaultState: IState = {
    tasks: [],
}

function tasksReducer(tasks: IState = defaultState, action:IAction) {
    switch (action.type) {
        case Constants.ADD_TASK: {
            return [...tasks, {
                id: action.id,
                text: action.text,
            }];
        }
        case Constants.CHANGE_TASK: {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case Constants.DELETE_TASK: {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
