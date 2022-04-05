import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
// import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    // <ParallaxProvider>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    // </ParallaxProvider>
  );
}

export default App;
