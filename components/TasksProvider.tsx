import React, { useContext, useReducer, createContext } from 'react'
import { IState } from '../types/typeState';
import { IAction } from '../types/typeAction';
import { Constants } from '../types/actions';

const TasksContext = createContext<IState | null>(null);
const TasksDispatchContext = createContext<React.Dispatch<IAction> | null>(null);
let initialTasks: IState = [];
interface Props {
    children: React.ReactNode;
}

export function TasksProvider({ children }: Props) {

    const [tasks, dispatch] = useReducer(
        tasksReducer,
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

function tasksReducer(tasks: IState, action: IAction) {
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
