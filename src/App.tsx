import { TasksProvider } from './components/TasksProvider';
import AddTask from './components/AddTask';
import TaskList from 'components/TasksList';


export default function App() {
    return (
      <TasksProvider>
          <h1>TodoList</h1>
          <AddTask/>
          <TaskList/>
      </TasksProvider>
    );
  }

