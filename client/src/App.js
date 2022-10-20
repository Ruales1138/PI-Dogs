import { Route } from 'react-router-dom';
import InitialPage from './components/InitialPage/InitialPage';
import Dogs from './components/Dogs/Dogs';
import DogDetail from './components/DogDetail/DogDetail';
import DogCreate from './components/DogCreate/DogCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={InitialPage}/>
      <Route exact path='/dogs' component={Dogs}/>
      <Route exact path='/dogs/detail' component={DogDetail}/>
      <Route exact path='/dogs/create' component={DogCreate}/>
    </div>
  );
};

export default App;