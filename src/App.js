import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignUpForm />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;