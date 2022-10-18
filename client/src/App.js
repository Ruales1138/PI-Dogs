import { Route } from 'react-router-dom';
import InitialPage from './components/InitialPage/InitialPage';
import Dogs from './components/Dogs/Dogs';
import DetailDog from './components/DetailDog/DetailDog';
import CreateDog from './components/CreateDog/CreateDog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={InitialPage}/>
      <Route exact path='/dogs' component={Dogs}/>
      <Route exact path='/dogs/detail' component={DetailDog}/>
      <Route exact path='/dogs/create' component={CreateDog}/>
    </div>
  );
};

export default App;