import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './component/NotFound';
import './styles/output.css';

function App() {
  return (
    <Router>
      <div className="App p-4 sm:p-24">

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
