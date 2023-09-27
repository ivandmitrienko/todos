import { TasksProvider } from './components/TasksProvider';
import AddTask from './components/AddTask';


export default function App() {
    return (
      <TasksProvider>
          <h1>TodoList</h1>
          <AddTask/>
      </TasksProvider>
    );
  }

