import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
function App() {
  return (
    <div className="App">
   <Provider store={store}>
    <h1>To do list</h1>
      <TaskList />
      <AddTask />
      </Provider>
    </div>
  );
}

export default App;
