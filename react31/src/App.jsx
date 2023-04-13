import {Router} from '@reach/router'
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Home from "./components/pages/Home";
import Clock from "./components/pages/Clock";
import Tasks from './components/pages/Tasks';

function App(){
  return (
        <Router>
            <Home path="/"/>
            <About path="/about"/>
            <Help path="/help" />
            <Clock path="/clock"/>
            <Tasks path="/task"/>

        </Router>   
  );
}

export default App;
